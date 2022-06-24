<template>
  <div class="authorList">
    <ul>
      <li v-for="(author, index) in authors" :key="index">
        <h2>by {{ author.name }}</h2>
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
  display: flex
  flex-wrap: wrap
  h1, h2, p
   font-family: 'Adieu', Helvetica, Arial, sans-serif
   font-size: 1.25rem
   color: $type-secondary
  ul
    padding: 0 !important
</style>
