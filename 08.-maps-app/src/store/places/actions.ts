import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import searchApi from '@/apis/searchApi';
import { PlacesResponse } from '@/interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation( { commit } ) {
        //Todo: colocar loading
            navigator.geolocation.getCurrentPosition(
                ( {coords} )=>commit('setLngLat',{lng:coords.longitude, lat:coords.latitude }),
                (error)=>{
                    console.log(error);
                    throw new Error('No geolocation')
                }
            );
    },

    //Todo: colocar el valor de retorno
    async searchPlacesByTerm({ commit,state },query:string ){
        const resp = await searchApi.get<PlacesResponse>(`/${ query }.json`,{
            params:{
                proximity:state.userLocation?.join(',')
            }
        })

        console.log(resp.data.features);

    }


    
}



export default actions;