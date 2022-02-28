<template>
  <div :style="styles" ref="container"></div>
</template>

<script>
const { defineComponent, ref, onMounted } = require('vue');
import lottie from 'lottie-web'
import Mailer from '../assets/mailer.json'

export default defineComponent({
  setup() {

    const container = ref(null);
    const anim = ref(null)

    const styles = {
      width: '100%',
      height: '100%'
    }

    onMounted(() => {

      anim.value = lottie.loadAnimation({
        container: container.value,
        animationData: Mailer,
        loop: true,
        autoplay: true,
        renderer: 'svg',
      })

    })

    return {
      styles,
      container,
      anim,
    }

  }
})
</script>
