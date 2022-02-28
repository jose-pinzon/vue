import { createStore } from 'vuex'
import {  v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
      todos:[
        {id:1, text:'Recolectar la piedras del infinito', completed:false },
        {id:2, text:'Piedra del alma', completed:true },
        {id:3, text:'Piedra de poder', completed:true },
        {id:4, text:'Piedra de realidad', completed:false },
        {id:5, text:'nuevos secuaces compententes', completed:false },
   

      ]



  },
  mutations: {
    toggleTodo( state, id  ){
      const todoIdx = state.todos.findIndex( todo => todo.id == id  )
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    },

    createTodo( state, text= '' ){
      if( text.length <= 1 ) return

      state.todos.push({
        id: uuidv4(),
        completed:false,
        text
      })

      

    }

  },
  getters:{
      todoPedientes( state ) {
          return state.todos.filter(todo => !todo.completed )
      },
      allTodos( state ,getters, rootstate ){ 

        //con los guetters se pueden acceder a los demas guetter y con el rootstate se accede globalmente al state
        console.log({state ,getters, rootstate});
        return state.todos
      },
      completedTodos( state ){
        return state.todos.filter( t => t.completed )
      },
      getTodosByTab: ( _ , getters  ) => (current) =>{
        
        switch (current) {
          case 'all': return getters.allTodos
          case 'pendientes':return getters.todoPedientes
          case 'completed':return getters.completedTodos
          default: return []
          
        }



      }
  },
  actions: {
  },
  modules: {
  }
})
