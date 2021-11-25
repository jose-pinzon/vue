
import {owners} from '../data/heroes'

//desestructurar el array que importamos

const [dc, ma] = owners
// console.log(dc)
// console.log(ma)

//cuando se importa un objeto de manera default
//no es necesario colocarlo en "{}"

import SuperHeroes from '../data/heroes'


///tarea 


//?funcion que reciba id  getHeroById(id)__________________________________________________
//?funciones de flecha
//?con find que trae el primero que coincide
// const getHeroById = id =>{
//  let resultado = SuperHeroes.find(hero => hero.id == id)
// return resultado
//   }
// TODO console.log(getHeroById(2))

//*solucion del curso 


//?lo exportamos porque sirvio en otr ejemplo
export const getHeroById = id => SuperHeroes.find(hero => hero.id == id)





//!getHeroesByOwner 'DC', 'Marvel' funcion que traera todos los que tenga uno de estas dos palabras
//!filter trae todos los que coinciden

// const getHeroesByOwner = Procedencia =>{
//     let resultado = SuperHeroes.filter(hero => hero.owner == Procedencia)
//     return resultado
// }
// console.log(getHeroesByOwner('DC'))

//*solucion del curso 


export const getHeroesByOwner = Procedencia => SuperHeroes.filter(hero => hero.owner == Procedencia)
    




///? lo de abajo es cuando usamos el index para importar las funcines de este archivo
// import {  getHeroById,getHeroesByOwner} from './bases/08-Imp-exp'



// console.log(getHeroById(2))
// console.log(getHeroesByOwner('Marvel'))
