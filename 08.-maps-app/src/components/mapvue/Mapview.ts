
import { defineComponent, ref, onMounted, watch } from 'vue'; 
import { usePlacesStore, useMapStore } from '@/composables';
import mapboxgl from 'mapbox-gl';


export default defineComponent({
    name:'Mapview',
    setup(){
        const mapElement = ref<HTMLDivElement>()
        const { Userlocation, isUserLocationReady } =  usePlacesStore()

        const { setMap } = useMapStore()


        const initMap = async() => {

            if(!mapElement.value) return
            if(!Userlocation.value) throw new Error('User location no exist')

            await Promise.resolve(); //!Esto primero espera que se resuelvan las funciones sincronas y despues lo demas

            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: Userlocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
            });

            const myLocationPopup = new mapboxgl.Popup()//?Para poner un poco de informacion en las ubicaciones
                .setLngLat( Userlocation.value )
                .setHTML(`
                    <h4> Aqui estoy</h4>
                    <p> Actualmente en sitilpech </p>
                    <p> ${ Userlocation.value }</p>
                `)

            const mylocationMarker = new mapboxgl.Marker()//?Crear el puntero
                .setLngLat( Userlocation.value )
                .setPopup(myLocationPopup)
                .addTo(map)

            //todo: Establecer el mapa en vuex

            setMap(map)

        }


        onMounted(()=>{
            if(isUserLocationReady.value) return initMap()//!No es muy necesario
            console.log('No tengo localizacion aun')
        });


        watch(isUserLocationReady,( newVal ) => {
            if(isUserLocationReady.value ) initMap();
        })

        return{
            isUserLocationReady, 
            mapElement
        }
    }
})