<template>
    
    <div v-if="isLoad">
        <h1 > Cargando... </h1>
    </div>
    <div v-else>
        <h1>Pruebas con vue 3</h1>
        <ul>
            <liv v-for="user in usuarios" :key="user.id">
                <p>{{user.name}} </p>
            </liv>
        </ul>
    </div>

    <form @submit.prevent="formSubmit">
        <div>
            <label for="search_game">Busque una pelicula</label>
            <input type="text" id="search_game"  placeholder="buscar..." 
            v-model="search" >

            <input type="submit" value="Enviar">
        </div>
    </form>
</template>

<script>
import { useRouter }  from 'vue-router'
import { ref } from '@vue/reactivity';
import useUserPrueba from '../composables/useUserPrueba'
export default {
    setup(){
        const router = useRouter()
        const search = ref('batman')
      
        const { usuarios , mensaje ,isLoad } = useUserPrueba( );

        return{
            usuarios,
            mensaje,
            isLoad,
            search,
            formSubmit:()=>{
                router.push({name:'game', params:{ search:search.value}})
            }
        }


    }
}
</script>

<style>

</style>