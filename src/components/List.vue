<template lang="pug">
  .list
    .list__item(v-for="(item, index) in images" :key="index")
      a(:href="source(item.url)" target="_blank")
        img.list__img(:src="source(item.url)")
    .list__load
      .list__btn(@click="index = index + 1") Show More
</template>

<script>
export default {
  data () {
    return {
      index: 1,
      perPage: 9
    }
  },

  computed: {
    images () {
      return this.$store.state.images.slice(0, this.perPage * this.index)
    }
  },

  methods: {
    source (url) {
      return (`/static/background/${url}`)
    }
  }
}
</script>

<style lang="stylus">
.list
  display: flex
  justify-content: space-between
  flex-wrap: wrap

  margin-left: -1.5rem
  margin-right: -1.5rem

  &__item
    width: (100% / 3)
    padding: 0 1.5rem
    margin-bottom: 3rem

    @media screen and (max-width: 700px)
      width: (100% / 2)

    @media screen and (max-width: 575px)
      width: 100%

  &__img
    display: block
    width: 100%
    height: auto

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
    background: #8f57dd
    padding: 1rem 2rem
    cursor: pointer
</style>
