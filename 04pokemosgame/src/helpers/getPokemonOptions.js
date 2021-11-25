import pokemonApi from '@/api/pokemonApi.js'

//?CREAR ARREGLO
export const GetPokemons = () =>{
    const pokemons = Array.from(Array(650))//!para generar 650 espacios vacios
    //se hace esto para llenar los campos vacios con los indices del 1 al 650
    return pokemons.map((_ , index)=> index + 1)//*se pone guion bajo porque no nos interesa el primer valor del map
}



//?MEZCLAR ARREGLO
const GetPokemonOptions =async () =>{
    
    //!mezclar arreglos
    const mixedPokemon = GetPokemons().sort(() => Math.random() - 0.5 ) //el 0.5 es para dejar el positivo el numero que nos de el math y no se repitan los datos
    const NombresPokemon = await pokemonsName(mixedPokemon.splice(0,4))
    return NombresPokemon


}




//?ESCOGER 4 DEL ARREGLO
export const pokemonsName = async ([a,b,c,d]=[]) =>{
    // const resp = await pokemonApi.get(`/1`)
    // console.log(resp.data.name)

    //*Arreglo para poder realizar varias peticiones
    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]

    const [p1,p2,p3,p4 ]=await Promise.all(promiseArr)//para traer todas las peticiones
    return [
        {name:p1.data.name,id:a },
        {name:p2.data.name,id:b },
        {name:p3.data.name,id:c },
        {name:p4.data.name,id:d },

    ]
}

export default GetPokemonOptions
