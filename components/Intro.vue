<template>
  <div class="item intro">
    <div class="intro_Title">
      <h1 class="displayFont displayFont-L uppercase">
        {{ titleStart }}
        <span class="typeStroke" :style="styleObject">{{ titleEnd }}</span>
      </h1>
    </div>
    <div v-if="textContent" class="intro_Content">
      <p>
        {{ textContent }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleStart: String,
    titleEnd: String,
    textContent: String,
    color: {
      type: String,
      default: "$type"
    }
  },
  data() {
    return {
      styleObject: {
        textStrokeColor: this.color
      }
    }
  }
}
</script>

<style lang="sass">
.intro
  padding: 0 var(--spacing-sides)
  h1
    line-height: 1
  &_Title
    margin-bottom: 1.5rem
  &_Content
    max-width: $max-width
</style>
