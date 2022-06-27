<template>
  <header class="header">
    <nuxt-link class="header-Logo" to="/" tag="div">
      <img src="/logo-wide.png" />
    </nuxt-link>
    <nav class="displayFont uppercase">
      <ul>
        <nuxt-link to="/essays" tag="li">Essays</nuxt-link>
        <nuxt-link to="/curations" tag="li">Curations</nuxt-link>
        <nuxt-link to="/themes" tag="li">Themes</nuxt-link>
        <nuxt-link to="/info" tag="li">Info</nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheNavigation"
}
</script>

<style lang="sass">
.header
  position: relative
  display: flex
  flex-wrap: nowrap
  justify-content: space-between
  align-items: flex-start
  width: 100%
  padding: 2.5rem
  padding-bottom: 0
  &-Logo
    width: 430px
    cursor: pointer
    img
      width: 100%
  ul
    display: flex
    flex-wrap: nowrap
    li
      padding-right: 2.5rem
      cursor: pointer
    li:last-child
      padding-right: 0
  .nuxt-link-exact-active
    text-decoration: underline
</style>
