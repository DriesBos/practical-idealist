<template>
  <div :class="color" class="tag cursorInteract" :style="styleObject">
    {{ content }}
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    color: {
      type: String,
      default: "black"
    }
  },
  data() {
    return {
      styleObject: {
        color: this.color
      }
    }
  }
}
</script>

<style lang="sass">
.tag
  transition: all .33s ease
  color: inherit
  font-family: 'Adieu', Helvetica, Arial, sans-serif
  text-transform: uppercase
  line-height: 1
  font-size: 0.7rem
  padding: 1em 2em
  border-style: solid
  border-color: inherit
  border-width: 1.5px
  border-radius: 1000px
  text-align: center
  white-space: nowrap
  &:hover
    background-color: inherit
    color: white
</style>
