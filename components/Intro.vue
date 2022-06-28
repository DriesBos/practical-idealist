<template>
  <div :class="{ white: isWhite }" class="item intro">
    <div class="intro_Title">
      <h1 class="displayFont displayFont-L uppercase">
        {{ titleStart }}
        <span class="typeStroke">{{ titleEnd }}</span>
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
    isWhite: Boolean
  }
}
</script>

<style lang="sass">
.intro
  padding: 0 var(--spacing-sides)
  h1
    line-height: 1
  &_Content
    margin-top: 2rem
    max-width: $max-width
  &.white
    color: white
    .typeStroke
      -webkit-text-stroke-color: white
      text-stroke-color: white
</style>
