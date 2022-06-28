<template>
  <div :class="{ white: isWhite }" class="tag cursorInteract">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    isWhite: Boolean
  }
}
</script>

<style lang="sass">
.tag
  transition: all .33s ease
  color: $type
  border-style: solid
  border-color: $type
  border-width: 1.5px
  border-radius: 1000px
  padding: 1em 2em
  text-align: center
  white-space: nowrap
  font-family: 'Adieu', Helvetica, Arial, sans-serif
  text-transform: uppercase
  line-height: 1
  font-size: 0.7rem
  &:hover
    background-color: $type
    color: white
  &.white
    color: white
    border-color: white
    &:hover
      background-color: white
      color: $type
</style>
