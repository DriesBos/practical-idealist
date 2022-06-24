<template>
  <div class="item-Intro">
    <div class="item-Intro_Title">
      <h1 class="displayFont displayFont-L uppercase">
        {{ titleStart }} <span class="typeStroke">{{ titleEnd }}</span>
      </h1>
    </div>
    <div class="item-Intro_Content">
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
    textContent: String
  }
}
</script>

<style lang="sass">
.item-Intro
  padding: 0 var(--spacing-sides)
  h1
    line-height: 1
  &_Title
    margin-bottom: 1.5rem
  &_Content
    max-width: 56em
</style>
