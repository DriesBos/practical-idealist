<template>
  <div class="page">
    <ContentBlock nav isWhite bg="#B4ABAB">
      <Intro
        isWhite
        titleStart="Curated"
        titleEnd="Essays"
        textContent="Browse our ever growing and carefully curated collection of ideas, methods, and modes of thinking designed to galvanize systemic change. For every piece we curate, we offer a thorough summary as well as a link to the original piece. We scour the world wide web to find the articles, videos, and art that live at that ripe intersection of the practical and idealistic—pieces that seek to shift the very terms of public conversation as they imagine, present, and propel fresh approaches to a more beautiful world. Have a suggestion for our curated content?  Drop us a line."
      />
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
