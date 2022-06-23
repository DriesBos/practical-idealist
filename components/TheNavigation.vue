<template>
  <header>
    <nav>
      <ul>
        <nuxt-link to="/" tag="li">Home</nuxt-link>
        <nuxt-link to="/blog" tag="li">Curations</nuxt-link>
        <!-- <nuxt-link to="/themes" tag="li">Themes</nuxt-link> -->
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
