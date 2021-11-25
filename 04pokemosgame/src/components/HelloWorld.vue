<template>
  <div class="hello">
    <PokemonPageVue/>
  </div>
</template>

<script>
import PokemonPageVue from '../pages/PokemonPage.vue'
export default {
  name: 'HelloWorld',
  components:{
    PokemonPageVue
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
