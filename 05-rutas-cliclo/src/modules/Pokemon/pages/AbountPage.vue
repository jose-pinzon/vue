<template>
    <h1>Pagina de about</h1>
    <hr>
    <h4>{{nombre}}</h4>
    <button @click="cambiarNombre">Cambiar </button>
</template>


<script>
export default {

    data(){
        return{
            nombre:'Jose'
        }
    },
    methods:{
        cambiarNombre(){
            console.log('se cambio el nombre')
            return this.nombre = 'Gabriel'
        }
    },

    /**
     *   !!Son los primeros metodos que se ejecutan cuando carge el componmente
     *  *beforecreated
    *   *created
    *   *beforeMount
    *   *rendertracked
    *   *mounted
     */
    /**
     *   !!Estos cargan cuando se cambia de pagina
     *    *beforeunmount
     *    *unmounted
     */



    /**
     * !!se ejecutan cuando se hace un cambio al dom
     * *rendertriggered
     * *beforeUpdate
     * *updated
     */
    beforeCreate(){
        console.log('beforecreated')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){

        console.log('updated')
    },
    activated(){
        console.log('activated')
    },
    deactivated(){
        console.log('deactivated')
    },
    beforeUnmount(){
        console.log('beforeunmount')
    },
    unmounted(){
        console.log('unmounted')
    },
    errorCaptured(){
        console.log('errorcaptured')
    },
    renderTracked(){
        console.log('rendertracked')
    },
    renderTriggered(){
        console.log('rendertriggered')
    },
}
</script>