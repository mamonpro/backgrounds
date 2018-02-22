<template lang="pug">
  .layer(:class="{ __active: !activeDevice }")
    .layer__inner
      .container
        h2.layer__title Choose your iPhone version
        .select.layer__select
          .select__item(v-for="(device, index) in devices", :key="index", @click="setDevice(device.id)" :class="{ __active: activeId === device.id }")
            .input__text {{ device.name }}
</template>

<script>

export default {
  name: 'Layer',

  data () {
    return {
      devices: null,
      activeId: null
    }
  },

  beforeMount () {
    this.devices = this.$store.state.devices
  },

  computed: {
    activeDevice () {
      return this.$store.state.device || false
    }
  },

  methods: {
    setDevice (id) {
      this.$store.commit('SET_DEVICE', id)
      this.activeId = id
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
    opacity: 0
    visibility: hidden
    transition: ($tr.time * 2) $tr.func
    z-index: 3

    &__title
      margin: 0 0 2rem 0

    &.__active
      bottom: 0
      opacity: 1
      visibility: visible

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
      cursor: pointer
      transition: ($tr.time * .5) $tr.func

      &:hover
        opacity .8
        transition: ($tr.time * .5) $tr.func

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
      transition: $tr.time $tr.func
      border-radius: .4rem
      cursor: pointer

      &.__active
        color: #5428ff;
        background: #fff;
        border-color: #5428ff;

      &:hover
        border-color: rgba($colors.white, .8)

      &:last-child
        margin: 0

</style>
