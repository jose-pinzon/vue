const apikey = 'lcjuLnZLvT23Ca8mpqz6oXmowZd7btd9'


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
.then(response => response.json())
.then(({data}) => {
    const {url} = data.images.original
    //agregar la imagen en el fonde de la pagina

    const img = document.createElement('img')
    img.src=url
    document.body.append(img)
})