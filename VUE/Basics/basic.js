/* const app = new Vue({
    el: '#app',
    template: '#ejemplo',
    data: {
        mensaje: "welcome to vue",
        imagen: "./img/grapes.jpg",
        URL: "https://campus.uoc.edu/"
    }
}); */


var app = new Vue({
    el: '#app',
    template: '#ejemplo',
    data: {
        mensaje: "welcome to vue",
        number: 10,
        ok: true
    },
    methods: {
        show: function(){
            return "que número es" + this.number;
        },
    }
});
