<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <h3>{{airoman}}</h3>
      <h3>{{hulk}}</h3>

      <button @click="cambiosAiroman" >cambiosAiroman</button>
      <button @click="cambiosHulk" >cambiosHulk</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'


export default {
  name: 'Home',
  
  setup(){

    const airoman = ref({name:'Tony',age:50})



    //! El reactive solo funciona con objeto
    const hulk = reactive({name:'bruce',age:50})




    return{
      airoman,
      hulk,
      cambiosAiroman: () =>{
        airoman.value.age = 55
      },
      cambiosHulk: () => {
        hulk.age = 55
      }
    }
  }
}
</script>
