import { createStore } from "vuex"
import countStore from "./counter"

export default createStore({

    modules:{
        counter: countStore
    }

})