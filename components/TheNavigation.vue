<template>
  <header id="scrollToTop" class="header">
    <nuxt-link class="header-Logo cursorInteract" to="/" tag="div">
      <img src="/logo-wide.png" />
    </nuxt-link>
    <nav class="displayFont uppercase">
      <ul>
        <nuxt-link class="cursorInteract" to="/essays" tag="li"
          >Essays</nuxt-link
        >
        <nuxt-link class="cursorInteract" to="/curations" tag="li"
          >Curations</nuxt-link
        >
        <nuxt-link class="cursorInteract" to="/themes" tag="li"
          >Themes</nuxt-link
        >
        <nuxt-link class="cursorInteract" to="/info" tag="li">Info</nuxt-link>
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
    img
      width: 100%
  ul
    display: flex
    flex-wrap: nowrap
    li
      margin-right: 2.5rem
    li:last-child
      margin-right: 0
  .nuxt-link-exact-active
    text-decoration: underline
</style>
