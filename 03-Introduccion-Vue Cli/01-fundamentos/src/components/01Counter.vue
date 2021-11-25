<template>
    
    <div >
    <!-- <h1>{{titulo || contador}}</h1>Se hace de esa manera por si el titulo es null -->
    <h1>{{tituloDefecto}}</h1> <!--Hacer la prueba con el computed-->
    <p>{{contar}} <sup>2</sup> = {{contar * contar}} </p>
    <p data-testid="2contador">{{contar}}</p><!--El data-test sirve para indentificarlo en la prueba-->
    <p>{{contar}} <sup>2</sup> = {{squareCounter}} </p>
 

        <button @click="aumentar()">+1</button>
        <button @click="disminuir()">-1</button>
    </div>


</template>

<script>
export default {
    name:'contador',//? este nombre sirve para poder identificarlo en el vue devtools
    //props:['titulo'],//con esta forma de declarar los props no se puede indicar el tipo de valor que tendran por lo que podria causar problemas
    props:{
        titulo:String,
        start:{ //esto se hace para especificar mas sobre un props como en este caso le colocamos un valor por defecto por si no le pasan nada
            type:Number,
            // required:true,
            default:10,
            validator(value){//TODO: Este es para poder hacer lass validaciones por si queremos que tenga un valor requerido 
                return value >= 10
            }
        }
    },
    data(){
        return{
            contar:this.start
        }
    },
    methods:{
        aumentar(){
            this.contar++
        },
        disminuir(){ 
            this.contar--
        }
    },
    computed:{//este solo se ejecuta una vez , no importa cuantas veces se llame a diferencia de una funcion normal porque este guarda sus datos en el cache
        squareCounter(){
            // console.log('computed')
            return this.contar * this.contar
        },
        tituloDefecto(){
            return this.titulo ? this.titulo : 'Contador'
        }
    }

}
</script>

<style scope>
p{
    color: black;
}
button{
    background: greenyellow;
    border: 1px solid white;
    margin:10px;
    padding: 5px;
}

</style>