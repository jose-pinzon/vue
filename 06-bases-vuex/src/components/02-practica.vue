<template>
  <div> 
        <h1>Practica</h1>
        <h3>Contador {{contador}}</h3>
        <button @click="aumentar()">Aumentar valor en 10</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default { 

    methods:{
        aumentar(){
            this.$store.commit('counter/aumentar10',10)
        }
    },

    computed:{  
            ...mapState('counter',['contador'])
    }


}
</script>

<style scoped>
    div{
        background-color: blanchedalmond;
    }
</style>