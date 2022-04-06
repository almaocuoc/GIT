var vm = new Vue({
    el: '#app',
    data: {
        message: 'lista de paises',
        country: '',
        countries: ["canada", "uk", "usa", "spain", "alemania"]
    },
    computed: {
        paisesFiltrados: function () {
            if (this.country === '') {
                return this.countries
            } else {
                return this.countries.filter(element => element) === this.country
            }
        }
    }
})