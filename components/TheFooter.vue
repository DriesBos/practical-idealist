<template>
  <footer class="footer">
    <div class="footer-Subscribe">
      <div class="footer-Subscribe_Logo">
        <img class="logoSquare" src="/logo-square.png" />
      </div>
      <div class="footer-Subscribe_Text">
        <p>Stay informed, enlighted, and inspired.</p>
        <p>Sign up for our monthly newsletter</p>
      </div>
      <div class="footer-Subscribe_Form">
        <input
          type="text"
          placeholder="your email"
          id="emailInput"
          class="cursorInteract"
          name="emailInput"
          required
          minlength="3"
          size="10"
        />
        <Btn text="sign up" to="/api" isBlack />
      </div>
    </div>
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
  position: relative
  display: flex
  flex-direction: column
  justify-content: center
  height: 100vh
  &-Subscribe
    display: flex
    flex-direction: column
    align-items: center
    margin-block: 10rem
    &_Logo
      width: 11rem
      height: 11rem
      margin-block: 1rem
    &_Text
      display: flex
      flex-direction: column
      align-items: center
      margin-bottom: 4.5rem
      font-size: 1.5rem
    &_Form
      display: flex
      justify-content: center
      input
        width: 25rem
        margin-right: 1rem
  &-BottomRow
    position: absolute
    left: 0
    right: 0
    bottom: 0
    display: flex
    flex-wrap: nowrap
    justify-content: space-between
    a
      text-decoration: none
      font-size: 0.8rem
    & > div
      margin: 1rem 2.5rem
    .footer-Icon
      transform: rotate(-90deg)
</style>
