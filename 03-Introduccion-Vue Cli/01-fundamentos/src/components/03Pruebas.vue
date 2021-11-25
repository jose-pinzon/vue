<template>
  <h1>Pruebas</h1>
  <p>{{mensage}}</p>
  <p>{{numero}}</p><p>{{mostrarSuma}}</p>
  <button @click="subir()">Aumentar</button>
  <button @click="bajar()">Disminuir</button>

    <section>
        <input type="text" placeholde="Coloque un numero" v-model="NumInput">
        <h3>{{NumInput}}</h3>
    </section>


  

</template>

<script>
    export default {
        name:'prueba',
        props:{
            num:{
                type:Number,
            }
        },
        data(){
            return{
                mensage:'Contador de prueba',
                numero:this.num,
                NumInput:null
            }
        },
        methods:{
            subir(){
                this.numero++
            },

            bajar(){
                this.numero--
            },
        computed:{
            mostrarSuman(){
                return this.numero * this.numero
            }
        }


        }
    }
</script>

<style scope>
p{
    color: black;
}
input{
    margin: 1px solid;
    color: blue;
}
h3{
    color: aqua
}
section{
    padding:20px ;
    background-color: bisque;
}
span{
    color: black;
}
</style>