import axios from "axios"
const apikey = 'lcjuLnZLvT23Ca8mpqz6oXmowZd7btd9'


const gitphyApi = axios.create({
    baseURL:'https://api.giphy.com/v1/gifs',
    params:{
        api_key:apikey
    }
})
export default gitphyApi

// gitphyApi.get('/random')
// .then(({data}) =>{
//     const {url} =data.data.images.original
    
//     const img = document.createElement('img')
//     img.src = url

//     document.body.append(img)
// })