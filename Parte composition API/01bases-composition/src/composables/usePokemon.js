import { ref } from "vue"
import axios from "axios"


const usePokemon = ( pokemonId = '1' ) => {

    const pokemon = ref()
    const isloading = ref(false)
    const errorMessage = ref()


    const serchPokemon = async( id ) => {

        if(!id) return 
        isloading.value = true
        pokemon.value = null

        try{
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`)
            console.log( data );
            pokemon.value = data
            errorMessage.value = null

        }catch (error) {
            console.log(error)
            errorMessage.value = 'No se pudo cargar la informacion del pokemon'
        }

        isloading.value = false
    }
    
    serchPokemon(pokemonId)

    return {
        pokemon,
        isloading,
        errorMessage,
        serchPokemon
    }
}

export default usePokemon