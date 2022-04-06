var vm = new Vue({
    el: '#databinding',
    data() {
        return {
            currencies: [
                { name: "USD", desc: "US Dollar" },
                { name: "EUR", desc: "Euro" },
                { name: "INR", desc: "Indian Rupee" },
                { name: "BHD", desc: "Bahraini Dinar" }
            ],
                convertFrom: 'INR',
                convertTo: 'USD',
                amount: ""
        }
    }
})