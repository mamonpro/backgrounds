<template lang="pug">
  .page
    head-component(headline="Beautiful<br/>background<br/>for your iPhone.", back="true")
    .view
      .view__thumb
        img.item__img(:src="'/static/background/' + image.url")
      .view__info(style="color:white")
        ul.view__list
          li.view__item {{ image.view }}
            i.view__icon
              svg(xmlns='http://www.w3.org/2000/svg', width='20px', height='20px', xmlns:xlink='http://www.w3.org/1999/xlink', version='1.1', x='0px', y='0px', viewbox='0 0 356.484 356.484', style='enable-background:new 0 0 488.85 488.85;', xml:space='preserve')
                g
                  path(d='M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2   s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025   c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3   C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7   c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z')
          li.view__item {{ image.downloads }}
            i.view__icon
              svg#Capa_1(xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', version='1.1', x='0px', y='0px', width='20px', height='20px', viewbox='0 0 356.484 356.484', style='enable-background:new 0 0 20 20;', xml:space='preserve')
                g
                  g
                    path(d='M14.708,15.847C14.252,14.864,14,13.742,14,12.5s0.252-2.489,0.708-3.659c0.455-1.171,1.114-2.266,1.929-3.205    c0.814-0.938,1.784-1.723,2.86-2.271C20.574,2.814,21.758,2.5,23,2.5s2.426,0.252,3.503,0.707c1.077,0.456,2.046,1.115,2.86,1.929    c0.813,0.814,1.474,1.784,1.929,2.861C31.749,9.073,32,10.258,32,11.5s-0.252,2.427-0.708,3.503    c-0.455,1.077-1.114,2.047-1.929,2.861C28.55,18.678,17.077,29.044,16,29.5l0,0l0,0C14.923,29.044,3.45,18.678,2.636,17.864    c-0.814-0.814-1.473-1.784-1.929-2.861C0.252,13.927,0,12.742,0,11.5s0.252-2.427,0.707-3.503C1.163,6.92,1.821,5.95,2.636,5.136    C3.45,4.322,4.42,3.663,5.497,3.207C6.573,2.752,7.757,2.5,9,2.5s2.427,0.314,3.503,0.863c1.077,0.55,2.046,1.334,2.861,2.272    c0.814,0.939,1.473,2.034,1.929,3.205C17.748,10.011,18,11.258,18,12.5s-0.252,2.364-0.707,3.347    c-0.456,0.983-1.113,1.828-1.929,2.518')
          li.view__item {{ image.likes }}
            i.view__icon
              svg(xmlns='http://www.w3.org/2000/svg', width='20px', height='20px', xmlns:xlink='http://www.w3.org/1999/xlink', version='1.1', x='0px', y='0px', viewbox='0 0 356.484 356.484', style='enable-background:new 0 0 433.5 433.5;', xml:space='preserve')
                g
                  g#file-download
                    path(d='M395.25,153h-102V0h-153v153h-102l178.5,178.5L395.25,153z M38.25,382.5v51h357v-51H38.25z')

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

  @require './../assets/styl/variables'

  .view
    display: flex

    &__thumb
      position: relative
      display: block
      width: 60%
      border-radius: .5rem
      overflow: hidden
      padding-bottom: 90%;
      margin-bottom: 2rem;
      box-shadow: 0 0 0 .2rem transparent
      transition: $tr.time $tr.func

      img
        position: absolute
        top: 0
        left: 0
        right: 0
        display: block
        width: 100%
        height: auto
        z-index: 1

    &__info
      flex: 1
      display: flex

    &__list
      margin: 0
      list-style: none

    &__item
      display: flex
      width: 100%
      padding 1rem 2rem

    &__icon
      display: block
      width: 2rem
      height: 2rem
      fill: #fff

</style>
