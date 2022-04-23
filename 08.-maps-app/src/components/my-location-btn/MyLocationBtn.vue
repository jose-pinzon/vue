<template>
    <button v-if="isButtonready" class="btn btn-primary" @click="onMyLocationClicked"> Ir a mi ubicacion</button>
</template> 

<script lang="ts">
    import { useMapStore, usePlacesStore } from '@/composables';
import { computed, defineComponent } from 'vue'; 
    
    export default defineComponent({
        name:'MyLocationBottom',
        setup(){
            const { Userlocation, isUserLocationReady} = usePlacesStore()
            const { map,isMapReady } = useMapStore()

            return{
                isButtonready: computed<boolean>( () => isUserLocationReady.value && isMapReady.value),

                onMyLocationClicked: () => {
                    map.value?.flyTo({
                        center:Userlocation.value,
                        zoom:14
                    })
                }
            }
        }
    })
</script>

<style scoped>
    button{
        position: fixed;
        top:30px ;
        right: 30px;

    }
</style>