import axios from "axios"
import { ref } from 'vue'

const useprueba = ( ) => {
    const usuarios = ref ([])
    const mensaje = ref('')
    const isLoad = ref( true )

    const obteneDatos = async ( ) => {
        isLoad.value = true
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
            usuarios.value = data
            mensaje.value = null
            isLoad.value = false
        } catch (error) {
            mensaje.value = 'No se pudieron cargar los datos'
            console.log(error);
        }
    }

    obteneDatos()

    return{
        usuarios,
        mensaje,
        isLoad
        
    }

}   

export default useprueba