<template>
    <div>
        <ul>
            <li>Spiderman</li>
            <li>batman</li>
            <li>Señor de los anillos</li>
            <li>Jumanji</li>
        </ul>
        <button @click="openmodal">Abrir modal </button>


    <modal v-if="status" @on:close="closemodal">


    </modal>
    </div>
</template>

<script>
// import useGame from '../composables/useGames'
import { ref } from 'vue'
import modal from '../components/formcine.vue'
export default {
    components:{ modal },
    setup(){
        const status = ref( false )

    return{
        status,
        openmodal:() => status.value=true,
        closemodal:() => status.value=false
    }

    }
}
</script>

<style scoped>

    div{
        display: flex;
        justify-content: center;
        text-align: center;
    }

    ul{
        width: 300px;
        text-align: left;
    }

    li{
        cursor: pointer;
    }

</style>