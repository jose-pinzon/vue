<template>
        <ul>
            <!-- <li v-for="user in users" :key="user.id">
            
                <h4>{{user.first_name}}</h4>
                <h6>{{user.email}}</h6>
            </li> -->

            <slot v-for="user in users" 
                :key="user.id"
                :user="user"
                ><!-- El :user es el dato que expondremos en el componente padre -->


            </slot>
        </ul>
</template>

<script>
export default {
    props:{
        users:{
            type:Array,
            required:true
        }
    },
    setup(){

    }

}
</script>

<style scoped>
    ul{
        list-style: none;
    }
</style>