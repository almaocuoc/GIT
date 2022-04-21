const vm = new Vue({
    el: '#app',
    data: {
        first: "alma",
        last: "ortiz",
        name: "",
        count: 0
    },
    methods: {
        onAdd() {
            this.count +=1
        }
    }
})