<template>
  <nuxt-link
    :class="{ white: isWhite, wide: isWide }"
    class="btn cursorInteract"
    :to="to"
    tag="div"
  >
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: String,
    to: String,
    isWhite: Boolean,
    isWide: Boolean
  }
}
</script>

<style lang="sass">
.btn
  transition: all .33s ease
  color: $type
  border-style: solid
  border-color: $type
  border-width: 1.5px
  border-radius: 1000px
  padding: 1rem 2rem
  text-align: center
  white-space: nowrap
  font-family: 'Adieu', Helvetica, Arial, sans-serif
  line-height: 1
  font-size: 0.8rem
  min-width: $button-min-width
  &:hover
    background-color: $type
    color: white
  &.wide
    width: auto
    margin-left: var(--spacing-sides)
    margin-right: var(--spacing-sides)
  &.white
    color: white
    border-color: white
    &:hover
      background-color: white
      color: $type
</style>
