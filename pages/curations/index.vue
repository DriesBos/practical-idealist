<template>
  <div class="page">
    <ContentBlock nav color="white" bg="#B4ABAB">
      <Intro titleStart="Curated" titleEnd="Essays" />
      <ArticleList :posts="posts" type="vertical-two" />
    </ContentBlock>
  </div>
</template>

<script>
import { getAllPosts } from "../../api/posts"
import lazyLoadComponents from "@/mixins/lazyLoadComponents"
import onPageLoad from "@/mixins/onPageLoad"
import cursorInteraction from "@/mixins/cursorInteraction"

export default {
  mixins: [lazyLoadComponents, onPageLoad, cursorInteraction],
  async asyncData() {
    const posts = await getAllPosts()
    return { posts: posts }
  }
}
</script>
