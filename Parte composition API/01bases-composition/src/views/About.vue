<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated } from '@vue/runtime-core'

export default {
  setup() {
    console.log('Ejecucion de setup')
    onBeforeMount(()=>{
      console.log('onBeforeMount')
    })
    onMounted(()=>{
      console.log('onMounted')
    })

    onBeforeUnmount(()=>{
      console.log('onBeforeUnmount')
    })
    onUnmounted(()=>{
      console.log('onUnmounted')
    })
    
    onBeforeUpdate(()=>{
      console.log('onBeforeUpdate')
    })
    onUpdated(()=>{
      console.log('onUpdated')
    })
    
    onErrorCaptured(()=>{
      console.log('onErrorCaptured')
    })
    onRenderTracked(()=>{
      console.log('onRenderTracked')
    })
    onRenderTriggered(()=>{
      console.log('onRenderTriggered')
    })


    //!estos 2 funcionan cuando hacemos que nuestro componente no pierda su estado y mantega los mismo valores
    onActivated(()=>{
      console.log('onActivated')
    })
    onDeactivated(()=>{
      console.log('onDeactivated')
    })


  },
}
</script>
