import GetPokemonOptions,{GetPokemons,pokemonsName} from '@/helpers/getPokemonOptions'


describe('get pokemon options  Helpers', ()=>{


    test('probar primera funcion',()=>{
        const pokemones = GetPokemons()
 
        expect(pokemones.length).toBe(650)
        expect(pokemones[0]).toBe(1)
        expect(pokemones[500]).toBe(501)
        expect(pokemones[649]).toBe(650)
        
    })

    test('debe de retornar un arreglo de 4 elementos con nombres de pokemones',async ()=>{
        const nombrePokemon =  await pokemonsName([1,2,3,4])

        expect(nombrePokemon).toStrictEqual(     [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
          ]
      )

    })

    test('getPokemonOptions debe de retornar un arreglo mezclado', async () =>{
        const pokemon = await GetPokemonOptions()


        expect(pokemon.length).toBe(4)
        expect(pokemon).toEqual([
            { 
                name:expect.any(String),
                id: expect.any(Number) 
            },
            { 
                name:expect.any(String),
                id: expect.any(Number) 
            },
            { 
                name:expect.any(String),
                id: expect.any(Number) 
            },
            { 
                name:expect.any(String),
                id: expect.any(Number) 
            }
        ])

        console.log(pokemon)

    })
})