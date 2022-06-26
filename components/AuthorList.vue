<template>
  <div class="authorList">
    <ul>
      <li v-for="(author, index) in authors" :key="index">
        <span>by {{ author.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    authors: Array
  }
}
</script>

<style lang="sass">
.authorList
  h1, h2, p, span
   font-family: 'Adieu', Helvetica, Arial, sans-serif
   font-size: 1.25rem
   color: inherit
   opacity: .5
   width: 100%
  ul
    padding: 0 !important
    display: inline-flex
</style>
