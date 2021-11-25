<template>
    <h1>¿Quien es el pokemon?</h1>
    <h1 v-if="pokemon==null">Espere porfavor...</h1>
 <!-- <div v-if="pokemon != null"> -->
<div v-else>
         <span>
            <h2>vidas restantes: {{vidas}}</h2>
        </span>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="PokemonShow"  :vidas="vidas"/>
        <PokemonOptions  :pokemones="pokemonArr" @selection="checkAnswer($event)"/><!--Este evento trae el valor que mandamos del componete hijo-->
 </div>

<template v-if="showmessage">
    <h3 class="fade-in">{{message}}</h3>
    <button @click="newGame()">Seguir jugando :)</button>
</template>

</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'
import GetPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    name:'PagePrincipalPokemon',
    components:{
        PokemonPicture,
        PokemonOptions
    },

    data(){
        return{
            pokemonArr:[],
            pokemon:null,
            PokemonShow: false,
            showmessage:false,
            message:'',
            vidas:3,
            puntos:0
        }
    },
    methods:{
        async pokemonesAll(){
            this.pokemonArr = await GetPokemonOptions();
            const rndInt = Math.floor(Math.random() * 4)//?generar un numero aleatorio del 1 al 4 , porque lo estamos multiplicando por 4
            this.pokemon = this.pokemonArr[rndInt]
        },

        checkAnswer(selectedid){
            this.PokemonShow = true
            if(selectedid === this.pokemon.id){
                this.message = `Correcto el pokemon si es ${this.pokemon.name}`
                this.showmessage = true
                this.puntos++
               
            }else{
                this.message = `Lastima, era ${this.pokemon.name}`
                this.showmessage = true
                this.vidas--
            }

            console.log('hola desde checkanswer')
            
        },

        newGame(){
            this.pokemonArr=[]
            this.pokemon=null
            this.PokemonShow = false
            this.showmessage= false
           this.pokemonesAll()
        }
    },
    watch:{
        vidas(value, oldvalue){
            if(value == 0){
                alert(`Tu puntaje ${this.puntos}`)
            }
        }
    },
    mounted(){
        this.pokemonesAll()
    }
}
</script>

<style scope>

h2{
margin-left:40px ;
    border: 2px solid black;
    width: 200px;
}


</style>