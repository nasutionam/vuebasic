var product = "sdads"

var app = new Vue({
    el: '#app',
    data: {
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
        }
    }
})