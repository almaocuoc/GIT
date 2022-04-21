Vue.component('contactes-amics', {
    template:`
    <div>
    <li>
          <h2>{{name}}</h2>
          <button @click='mostrar'>mostrar</button>
          <ul v-if="visible">
            <li><strong>Phone:</strong> {{Phone}}</li>
            <li><strong>Email:</strong> {{Email}}</li>
          </ul>
        </li>
    </div>`
    ,
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        mostrar() {
            this.visible = !this.visible
        }
    },
    props: [
        'name',
        'Phone',
        'Email'
    ]
})