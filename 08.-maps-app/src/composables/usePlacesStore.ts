import { useStore } from "vuex"
import { computed, onMounted } from "vue";
import { StateInterface } from '../store/index';


export const usePlacesStore = () => {

    const store = useStore<StateInterface>()

    onMounted(()=>{
        if( !store.getters['places/isUserLocationReady']){
            store.dispatch('places/getInitialLocation')
        }
    })



    return{
        //?State
            isLoading:computed(() => store.state.places.isLoading ),
            Userlocation:computed(() => store.state.places.userLocation ),
        //?Getters
            isUserLocationReady:computed<boolean>(() => store.getters['places/isUserLocationReady']),
        // ?Actions
            searchPlacesByTerm: (query = '') => store.dispatch('places/searchPlacesByTerm',query),
        //?Mutations
    }

}