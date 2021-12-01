<template>
    <h1>Pagina de un solo pokemon  #{{id}}</h1>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>

<script>
// import { watch } from '@vue/runtime-core';
    export default {
        //?Segunda forma de obtener el id
        props:{
            id:{
                type:Number,
                required:true
            },
            nombre:{
                type:String,
            }
        },
        data(){
            return{
                
                pokemon:null
            }
        },

        //?Primera forma de obtener el id
        created(){
            this.getPokemon()
            console.log(this.$attrs); //para accerder a los atribuitos
                // const { id } = this.$route.params
                // this.id = id 
        },
        methods:{

            async getPokemon(){
                try{
                    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(Response => Response.json())
                    console.log(pokemon)
                    this.pokemon = pokemon
                }catch(e){
                    this.$router.push('/about')
                }
             
            }
        },

        watch:{
            //esto es para volver a hacer la peticion cada vez que se cambie la id
            id(){
                this.getPokemon() 
            }
        }
     
    }
</script>