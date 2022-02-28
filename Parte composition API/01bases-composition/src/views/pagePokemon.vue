<template>
    <h1  v-if="!pokemon && !errorMessage"> Buscando... </h1>
    <h1 v-else-if="errorMessage" > {{ errorMessage }} </h1>

    <div v-else>
        <h3>{{pokemon.name}}</h3>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">

        <router-link :to="{name:'searchPokemon'}">Regresar</router-link>
    </div>

</template>

<script>
import { watch } from 'vue';
import { onBeforeRouteLeave, useRoute } from 'vue-router';
import usePokemon from '../composables/usePokemon'



export default {
        setup(){
            const route = useRoute()
            console.log(route.params.id);
                    
            const { pokemon, isLoading, errorMessage, serchPokemon } = usePokemon( route.params.id )
            watch(() => route.params.id,
                ()=> serchPokemon(route.params.id)
            )
            
            //!esto servira para preguntar al usuario si quiere salir de su navegacion
            onBeforeRouteLeave(()=>{
                const answer = confirm('¿Estas seguro de salir?')
                if( !answer ) return false
            })
            return{
            pokemon,
            isLoading,
            errorMessage
            }
            
        }
}
</script>

<style>

</style>