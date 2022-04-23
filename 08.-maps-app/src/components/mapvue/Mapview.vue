<script lang="ts" src="./Mapview.ts"></script>
<template>
    <div v-if="!isUserLocationReady" class="loading d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h3>Espere porfavor</h3>
            <span>Localizando.... </span>
        </div>
    </div>

    <div v-show="isUserLocationReady" class="map-container" ref="mapElement" >

    </div>
</template>
<style scoped>
.map-container{
    position: fixed;
    width: 100vw;
    height: 100vh;
    /* background-color: red; */
}
.loading{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
}
</style>