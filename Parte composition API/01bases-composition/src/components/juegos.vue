<template>
        <h1 v-if="loading && !pelicula ">Cargando juegos....</h1>
        <h1 v-else-if="mensaje">mensaje</h1>
    <div v-else>
        <h1>Estos son los juegos que coinciden con tu busqueda</h1>
        <img :src="pelicula.Poster" :alt="pelicula.Country">
    </div>
</template>

<script>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import useGame from '../composables/useGames'
export default {
    setup(){
        const route = useRoute()
        const { pelicula, loading, mensaje, obternerPeliculas } = useGame(route.params.search)

        watch(()=> route.params.search,
            ()=>obternerPeliculas(route.params.search)
        )
    return{
        pelicula,
        loading,
        mensaje
    }

    }
}
</script>

<style>

</style>