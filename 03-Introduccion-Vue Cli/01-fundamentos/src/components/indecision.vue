<template>
    <div>
        <h1>Indecision</h1>
        <img :src="img" alt="bg" v-if="img!=null"><!--Como la imagen esta en null entonces el if sera false y no mostrara la imagen al inicio -->
        <div class="bg-dark"></div>
        <div class="indecision-container">
            <input type="text" placeholder="Hazme una pregunta" v-model="question">
            <p data="parrafo">recuerda terminar con signo de interrogacion (?)</p>
            <div v-if="isValidQuestion">
                <h2>{{question}}</h2>
                <h1>{{answer}}</h1>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Project',
    data(){
        return{
            question:null,
            answer:null,
            img:null,
            isValidQuestion:false
        }
    },
    methods:{
        async getAnswer(){

            try {
                    this.answer = 'Pensando...'
                    const {answer, image} = await fetch('https://yesno.wtf/api').then( r => r.json() )

                    this.answer = answer === 'yes' ? 'si' : 'no' //*tambien se podria hacer en la parte en el que muestra el answer 
                    //?este codigo para convertir yes en si se podia hace como se muestra arriba
                    // if(answer == 'yes'){
                    //     this.answer = 'si'      
                    // }else{
                    //     this.answer = 'no'      
                    // }
                    this.img = image
            } catch (error) {
                console.log( 'Indecicion:',error )
                this.answer = 'no se pudo cargar el API'
                this.image = null
            }
         
        }
    },

    //el watch sirve para escuchar o estar al pendientes de la accion de algo
    watch: {
        question(value,oldValue ){
            this.isValidQuestion = false
            if( !value.includes('?') ) return //aqui le decimos que salgas si se cumple la condicion
    
            this.isValidQuestion = true
            this.getAnswer()
        }
    }
}
</script>

<style scope>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }
</style>