

const guardAutoriced = ( to, from , next ) => {
    return new Promise(() => {
        const valor = Math.random() * 100
            if(valor > 50){
                console.log(valor,'se permitio acceder')
               next()
            }else{
                console.log( `${valor}  No se permitio el acceso` );
                alert('No paso')
            }

    })
}


export default guardAutoriced