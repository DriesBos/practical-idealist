<template>
  <header id="scrollToTop" class="header">
    <nuxt-link class="header-Logo cursorInteract" to="/" tag="div">
      <img src="/logo-wide.png" />
    </nuxt-link>
    <nav class="displayFont uppercase">
      <ul>
        <nuxt-link class="cursorInteract hyperLink" to="/essays" tag="li"
          >Essays</nuxt-link
        >
        <nuxt-link class="cursorInteract hyperLink" to="/curations" tag="li"
          >Curations</nuxt-link
        >
        <nuxt-link class="cursorInteract hyperLink" to="/themes" tag="li"
          >Themes</nuxt-link
        >
        <nuxt-link class="cursorInteract hyperLink" to="/info" tag="li"
          >Info</nuxt-link
        >
      </ul>
    </nav>
  </header>
</template>

<script>
// import { gsap } from "gsap"

export default {
  name: "TheNavigation"
  // mounted() {
  //   gsap.to(".hyperLink.nuxt-link-exact-active", {
  //     "--var": "100%",
  //     duration: 0.66,
  //     delay: 0.33,
  //     ease: "ease"
  //   })
  // }
}
</script>

<style lang="sass">
.hyperLink
  --var: 0% // Hyperlink
  --border-width: 1.5px
  position: relative
  white-space: nowrap
  &::before
    content: ''
    position: absolute
    left: 0
    display: inline-block
    bottom: calc(0px - (#{var(--border-width)} / 2))
    top: 0
    width: var(--var)
    z-index: 0
    border-bottom: var(--border-width) solid $type
  &:hover
    &::before
      @media ( hover: hover )
        animation: hyperLink .33s ease
        animation-iteration-count: 1
  &.nuxt-link-exact-active, &:hover
    --var: 100%


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
    text-decoration: none
</style>
