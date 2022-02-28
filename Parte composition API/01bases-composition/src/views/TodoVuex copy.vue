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
</template>

<script>

import { computed, ref } from 'vue'
import  { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore();
        const current = ref('all')

    return{
        toggletodo:( id ) =>  store.commit('toggleTodo', id) ,
        current,
        pedientes: computed(()=> store.getters['todoPedientes'] ),
        all: computed(()=> store.getters['allTodos'] ),
        completed: computed(()=> store.getters['completedTodos'] ),
        getTodosByTab: computed(()=> store.getters['getTodosByTab'](current.value) )
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