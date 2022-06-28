<template>
  <div
    :class="{ nav: nav, border: border }"
    class="item contentBlock"
    :style="styleObject"
  >
    <ul v-if="nav" class="contentBlock-Nav">
      <li class="displayFont-Btn uppercase btn cursorInteract">Essays</li>
      <li class="displayFont-Btn uppercase btn cursorInteract">Video</li>
      <li class="displayFont-Btn uppercase btn cursorInteract">Art</li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    nav: Boolean,
    border: Boolean,
    bg: {
      type: String,
      default: "#B4ABAB"
    },
    color: {
      type: String,
      default: "$type"
    }
  },
  data() {
    return {
      styleObject: {
        color: this.color,
        backgroundColor: this.bg
      }
    }
  }
}
</script>

<style lang="sass">
.contentBlock
  position: relative
  background-color: #B4ABAB
  width: auto
  margin: 0 1rem
  padding-top: var(--vertical-three)
  padding-bottom: var(--spacing-sides)
  border-radius: 60px
  color: inherit
  & .item:last-child
    margin-bottom: 0
  h1, h2, h3, h4, h5, h6, p, a, p
    color: inherit
  &.nav
    padding-top: var(--vertical-four)
    color: inherit
  &.border
    border-style: solid
    border-width: 1px
    border-color: inherit
  &-Nav
    position: absolute
    top: 0
    right: 0
    display: flex
    flex-wrap: nowrap
    padding: 1.5rem
    color: inherit
    li
      margin-right: 1.5rem
      color: inherit
      &:last-child
        margin-right: 0
  .btn-Container
    padding: 0 var(--spacing-sides)
</style>
