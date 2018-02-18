<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="stylus">

html
  font-size: 62.5%

body
  margin: 0
  display: flex
  font: 400 1.4rem/1.4 'Whitney-Book', 'Helvetica Neue', Helvetica, Arial, sans-serif
*,
*::after,
*::before
  box-sizing: border-box

#app
  width: 100%
</style>
