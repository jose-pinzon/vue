
import { createRouter, createWebHashHistory } from "vue-router"
import guardAutoriced from "./guards"

// import pokemonL from '@/modules/Pokemon/layouts/pokemonLayout'

const routes =[
    {//esto es para cuando pongamos el eslash nos redireccione al home
        path: '/', 
        redirect:'/pokemon'
    },
    { 
        path: '/pokemon',
        name:'pokemon' ,
        component:() => import('@/modules/Pokemon/layouts/PokemonLayout'),
        children:[//?este es para poner las rutas hijas del componente
                    { 
                        //path: '',//!si se queda asi vacio quiere decir que este es la redireccion
                        path: 'home',
                        name:'pokemon-home' ,
                        component:() => import('@/modules/Pokemon/pages/ListPage')
                    },

                    { 
                        path: 'about',//como son rutas hijas no es necesario colocar el eslash
                        name:'pokemon-about', 
                        component: () => import(/* webpackChunkName:"paginaAbout" */ '@/modules/Pokemon/pages/AbountPage')//el comentario dentro es para darle un nombre a esta direccion
                    },



                    { 
                        path: 'pokemonId/:id',
                        name:'PaginaPokemonid',
                        component:() => import(/* webpackChunkName:"paginaPokemon" */ '@/modules/Pokemon/pages/PokemonPage'),
                        props: ( route ) =>{
                            const {id} = route.params
                            let id2 = Number(id)
                            return isNaN(id2) ? { id: 1 }: { id:id2 }//comprobar que el parametro sea un numero
                            
                        }
                    },
                        //?Redireccionador por defecto
                    {
                        path:'',
                        redirect:{name:'pokemon-about'}
                    }

        ]
    },
    {
        path:'/naruto',
        name:'raizNaruto',
        beforeEnter:[guardAutoriced],//? este es para poder usar el guard solo para estas paginas
        component:() => import('@/modules/Naruto/layout/navNaruto'),
        children:[
            { 
                path: 'personajes',
                name:'personajes-naruto', 
                component: () => import(/* webpackChunkName:" personajes naruto" */ '@/modules/Naruto/pages/Personajes')
            },
            { 
                path: 'about',
                name:'about-naruto', 
                component: () => import(/* webpackChunkName:"about naruto" */ '@/modules/Naruto/pages/about')
            },
            {
                path:'',
                redirect:{name:'personajes-naruto'}
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*', 
        component:() => import( /* webpackChunkName:"paginaFound" */ '@/modules/shared/pages/NopageFound') 
    },//TODO:este es por si el usuario coloca una direccion que no existe

    
]

const router = createRouter({
    history:createWebHashHistory(),
    routes, 
})




// const CanAccess = () =>{
//     return new Promise(resolve =>{
//         const valor = Math.random() * 100
//             if(valor > 50){
//                 console.log('se permitio acceder')
//                 resolve(true)
//             }else{
//                 console.log( `${valor}  No se permitio el acceso` );
//                resolve(false)
//             }

//     })
// }


// router.beforeEach(async(to,from, next) =>{
//     const autorizado = await CanAccess()

//     autorizado ? next() : next({name:'pokemon-home'})
// })
//guards global
// router.beforeEach((to, from, next)=>{
//     const valor = Math.random() * 100

//     if(valor > 50){
//         console.log('se permitio acceder')
//         next()
//     }else{
//         console.log( `${valor}  No se permitio el acceso` );
//         next({name:'pokemon-home'})
//     }
// })

export default router