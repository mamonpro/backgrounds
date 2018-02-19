<template lang="pug">
  .page
    head-component
    .view
      .view__thumb
        img.item__img
      .view__info(style="color:white") {{ image }}

</template>

<script>

import HeadComponent from '@/components/Header.vue'

export default {
  components: {
    HeadComponent
  },

  data () {
    return {
      id: this.$route.params.id,
      image: this.$store.getters.getImageById(1)
    }
  },

  mounted () {
    console.log(this.image)
  }
}

</script>

<style lang="stylus">

</style>
