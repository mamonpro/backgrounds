<template lang="pug">
  .layer(:class="{ __active: active }")
    .layer__close(@click="active = false")
      svg(xmlns='http://www.w3.org/2000/svg', width='24', height='24', viewbox='0 0 24 24')
        g(fill='none', fill-rule='evenodd')
          rect(width='48', height='48')
          path(d='M21 4.565L19.435 3 12 10.435 4.565 3 3 4.565 10.435 12 3 19.435 4.565 21 12 13.565 19.435 21 21 19.435 13.565 12z')
    .layer__inner
      .container
        h2.layer__title Choose your iPhone version
        .select.layer__select
          .select__item(v-for="(device, index) in devices", :key="index", @click="setDevice(device.id)")
            .input__text {{ device.name }}
</template>

<script>

export default {
  name: 'Layer',

  data () {
    return {
      devices: null,
      active: false
    }
  },

  beforeMount () {
    this.devices = this.$store.state.devices

    if (!this.$store.state.device) {
      this.active = true
    }
  },

  methods: {
    setDevice (id) {
      this.$store.commit('SET_DEVICE', id)
      this.active = false
    },

    toggleActive () {
      this.active = !this.active
    }
  }
}

</script>

<style lang="stylus">

  @require './../assets/styl/variables'

  .layer
    position: fixed
    background: $colors.indigo
    bottom: -5rem
    left: 0
    right: 0
    z-index: 3
    transition: bottom ($tr.time * 5) $tr.func

    &.__active
      bottom: 0

    &__inner
      padding: 5rem
      text-align: center
      color: $colors.white

    &__close
      position: absolute
      top: 2rem
      right: 2rem
      display: flex
      align-items: center
      justify-content: center
      width: 4.8rem
      height: 4.8rem

      svg
        display: block

        path
          fill: $colors.white

    &__title
      font-size: 2.8rem

  .select
    display: flex
    align-items: center
    justify-content: center

    &__item
      position: relative
      padding: 1.2rem 1.5rem 1rem 1.5rem
      margin: 0 1rem 0 0
      border: 1px solid rgba($colors.white, .5)
      border-radius: .4rem

      &:last-child
        margin: 0

</style>
