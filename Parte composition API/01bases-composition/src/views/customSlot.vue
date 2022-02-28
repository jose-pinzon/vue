<template>
    <h1>Aprendiendo slots</h1>
    <button @click="openModal">Abrir modal </button>
    <!-- <modal> 
        <h2>titulo del modal</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi laboriosam quae illum, explicabo magni non tempore alias odit natus </p>
        <button>Salir </button>
    </modal> -->

    <modal v-if="isOpenModal"  @on:close="closeModal"  titulo="hola"> 
        <template v-slot:header>
            <h2>Titulo del modal </h2>
        </template>
        <template v-slot:footer>
            <button @click="closeModal">salir </button>
        </template>
        <template v-slot:body>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id pariatur explicabo assumenda delectus rem atque asperiores. Illo praesentium dignissimos quis ea sint tempore  </p>
        </template>


        <template v-slot:exposed="{ newTitle }"><!-- Recibir datos del componente hijo -->
                <h1>{{ newTitle }}</h1>
        </template>

    </modal>
</template>





<script>
import { ref } from 'vue'
import modal from '../components/modal.vue'
export default {
    components:{ modal },
    setup(){
        const isOpenModal = ref(false)

        return{
            isOpenModal,
            openModal:() => isOpenModal.value = true,
            closeModal:() => isOpenModal.value = false
        }

    }
}
</script>

<style>

</style>