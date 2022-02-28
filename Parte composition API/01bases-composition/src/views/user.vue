
<template>
    <h2 v-if="isLoading">Espere Porfavor...</h2>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="Errorload"> {{Errorload}}</h5>

    <div v-if="users.length > 0">
        <userList :users="users"
        v-slot="{ user }">   <!-- Obtener los datos de los slots -->
            <h5>{{user.first_name}} {{user.last_name}}</h5>
        </userList>
    </div>

    <button @click="prevPage" >Atras</button>
    <button @click="nextPage" >Siguiente</button>

    <span>pagina :{{ currentPage }}</span>
</template>

<script>

import useUser from '../composables/useUsers'
import userList from '../components/userList.vue'
export default {
    components:{ userList },
    setup(){
        const { users,
                isLoading,
                currentPage,
                Errorload,
                nextPage,
                prevPage,
                } =  useUser()


return{ users,
        isLoading,
        currentPage,
        Errorload,
        nextPage,
        prevPage
        }
    }



}
</script>

<style scoped>
    h2{
        text-align: center;
        width: 100%;
    }

    div{
        display: flex;
        justify-content: center;
        text-align:center; 
    }
</style>