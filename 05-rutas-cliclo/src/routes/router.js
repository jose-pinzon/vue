
import { createRouter, createWebHashHistory } from "vue-router"

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
                        path: 'pokemon-home',
                        name:'home' ,
                        component:() => import('@/modules/Pokemon/pages/ListPage')
                    },

                    { 
                        path: 'about',//como son rutas hijas no es necesario colocar el eslash
                        name:'pokemon-about', 
                        component: () => import(/* webpackChunkName:"paginaAbout" */ '@/modules/Pokemon/pages/AbountPage')//el comentario dentro es para darle un nombre a esta direccion
                    },



                    { 
                        path: 'pokemonId/:id',
                        name:'PaginaPokemon',
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
    
    // { 
    //     path: '/home',
    //     name:'home' ,
    //     component:() => import('@/modules/Pokemon/pages/ListPage')
    // },


    
    // { 
    //     path: '/about',
    //     name:'about', 
    //     component: () => import(/* webpackChunkName:"paginaAbout" */ '@/modules/Pokemon/pages/AbountPage')//el comentario dentro es para darle un nombre a esta direccion
    // },



    // { 
    //     path: '/pokemonId/:id',
    //     name:'PaginaPokemon',
    //     component:() => import(/* webpackChunkName:"paginaPokemon" */ '@/modules/Pokemon/pages/PokemonPage'),
    //     props: ( route ) =>{
    //         const {id} = route.params
    //         let id2 = Number(id)
    //         return isNaN(id2) ? { id: 1 }: { id:id2 }//comprobar que el parametro sea un numero
            
    //     }
    // },



    {
        path: '/:pathMatch(.*)*', 
        component:() => import( /* webpackChunkName:"paginaFound" */ '@/modules/shared/pages/NopageFound') 
    },//TODO:este es por si el usuario coloca una direccion que no existe

    
]

const router = createRouter({
    history:createWebHashHistory(),
    routes, 
})



export default router