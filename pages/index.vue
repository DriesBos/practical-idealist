<template>
  <div class="page">
    <ArticleList :posts="posts" type="horizontal" />
  </div>
</template>

<script>
import { getAllPosts } from "../api/posts"
import onPageLoad from "@/mixins/onPageLoad"

export default {
  mixins: [onPageLoad],
  async asyncData() {
    const posts = await getAllPosts()
    return { posts: posts }
  }
}
</script>
