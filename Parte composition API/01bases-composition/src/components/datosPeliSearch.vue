<template>
    <input type="text" name="" id="" placeholder="Buscar..">
    <div v-if="dato">
        <p>dato encontrado</p>

    </div>
    <div v-else>
        <p>Dato no encontrado</p>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){

        return{
            dato:ref('hola')
        }

    }
}
</script>

<style>

</style>