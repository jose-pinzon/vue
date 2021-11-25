
const person = {
    name:'Tony',
    age:45
}
//para sacar el dato normal de un objeto se hace asi
console.log(person.name)


//pero con la desestructuracion de objetos no es necesario poner el nombre de objeto
const {age, name, power = 'robots'} = person

console.log(age)

///manera en la que hice el ejercicio
const createhero = ({name, age}) =>{
    return{
        id:1231312,
        name:name,
        age:age
    }
}
console.log(createhero(person))



//manera en la se puede resolver
const createhero2 = (persona) =>{
    const {name, age} = persona
    return{
        id:1231312,
        name, // ya no sera necesario poner la variable al que pertenece
        age:age
    }
}

console.log(createhero2(person))




///hacer lo mismo pero sin usar le return 
const heroe2 = {
    name:'baner',
    age:30
}

//para cambiar el nombre de la variable de puede hacer como se esta haciendo con el name
//tambien se puede colocar un valor por defecto ejemplo: age= 12 solo se aplicara en caso del que 
//el objeto non tenga esa variable
const createheroe = ({name:nombre, age}) => ({
        nombre,
        age
    })

console.log(createheroe(heroe2))