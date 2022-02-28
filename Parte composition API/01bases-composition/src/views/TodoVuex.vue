<template>
    <h1>Lista de thanos</h1>
    <!-- <p>Tareas: {{$store.state.todos.length}}</p> -->
    <h2> Pendientes:  {{ pedientes.length }} </h2>
    <hr>
    <button :class="  {'active':  current == 'all'}"   @click="current='all'">Todos</button>
    <button :class="  {'active':  current == 'pendientes' }"  @click="current='pendientes'">Pendientes</button>
    <button :class="  {'active':  current ==  'completed'}"  @click="current='completed'">Completados</button>

    <div>
        <ul>
            <li v-for="todo in getTodosByTab" :key="todo.id" :class="{'completed': todo.completed  }" @dblclick="toggletodo(todo.id)">  
                {{todo.text}}
            </li>
        </ul>
    </div>

    <button @click="modalstatus = true">Crear Todo </button>

    <!--Crear Modal-->
    <modal  v-if="modalstatus"  @on:close="modalstatus=false">
        <template v-slot:header>
            <h2> Agregar nueva tarea</h2>
        </template>
        <template v-slot:body>
            <form @submit.prevent="CreateTodo(text); modalstatus = false ">
                <label for="titulo">Titulo: </label>
                <input  id="titulo"  type="text" placeholder="Nueva tarea..." v-model="text">
                <input type="submit" value="Guardar">
            </form>
        </template>
        <template v-slot:footer>
            <button @click="modalstatus = false"> Cerrar</button>
        </template>    
    </modal>
    <!--Formulario consun submit 

        mutation de creatTodo( text )
    -->
    



</template>

<script>

import useTodo from '@/composables/useTodo'
import modal from '../components/modal.vue'
import { ref } from 'vue'
export default {
    components:{
        modal
    },
    setup(){
        
        const {toggletodo, current, pedientes,getTodosByTab ,CreateTodo } = useTodo()

    return{
        text:ref(''),
        toggletodo,
        current,
        pedientes,
        getTodosByTab,
        CreateTodo,
        modalstatus: ref(false) ,
    
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

    .active{
        background-color:rgb(107, 100, 100) ;
        color: white;
    }
    .completed{
        text-decoration: line-through;
    }
</style>