
//cuando se desetructura un array se necesita llevar el orden a diferencia de la desestrcuturacion
// de objetos

const personajes  = ['goku', 'vegeta', 'trunks', 'goten']

const [go,ve ,tr, goten = 'hijo goku' ] = personajes

console.log(go)
console.log(goten)

// ejemplo cuando una funcion regresa una array

const returnArray = ([v1, v2]) =>{
    return [v1, v2]
}

const [letter , number] = returnArray(['asd',123])

console.log(letter)


