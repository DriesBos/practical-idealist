<template>
  <div class="page">
    <div class="item landingHome"></div>
    <ArticleList :posts="posts" type="horizontal" />
    <nuxt-link class="item btn btn-Wide" to="/blog" tag="li"
      >see all essays</nuxt-link
    >
  </div>
</template>

<script>
import { getAllPosts } from "../api/posts"
import lazyLoadComponents from "@/mixins/lazyLoadComponents"
import onPageLoad from "@/mixins/onPageLoad"

export default {
  mixins: [lazyLoadComponents, onPageLoad],
  async asyncData() {
    const posts = await getAllPosts()
    return { posts: posts }
  }
}
</script>
