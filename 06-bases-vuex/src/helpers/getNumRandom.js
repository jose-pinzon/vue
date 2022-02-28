

const NumRn = ( ) => {
    return new Promise( resolve =>{
        const numrnd = Math.floor(Math.random()* 20 +1)

        setTimeout(() => {
           resolve( numrnd ) 
        }, 1000);
    })
}



export default NumRn