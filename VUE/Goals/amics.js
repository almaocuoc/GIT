var vm = new Vue({
    el: '#app',
    data() {
        return {
            mostrar: false,
            amics: [{
                name: "Manuel Lorenz",
                Phone: '01234 5678 991',
                Email: 'manuel@localhost.com',
            },
            {
                name: "julie",
                Phone: '01234 5678 992',
                Email: 'julie@localhost.com',
            }
            ]
        }
    }
})