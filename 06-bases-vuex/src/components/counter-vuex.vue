<template>
    <div>

        <h1>Contador con vuex</h1>
        <h2>Acesi directo: {{$store.state.counter.count}} </h2> <!--primera  forma -->
        <h2>Computada: {{contadorComputado}} </h2> <!--segunda  forma -->

                <button @click="aumentar">+1</button>
                <button @click="subirCinco">+5</button>
                <button  @click="ramdomInt" :disabled="isload">random</button>


        <h1>Con el map state {{count}}</h1>
        <h1>Con el map state pero de otra variable: {{lasMutaciones}}</h1>


        <!-- acceder a los getters -->
    <h1> El cuadrado del numero en count: {{$store.getters['counter/CuadradoCount']}}</h1>
    </div>
</template>

<script>
import { mapState , mapActions } from 'vuex' 
export default {

    methods:{
        aumentar(){//!esta funcion es para poder llamar la mutacion del store
            this.$store.commit('counter/increment')
        },

        subirCinco(){
            this.$store.commit('counter/incrementBy',5)
        },



        //?Se puede llamar este metodo del action de forma mapeada como se llama al state
        // ...mapActions('counter',['incrementRamdom'])//!forma 1

        ...mapActions('counter',{//!forma 2 esto se hace asi por si llegara a ver otra funcion con ese mismo nombre
                ramdomInt: 'incrementRamdom'
            })




        // IncrementRandom(){
        //     this.$store.dispatch('incrementRamdom')
        // },
        
        



    },
    computed:{
        contadorComputado(){
            return this.$store.state.counter.count
        },
        //*Cuando se hacen modulos con vuex , es necesario espesificar que modulo se usara
        ...mapState('counter',['count','lasMutaciones','isload']) /* Tercera forma */

        // !Cuarta forma
        // ...mapState({
        //     count: state => state.count,
        //     mutations:state => state.lasMutaciones
        // })
    }
}
</script>
