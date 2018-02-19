<template lang="pug">
  .layer
    .layer__close
      svg(xmlns='http://www.w3.org/2000/svg', width='24', height='24', viewbox='0 0 24 24')
        g(fill='none', fill-rule='evenodd')
          rect(width='48', height='48')
          path(d='M21 4.565L19.435 3 12 10.435 4.565 3 3 4.565 10.435 12 3 19.435 4.565 21 12 13.565 19.435 21 21 19.435 13.565 12z')
    .layer__inner
      .container
        h1 Choose your iPhone version
</template>

<script>

export default {
  name: 'Layer',

  data () {
    return {

    }
  }
}

</script>

<style lang="stylus">

  @require './../assets/styl/variables'

  .layer
    position: fixed
    background: $colors.indigo
    bottom: 0
    left: 0
    right: 0
    z-index: 3

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

</style>
