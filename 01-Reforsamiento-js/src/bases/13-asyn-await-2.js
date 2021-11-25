import gitphyApi from "./bases/11-axios"

const getImage = async()=>{
    try{
        //para poder mostrar el valor de data temenos que poner el reto en () para que espere
        const {data} = (await gitphyApi.get('/random')).data//?este ultimo data se coloco para no ponerlo 2 veces abajo
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    }catch(e){
        console.log('Error en la peticion',  e)
        throw e
    }
}

getImage();