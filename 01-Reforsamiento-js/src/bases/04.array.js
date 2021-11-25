

const arreglo = [1,2,3,4]
console.log(arreglo)

const arreglo2 = [...arreglo] //asi no hace referencia al primer array, porque su ubicacion en memoria es diferente
arreglo.push(5)//no se insertara al arreglo2
arreglo2.push(6)

console.log(arreglo2)


//se pueden usar metodos para de array para crear otro nuevo basado en el primero 
//ejemplo con map

const arreglo3 = arreglo.map((n)=>{
    return n * 2
})
arreglo3.push(14)
console.log(arreglo3)
