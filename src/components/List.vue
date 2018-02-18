<template lang="pug">
  div
    .list
      .item.list__item(v-for="(item, index) in images.show", :key="index")
        a.item__link(:href="source(item.url)", target="_blank")
          img.item__img(:src="source(item.url)")
    .list__load
      .list__btn(v-if="images.show.length != images.all", @click="index = index + 1, initScroll()") Show More
      .list__empty(v-else) That's all, folks!
</template>

<script>
export default {
  data () {
    return {
      index: 1,
      perPage: 9,
      element: null
    }
  },

  computed: {
    images () {
      return {
        show: this.$store.state.images.slice(0, this.perPage * this.index),
        all: this.$store.state.images.length
      }
    }
  },

  methods: {
    source (url) {
      return (`/static/background/${url}`)
    },

    initScroll () {
      this.element = document.querySelector('.list__load')
      window.addEventListener('scroll', this.handleScroll)
    },

    handleScroll () {
      if (this.isEnd(this.element)) {
        this.index = this.index + 1
      }
    },

    isEnd (element) {
      const rect = element.getBoundingClientRect()
      const html = document.documentElement
      return rect.bottom <= (window.innerHeight || html.clientHeight)
    }
  }
}
</script>

<style lang="stylus">

@require './../assets/styl/variables'

.list
  display: flex
  justify-content: space-between
  flex-wrap: wrap

  margin-left: -1.5rem
  margin-right: -1.5rem

  &__item
    width: 100%
    margin-bottom: 3rem

    @media screen and (min-width: $media.xs)
      width: (100% / 2)

    @media screen and (min-width: $media.sm)
      width: (100% / 3)

  &__load
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    padding: 2rem 0 5rem 0

  &__btn
    display: flex
    justify-content: center
    align-items: center
    font-weight: 400
    letter-spacing: .05rem
    color: #fff
    background: $colors.indigo
    padding: 1.2rem 3rem 1rem 3rem
    cursor: pointer
    border-radius: .3rem
    transition: opacity .15s linear

    &:hover
      opacity: .8

.item
  padding: 0 1.5rem

  &__link
    position: relative
    display: block
    width: 100%
    border-radius: .5rem
    overflow: hidden
    padding-bottom: 180%

    &::before
      content: ''
      position absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      background: transparent
      transition: background .25s linear
      z-index: 2

    &:hover
      &::before
        background: rgba(#fff, .2)

  &__img
    position: absolute
    top: 0
    left: 0
    right: 0
    display: block
    width: 100%
    height: auto
    z-index: 1

</style>
