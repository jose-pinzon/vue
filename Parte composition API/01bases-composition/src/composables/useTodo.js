

import { computed, ref } from 'vue'
import  { useStore } from 'vuex'

const useTodo = () => {

    const store = useStore();
    const current = ref('all')


    return{
        toggletodo:( id ) =>  store.commit('toggleTodo', id),
        CreateTodo:( text ) =>  store.commit('createTodo', text),
        current,

        pedientes: computed(()=> store.getters['todoPedientes'] ),
        all: computed(()=> store.getters['allTodos'] ),
        completed: computed(()=> store.getters['completedTodos'] ),
        getTodosByTab: computed(()=> store.getters['getTodosByTab'](current.value) )
    }
}

export default useTodo