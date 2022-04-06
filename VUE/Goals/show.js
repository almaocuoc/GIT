var vm = new Vue({
    el: '#app',
    data: {
        showBooks: true,
        author: 'alma',
        title: 'meta',
        age: 48
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})