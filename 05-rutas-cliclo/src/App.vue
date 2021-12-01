<template>
<navbar/>
<div>
    <img alt="Vue logo" src="./assets/logo.png">
</div>
<router-view/>
</template>

<script>
import {defineAsyncComponent } from 'vue' //?este es para poder hacer la importacion de manera perezosa
export default {
  name: 'App',
  components: {
    navbar:defineAsyncComponent(()=> import('@/modules/shared/components/Navbar'))//?manera perezosa de hacer una importacion
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
