<template>


<div v-if="vidas == 0">
    <h1>Se te acabaron las vidas</h1>
</div>
<div v-else class="pokemon-container" >
    <img  v-if="!showPokemon" :src="imgUbicacion" alt="Pokemon" class="pokemon-hidden">
    <img  v-else :src="imgUbicacion" alt="Pokemon" class="fade-in" >
  
</div>
   
</template>

<script>
export default {
    props: {
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon:{
            type:Boolean,
            required:true,
            default:false,
        },
        vidas:{
            type:Number,
            required:true,
            default:true
        }
    },
    computed:{
        imgUbicacion() {
            return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }

}
</script>

<style scope>


.pokemon-container {
    height: 200px;
}
img {
   height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.pokemon-hidden{
    filter: brightness(0);/*este estilo es para mostrar solo la silueta*/ 
}
</style>