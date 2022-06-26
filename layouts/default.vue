<template>
  <!-- Change if needed -->
  <main lang="en-US" translate="no">
    <LazyTheNavigation />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
    <!-- <LazyTheFooter /> -->
  </main>
</template>

<script>
import lazyLoadComponents from "@/mixins/lazyLoadComponents"
import onPageLoad from "@/mixins/onPageLoad"

export default {
  mixins: [lazyLoadComponents, onPageLoad]
}
</script>
