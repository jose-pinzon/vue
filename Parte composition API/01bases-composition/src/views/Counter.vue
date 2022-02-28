<template>
    <h1>counter</h1>
    <p>{{ counter }}</p>
    <button @click="incremented">Incrementar </button>
    <button @click="decrement">Decrementar </button>
</template>
<script>
import useCounter from '@/composables/useCounter'
export default {
    name:'counter',
    props:{},
    emits:[],
    setup() {
        const { counter,incremented, decrement} = useCounter(10)

        return{
            counter,incremented, decrement
        }
    },
}
</script>
