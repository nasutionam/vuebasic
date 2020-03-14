var product = "sdads"

var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./assets/vmSocks-green-onWhite.jpg",
        altText: "Mantab",
        inStock: true,
        inventory: 9,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                varianId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ]
    }
})