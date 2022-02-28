<template>
    <h1>Buscar pokémon:</h1>
    <form @submit.prevent="EnviarForm">
        <input type="number"
                placeholder="Numero del pokemon" 
                v-model="pokemonId" 
                ref="txtsearchFocus">
    </form>
    <br>
    <span>Precione Enter para buscar</span>
</template>

<script>
import {ref, onActivated  } from 'vue';
import {  useRouter } from 'vue-router'//!Esta importacion es para poder usar el router en vue 3
export default {
        setup(){
            const router = useRouter()

            const pokemonId = ref(0)
            const txtsearchFocus = ref()//para eliminar la advertencia del autofocus

            onActivated(() => {
                txtsearchFocus.value.select()
            })
            return{
                txtsearchFocus,
                pokemonId,
                EnviarForm:() => {
                    // e.preventDefault(); se puede hacer como se ve en el @submit del formulario
                    router.push({name:'Pokemon-id', params:{id:pokemonId.value}})
                }
            }
        }
}
</script>

<style>

</style>