<template>
    <!-- <div>
        <router-link :to="{name:'home'}">Pokemon list</router-link>  En lugar de "a" ira el router-link y en lugar de href ira el to ya que el router esta cargado globalmente en la aplicacion -->
        <!-- <router-link :to="{name:'PaginaPokemon', params:{id:26}}">Pokemon</router-link>Esta es una de las formas de pasar el parametro, en la doc hay mas
        <router-link :to="{name:'about'}">About</router-link> -->
    <CustomLink
        v-for="link in Links"
        :key="link.to"
        :link="link"
    />
    <!-- </div> -->
</template>  
<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
    name:'navbar',
    data(){
        return{
            Links:[//estos son las url que le pasaremos al custon link que es el custom personalizado
                //?Forma de acerlo con el nombre de la ruta
                {to:'pokemon-home', name:'Home'},
                {to:'PaginaPokemonid', name:'PaginaPokemon', id:50},
                {to:'pokemon-about', name:'about'},
                {to:'personajes-naruto', name:'Personajes Naruto'},
                {to:'about-naruto', name:'About Naruto'},
                {to:'https://google.com', name:'Google'},

                //!!Forma de hacerlo con url
                // {to:'/pokemon/home', name:'Home'},
                // {to:'/pokemon/pokemonId/50', name:'PaginaPokemon'},
                // {to:'/pokemon/about', name:'about'},
                // {to:'https://google.com', name:'Google'},
                
            ]
        }
    },

    components:{
        CustomLink: defineAsyncComponent( () => import('./customlink') )//!para segunda forma de rutas
    }
}
</script>
 
<style scoped>

div{    
    padding: 0 30px;
}
div a{
    font-weight: bold;
    color: black;
    margin: 0 10px;
    text-decoration: none;
}

.router-link-exact-active{/**este clase lo aplica vue router al elemento que esta siendo activado */
    color: chartreuse;
}

</style>