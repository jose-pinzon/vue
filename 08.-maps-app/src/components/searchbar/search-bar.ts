import { defineComponent, ref, computed } from 'vue';
import Searchresult from "@/components/search-result/Search-result.vue"
import {usePlacesStore } from '@/composables';

export default defineComponent({
name: 'searchbar',
components:{
    Searchresult
},
setup(){
    const { searchPlacesByTerm }  =  usePlacesStore()

    const debounceTimeout = ref();
    const debounceValue = ref('')

    return {
        debounceValue,
        searchTerm:computed({
            get(){
                return debounceValue.value
            },
            set( val:string ){

                if( debounceTimeout.value ) clearTimeout(debounceTimeout.value)

                debounceTimeout.value = setTimeout(() => {
                    debounceValue.value = val
                    searchPlacesByTerm(val)
                }, 500 );
            }
        })
    }
}
});