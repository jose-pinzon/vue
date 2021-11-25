

const persona = {
    nombre:'Jose',
    apellido:'Pinzon',
    edad:20,
}

let persona2 = persona; //aqui solo se esta haciendo referencia del objeto
let persona3 = {...persona} // aqui se esta creando otro objeto
persona2.nombre = 'gabriel'
console.log(persona) //sera gabriel 
console.log(persona2)//sera gabriel
console.log(persona3)//sera jose