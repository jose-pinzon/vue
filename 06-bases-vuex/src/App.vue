<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <contador/>

  <contadorP/>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'


export default {
  name: 'App',
  components: {
      contador:defineAsyncComponent( () => import('@/components/counter-vuex') ) ,
      contadorP:defineAsyncComponent( () => import('@/components/02-practica') ) 
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
