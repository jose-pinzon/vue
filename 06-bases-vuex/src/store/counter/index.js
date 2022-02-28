import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
const countStore = {

    namespaced:true,
      //?es parecido al data
    state:state,

    //?es parecido al los metodos y siempre tiene que ser sincronas 
    mutations:mutations,

    //?Son metodos pero pueden ser asincronos 
    actions,

    //?este es parecido a los computed
    getters
}

export default countStore