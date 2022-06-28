<template>
  <div
    :class="{ nav: nav, border: border, white: isWhite }"
    class="item contentBlock"
    :style="styleObject"
  >
    <div v-if="nav" class="contentBlock-Nav tag-Container">
      <Tag text="Essays" :isWhite="isWhite" />
      <Tag text="Video" :isWhite="isWhite" />
      <Tag text="Art" :isWhite="isWhite" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    nav: Boolean,
    border: Boolean,
    isWhite: Boolean,
    bg: {
      type: String,
      default: "#B4ABAB"
    }
  },
  data() {
    return {
      styleObject: {
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
    padding-top: 2rem
    padding-right: 2rem
    color: inherit
    li
      margin-right: 1.5rem
      color: inherit
      &:last-child
        margin-right: 0
  .btn-Container
    padding: 0 var(--spacing-sides)
</style>
