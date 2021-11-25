
//!Ejemplo de como funciona las promesas
// console.log('inicio')

// new Promise((resolve, reject)=>{
//     console.log('cuerpo de la promesa')
//     reject('No se pudo')
// }).then((msgs) => {//manera normal de callback
//     console.log('Resuelto')
// }).catch(err => console.log(err))//manera corta

// /**
//  ** se puede hacer de la siguiente manera que pasara al console.log el valor que estos resivan
//  .then(console.log)
//  .catch(console.log)
// */

// console.log('fin')

import {getHeroById} from './bases/08-Imp-exp'

const getHeroBYIDAsync = id =>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const hero = getHeroById(id)
            if(hero){
                resolve(hero)
            }else{
                reject('no se encontro heroe')
            }
            
        },1000)
    })

}

getHeroBYIDAsync(10)
.then(he => console.log(he))
.catch(console.log)


