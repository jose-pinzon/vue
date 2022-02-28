import axios from 'axios'


const pokemonApi = axios.create({
    baseURL:'https://pokeapi.co/api/v2'
})

console.log( process.env.NODE_ENV) /* return test durante el testing */

export default pokemonApi