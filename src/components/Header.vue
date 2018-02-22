<template lang="pug">
  header.head
    .head__inner
      router-link.head__logo(to="/")
        .head__back(v-if="back")
          svg(xmlns='http://www.w3.org/2000/svg', width='24', height='24', viewbox='0 0 24 24')
            polygon(points='6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 ')
        h6.head__name bgrnds
      h1.head__title Beautiful<br/>backgrounds<br/>for your {{ iphone }}
</template>

<script>
export default {
  name: 'Header',
  props: {
    headline: {
      type: String,
      default: `Beautiful<br/>backgrounds<br/>for your iPhone.`
    },
    back: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    iphone () {
      if (this.$store.state.device) {
        return this.$store.getters.getDeviceById(this.$store.state.device).name
      } else {
        return 'iPhone.'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

@require './../assets/styl/variables'

.__dark
  .head
    &__name
      color: rgba($colors.white, .5)

    &__back
      svg
        fill: $colors.white

      &::after
        background: rgba($colors.white, .2)

.head
  display: flex
  flex-direction column
  width: 100%
  padding: 5rem 0

  &__inner
    padding-top: $indent.mobile

    @media screen and (min-width: $media.sm)
      padding-top: $indent.desktop

  &__logo
    display: flex
    align-items: center
    height: 4.8rem
    text-decoration: none
    margin-bottom: 1rem

  &__back
    position: relative
    display: flex
    width: 4.8rem
    height: 4.8rem
    align-items: center
    justify-content: center
    margin-right: 3rem
    cursor: pointer

    &:hover
      svg
        opacity: .6

    &::after
      content: ''
      position: absolute
      top: 0
      bottom: 0
      right: -1rem
      width: 1px
      background: rgba($colors.black, .2)
      opacity: 0.7
      transform: rotate3d(0, 0, 1, 22.5deg)

    svg
      position: relative
      display: block
      fill: $colors.black
      opacity: .3
      transition: $tr.time $tr.func

  &__name
    font-size: 1.6rem
    text-transform: uppercase
    font-weight: 500
    color: rgba($colors.black, .5)
    letter-spacing: .05rem

  &__title
    font-size: 4.8rem
    line-height: 1.3
    color: $colors.indigo
    margin: 0

    @media screen and (max-width: 575px)
      font-size: 4rem
</style>
