<template lang="pug">
  header.head
    .head__inner
      h6.head__name bgrnds
      h1.head__title Beautiful<br/>backgrounds<br/>for your iPhone.
</template>

<style lang="stylus" scoped>

@require './../assets/styl/variables'

.__night
  .head
    &__name
      color: $colors.white

.head
  display: flex
  flex-direction column
  width: 100%
  padding: 5rem 0

  &__inner
    padding-top: $indent.mobile

    @media screen and (min-width: $media.sm)
      padding-top: $indent.desktop

  &__name
    font-size: 1.6rem
    text-transform: uppercase
    font-weight: 400
    color: #888
    letter-spacing: .05rem

    margin: 0 0 1rem 0

  &__title
    font-size: 4.8rem
    line-height: 1.3
    color: $colors.indigo
    margin: 0

    @media screen and (max-width: 575px)
      font-size: 4rem
</style>
