<template>
  <div :class="{ nav: nav }" class="contentBlock">
    <ul v-if="nav" class="contentBlock-Nav">
      <li class="displayFont-Btn uppercase btn">Essays</li>
      <li class="displayFont-Btn uppercase btn">Video</li>
      <li class="displayFont-Btn uppercase btn">Art</li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    nav: Boolean
  }
}
</script>

<style lang="sass">
.contentBlock
  position: relative
  background-color: #B4ABAB
  width: auto
  margin: 0 1em
  padding: var(--spacing-sides) 0
  border-radius: 60px
  &.nav
    padding-top: var(--vertical-four)
  &-Nav
    position: absolute
    top: 0
    right: 0
    display: flex
    flex-wrap: nowrap
    padding: 1.5rem
    li
      margin-right: 1.5rem
      &:last-child
        margin-right: 0
</style>
