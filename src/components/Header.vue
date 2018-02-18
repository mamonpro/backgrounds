<template lang="pug">
  header.head
    span.head__logo
      | background - NAME
    h1.head__title
      | Beautiful
      br
      | backgrounds
      br
      | for your iPhone.
    .head__social
</template>

<style lang="stylus" scoped>
h1
  margin: 0

.head
  display: flex
  flex-direction column
  width: 100%
  padding: 5rem 0

  &__logo
    font-size: 1.6rem
    text-transform: uppercase
    font-weight: 600
    color: #AAAAAA

  &__title
    font-size: 4.8rem
    line-height: 1.2
    color: #8F57DD

    @media screen and (max-width: 575px)
      font-size: 4rem
</style>
