
import axios from "axios"
import { ref } from "vue"

const useGame = ( search = 'spiderman') => {
    const pelicula =ref()
    const loading = ref(true)
    const mensaje = ref()
    const apikey = '65c87f18'

    const obternerPeliculas = async( name ) => {
        try {
            const { data } = await axios.get(`http://www.omdbapi.com/?t=${name}&apikey=${apikey}`)
            console.log(data);
            pelicula.value = data
            loading.value = false
        } catch (error) {
            mensaje.value = 'No cargaron los datos'
        }
            
        
    }


    obternerPeliculas(search)


        return {
            pelicula,
            loading,
            mensaje,
            obternerPeliculas
        }
}

export default useGame