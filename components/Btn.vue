<template>
  <div :class="color" class="btn cursorInteract" :style="styleObject">
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
.btn
  transition: all .33s ease
  color: inherit
  border-style: solid
  border-color: inherit
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
    background-color: inherit
    color: white
  &-Wide
    width: auto
    margin: 0 var(--spacing-sides)
</style>
