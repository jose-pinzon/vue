
<template>

    <div>
            <a v-if="paginaExterna" target="_blank" :href="link.to">{{link.name}}</a>

            <router-link v-else :to="{name:link.to, params:{id:link.id}}" v-slot="{ isActive }" >  <!-- el  Slot es propio de vue -->
                <a :class=" isActive ? ' is-active ':' is-normal' " >
                {{link.name}}
                </a>
            </router-link>



            <!--TODO:Forma que se tenia que hacer mediante el url
                <router-link v-else :to="link.to" v-slot="{ href , isActive }" >  el  Slot es propio de vue 
                <a :href="href" 
                :class=" isActive ? ' is-active ':' is-normal' " >
                
                {{link.name}}
                </a>
            </router-link>-->
    </div>
</template>

<script>
export default {
    props:{
        link:{//es lo que pasa el Navbar
            type:Object,
            required:true
        }
    },
    computed:{
        paginaExterna(){
            return this.link.to.startsWith('http')
        }
    }
}
</script>

<style  scope>
a{
    background-color: chocolate;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
}
.is-active{
    color: chartreuse;
}

.is-normal{
    color: black;
}

</style>