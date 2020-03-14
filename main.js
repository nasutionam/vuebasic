Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">
        <div class="product-image">
            <img v-bind:src="image" v-bind:alt="altText">
        </div>
        <div class="product-info">
            <h1>{{title}}</h1>
            <p>User is premium: {{ premium }}</p>
            <p>Shipping : {{shipping}}</p>

            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold Out</p>
            <p v-else>Out of stock</p>

            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div class="color-box" 
                v-for="(variant, index) in variants" 
                :key="variant.variantId"
                :style="{ backgroundColor: variant.variantColor }"
                @mouseover="updateProduct(index)">
            </div>

            <div class="cart">
                <p>Cart({{ cart }})</p>
            </div>
            <button 
                v-on:click="addToCart" 
                :disabled="!inStock"
                :class="{ disabledButton: !inStock }">
                Add to cart
            </button>
        </div>
    </div>
    `,
    data() {
        return {
            product: "Socks",
            brand: "Vue JS",
            image: "./assets/vmSocks-green-onWhite.jpg",
            altText: "Mantab",
            inStock: true,
            inventory: 9,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    varianId: 2234,
                    variantColor: "green",
                    variantImage: "./assets/vmSocks-green-onWhite.jpg",
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                    variantQuantity: 8
                }
            ],
            cart: 0,
            selectedVariant: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },  
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if(this.premium) {
                return "Free"
            } else {
                return 2.99
            }
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
})  