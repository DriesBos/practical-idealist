<template>
  <footer class="footer">
    <div class="footer-BottomRow">
      <div>
        <a
          class="cursorInteract"
          href="https://www.driesbos.com"
          target="_blank"
          title="Site by Dries Bos"
          rel="noreferrer"
        >
          Site by Dries Bos
        </a>
      </div>
      <div
        v-scroll-to="'#scrollToTop'"
        class="icon icon-ArrowUp footer-Icon cursorInteract"
        title="UP!"
        v-html="require('~/assets/images/icon-arrow.svg?include')"
      ></div>
    </div>
  </footer>
</template>

<style lang="sass">
.footer
  display: flex
  flex-direction: column
  &-BottomRow
    display: flex
    flex-wrap: nowrap
    justify-content: space-between
    a
      text-decoration: none
    & > div
      margin: 1rem var(--spacing-sides)
    .footer-Icon
      transform: rotate(-90deg)
</style>
