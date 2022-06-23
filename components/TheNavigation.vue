<template>
  <header class="header">
    <div class="header-Logo">
      <img src="logo-wide.png" />
    </div>
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
