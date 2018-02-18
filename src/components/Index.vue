<template lang="pug">
  .container
    head-component
    list-component
</template>

<script>
import HeadComponent from '@/components/Header.vue'
import ListComponent from '@/components/List.vue'

export default {
  components: {
    HeadComponent,
    ListComponent
  }
}
</script>

<style lang="stylus">
.container
  display: flex
  flex-direction column
  justify-content: center
  width: 100%
  max-width: 86rem
  margin: 0 auto
  padding: 0 1.5rem
</style>
