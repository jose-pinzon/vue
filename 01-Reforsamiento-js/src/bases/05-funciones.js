
function saludo(n){
    return `Hola mundo  ${n}`
} 

let nombre = 'jose'
console.log(saludo(nombre))


///se puede hacer la funcion de manera de callback
/**
 * Es mas seguro hacerlo de esta manera, porque nos podemos equivocar y cambiar el valor de la funcion
 * y podria causar problemas 
 * 
 */
const saludos = function(){
    return 'hola desde la funcion callback'
}



//funcion de flechas 
const saludar = () => {
    return `Como estas`
}
console.log(saludar())

//cuando una funcion de flechas solo necesita returnar un valor se pueden quitar los {}
const soloValor = () => 'hola'
console.log(soloValor())


const getUser = () =>{
    return{
        nombre:'jose',
        apellido:'eb'
    }
}
console.log(getUser())

//si el objeto anterior lo queremos mostrar directamente se pone en parentesis para no comfudir a js
const getUser2 = () => ({nombre:'gabriel',apellido:'pinzon'})
console.log(getUser2())


//ejercicio si existe un valor en el array de obhetos

const heroes = [
    {
        id:1,
        name:'Batman'
    },
    {
        id:2,
        name:'Superman'
    }
]


//mi solucion
const buscar = (arrays, valor) => {
    let nombre=[]
    for (let i in arrays) {
        nombre.push(arrays[i].name)
    }
    let existe = nombre.indexOf(valor)
    if(existe != -1){
        return 'Si existe'
    }else{
        return 'No existe'
    }
}
console.log(buscar(heroes,'Batman'))

//solucion del curso con some
//lo que hace el some es verificar todos los objetos y busca si alguno cumple con la condicion dada
const existe = heroes.some((heroe)=> heroe.id === 2)
console.log(existe)

// se puede hacer con find con la diferencia de que si este no busca lo que queremos manadara undefined
//pero si lo busca no mandara true si no que mandara el objeto
const existe2 = heroes.find((heroe)=> heroe.id === 2)
console.log(existe2)