
<template>

    <div>
            <a v-if="paginaExterna" target="_blank" :href="link.to">{{link.name}}</a>

            <router-link v-else :to="link.to" v-slot="{ href , isActive }" >  <!-- el  Slot es propio de vue -->
                <a :href="href" 
                :class=" isActive ? ' is-active ':' is-normal' " >
                
                {{link.name}}
                </a>
            </router-link>
    </div>
</template>

<script>
export default {
    props:{
        link:{
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

.is-active{
    color: chartreuse;
}

.is-normal{
    color: black;
}

</style>