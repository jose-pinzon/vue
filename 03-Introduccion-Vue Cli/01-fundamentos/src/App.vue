<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  -->
  <!-- <indecision/> -->


  
  <hr/> 
  <!-- <counter titulo="Primeros"> </counter> -->
  <!-- <counter titulo="Segundo"> </counter> -->
  <!-- <counter :start="10" > </counter>Valor por defecto del contador se usa v:bind para poder pasar solo el valor -->

  <pruebas :num=10></pruebas>

</template>

<script>
import counter from '@/components/01Counter'
import indecision from '@/components/indecision.vue'
import pruebas from '@/components/03Pruebas'


export default {
  name: 'App',
  components: {
    counter,
    indecision,
    pruebas


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
