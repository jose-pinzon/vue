<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/counter">counter</router-link>|
    <router-link :to="{name:'usuario' }">usuario</router-link>|
    <router-link :to="{name:'searchPokemon' }">Buscar Pokemon</router-link> |
    <router-link :to="{name:'users' }">Prueba 1</router-link> |
    <router-link :to="{name:'thanos' }">Todo vuex</router-link> |
    <router-link :to="{name:'slots' }">Slots</router-link> |
    <router-link :to="{name:'cine' }">Cine</router-link> 
  </div>


<!-- Esto es para conservar el estado de la pagina -->
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.name" />
    </keep-alive>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
