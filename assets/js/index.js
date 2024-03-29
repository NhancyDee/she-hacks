const store= [
    {
        itemName: 'T-Shirt',
        price: 6000,
        quantity: 0
    }, {
        itemName: 'Dress',
        price: 8000,
        quantity: 0
    }, {
        itemName: 'Jean',
        price: 4000,
        quantity: 0
    }
]
let app= new Vue({
    el: '#app',
    data: {
        title: 'Shopping Cart',
        showShoppingCart: false,
        storeItems: store,
        cart: [],
        total: 0
    },
    methods: {
        changeView: function() {
            if(this.showShoppingCart === false) {
                this.showShoppingCart = true;
            } else {
                this.showShoppingCart = false;
            }
        },
        addToCart: function (item) {
            this.cart.push(item);
            this.calcTotal()
        },
        calcTotal: function() {
            let total = 0
            for (let i=0; i < this.cart.length; i++) {
                total = total + (this.cart[i].price * this.cart[i].quantity)
            }
            this.total = total
        }
    }
})