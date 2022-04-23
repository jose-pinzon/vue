
import { GetterTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<MapState, StateInterface> = {
    isMapReady( state ) {

        // !Esto nos mandara false si no hay un valor
        return !!state.map;
    }
}



export default getters;