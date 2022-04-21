const vm = new Vue({
    el: '#app',
    data: {
        name: "hello",
        count: 0
    },
    methods: {
        onAdd() {
            this.count +=1
        }
    },
})