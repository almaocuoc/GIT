new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            {id:1, title: 'titulo 1'}
        ],
        postFontSize: 1,
    },
    methods: {
        onEnlargeText: function (enLargeAmount) {
            this.postFontSize += enLargeAmount
        }
    }
})