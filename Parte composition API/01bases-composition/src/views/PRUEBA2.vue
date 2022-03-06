<template>
    <div>
        <ul>
            <li v-for="peli of  pelis" :key="peli.id">
                {{peli.name}}    
            </li>
        </ul>
        <button @click="openmodal">Abrir modal </button>


    <modal v-if="status" @on:close="closemodal">
        <template v-slot:header>
            titulo
        </template>
        <template v-slot:body>
            <form class="form">
                <h2>CONTACT US</h2>
                <p type="Name:"><input placeholder="Write your name here.."></p>
                <p type="Email:"><input placeholder="Let us know how to contact you back.."></p>
                <p type="Message:"><input placeholder="What would you like to tell us.."></p>
                <button>Send Message</button>
                <div>
                </div>
            </form>
        </template>
        <template v-slot:footer>
            <button @click="closemodal">Cerrar </button>
        </template>
    </modal>
    </div>

    <div>
        <peliSearch/>

    </div>
</template>

<script>
// import useGame from '../composables/useGames'
import { ref } from 'vue'
import peliSearch from '../components/datosPeliSearch.vue'
import  { useStore } from 'vuex'
import modal from '../components/formcine.vue'
export default {
    components:{ modal, peliSearch},
    setup(){
        const store = useStore()


        const status = ref( false )
        const pelis  = store.state.peliculas
    return{
        pelis,
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