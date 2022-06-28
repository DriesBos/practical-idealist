<template>
  <!-- Change if needed -->
  <main lang="en-US" translate="no">
    <LazyTheNavigation />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
    <div class="cursor">
      <div class="cursor-One"></div>
      <div class="cursor-Two"></div>
    </div>
    <!-- <LazyTheFooter /> -->
  </main>
</template>

<script>
// import lazyLoadComponents from "@/mixins/lazyLoadComponents"
// import onPageLoad from "@/mixins/onPageLoad"
// import cursorInteraction from "@/mixins/cursorInteraction"

// export default {
//   mixins: [lazyLoadComponents, onPageLoad, cursorInteraction]
// }
//
</script>
