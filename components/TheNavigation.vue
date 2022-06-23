<template>
  <header class="header">
    <nuxt-link class="header-Logo" to="/" tag="div">
      <img src="/logo-wide.png" />
    </nuxt-link>
    <nav class="displayFont uppercase">
      <ul>
        <nuxt-link to="/blog" tag="li">Essays</nuxt-link>
        <nuxt-link to="/curations" tag="li">Curations</nuxt-link>
        <nuxt-link to="/themes" tag="li">Themes</nuxt-link>
        <nuxt-link to="/about" tag="li">Info</nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheNavigation"
}
</script>
