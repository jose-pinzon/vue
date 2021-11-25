

const app =Vue.createApp({
    // template:`<h1> hola mundo</h1>
    // <p>{{ [1,2,3,5]  }} </p>
    // `
    //?entre la reprecentacion declarativa que son los que estan el las dobles llaves
    //?se pueden poner varias expreciones pero no todos

    //este crear un objeto reactivo lo que quiere decir que cualquier 
    // cambio que realicemos vue lo mostrara inmediatamenrte
    data(){
        return{
            nombre:'jose gabriel',
            frase:''
        }
    },
    methods:{
        cambiarFrase(){
            this.nombre = this.frase
        }
    }
})
app.mount('#myApp')


