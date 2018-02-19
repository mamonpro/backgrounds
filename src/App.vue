<template lang="pug">
  .app#app
    .switch(@click="switchMode")
      .switch__icon
        svg(xmlns='http://www.w3.org/2000/svg', width='48', height='48', viewbox='0 0 48 48')
          g(fill='none', fill-rule='evenodd')
            rect(width='48', height='48')
            path(stroke='#000000', stroke-width='2', d='M19.4673411,11.2326905 C15.0544059,13.3111479 12,17.7988766 12,23 C12,30.1797017 17.8202983,36 25,36 C30.20282,36 34.6917798,32.9436011 36.7693427,28.5283399 C32.2227119,30.5208702 26.4945368,29.4674838 22.5123344,25.4852814 C18.5314216,21.5043685 17.4774282,15.7786137 19.4673411,11.2326905 Z', stroke-linecap='round', stroke-linejoin='round')
    .container
      router-view
    layer
</template>

<script>

import Layer from '@/components/Layer'

export default {
  name: 'App',

  components: {
    Layer
  },

  data () {
    return {
      dark: false
    }
  },

  beforeMount () {
    this.dark = this.loadMode()

    if (this.dark) {
      document.querySelector('html').classList.add('__dark')
    }
  },

  methods: {
    loadMode () {
      if (localStorage.getItem('dark')) {
        return localStorage.getItem('dark') === 'true'
      }
    },

    switchMode () {
      this.dark = !this.dark
      localStorage.setItem('dark', this.dark)
      document.querySelector('html').classList.toggle('__dark')
    }
  }
}
</script>

<style lang="stylus">

  @require './assets/styl/variables'

  html
    font-size: 62.5%
    transition: background $tr.time $tr.func

    &.__dark
      background: $colors.night

  body
    margin: 0
    display: flex
    font: 400 1.4rem/1.5 'Graphik', Helvetica, Arial, sans-serif
    text-rendering: optimizeLegibility
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale

  *,
  *::after,
  *::before
    box-sizing: border-box

  #app
    width: 100%

  .app
    //

  .__dark

    .switch
      &__icon
        svg
          path
            stroke: $colors.white

  .container
    position: relative
    display: flex
    flex-direction column
    justify-content: center
    width: 100%
    max-width: 86rem
    margin: 0 auto
    padding: 0 1.5rem

  .switch
    position: absolute
    top: 2rem
    right: 2rem
    cursor: pointer

    opacity: .4
    transition: $tr.time $tr.func

    &:hover
      opacity: .5

    &__icon

      svg
        display: block
        width: 4.8rem
        height: 4.8rem

        path
          stroke: $colors.black
</style>
