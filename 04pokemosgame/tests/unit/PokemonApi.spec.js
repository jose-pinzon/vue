
import ApiPokemon from '@/api/pokemonApi'


describe('PokemonApi',() => {

    test('axios debe de estar configurado para la api de pokemon',()=>{
        expect(ApiPokemon.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })

    

})