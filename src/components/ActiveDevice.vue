<template lang="pug">
  .device(@click="newDevice")
    .input__text {{ getDevice }}
</template>

<script>
export default {
  data () {
    return {

    }
  },

  computed: {
    getDevice () {
      if (this.$store.state.device) {
        return this.$store.getters.getDeviceById(this.$store.state.device).name
      } else {
        return 'Select Device'
      }
    }
  },

  methods: {
    newDevice () {
      this.$store.state.device = null
    }
  }
}
</script>

<style lang="stylus" scoped>
  @require './../assets/styl/variables'

  .__dark
    .device
      color: $colors.white
      border: 1px solid rgba($colors.white, .5)

  .device
    position: fixed
    bottom: 2rem
    right: 2rem
    padding: 1.2rem 1.5rem 1rem 1.5rem
    margin: 0 1rem 0 0
    border: 1px solid rgba($colors.black, .5)
    transition: $tr.time $tr.func
    border-radius: .4rem
    color: $colors.black
    cursor: pointer
    z-index 2
</style>
