import { ref } from 'vue';
import axios from 'axios'


const users = () => {

            const users = ref([])
            const isLoading = ref(true)
            const currentPage = ref(1)
            const Errorload = ref('')
            
            
            const getusers = async (page =  1) => {
                if(page <= 0) page = 1
                isLoading.value = true
            
                const { data } = await axios.get('https://reqres.in/api/users',{
                    params:{ page }
                })
            
                if( data.data.length > 0){
                    users.value = data.data
                    currentPage.value = page
                    Errorload.value = null
            
                }else if( currentPage.value > 0 ){
                    Errorload.value = 'No hay mas'
                }
                        isLoading.value = false
            }
            
            getusers()
            
            return{
                users,
                isLoading,
                currentPage,
                Errorload,
            
                nextPage: () => getusers(currentPage.value + 1),
                prevPage: () => getusers(currentPage.value - 1),
            }


} 


export default users