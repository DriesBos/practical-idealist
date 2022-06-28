<template>
  <div class="page">
    <ContentBlock nav isWhite bg="#B4ABAB">
      <Intro isWhite titleStart="Curated" titleEnd="Essays" />
      <ArticleList isWhite :posts="posts" type="vertical-two" />
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
