import axios from 'axios'


const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit:5,
        language:'es',
        access_token:'pk.eyJ1IjoicGluem9uIiwiYSI6ImNsMjlwbTE4OTAyMjQzZHIxNWZid3djZjUifQ.XreOoJucya8xUU7hcfRhYA'
    }

})

export default searchApi