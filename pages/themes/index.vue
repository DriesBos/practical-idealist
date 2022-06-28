<template>
  <div class="page">
    <ContentBlock bg="#F0EAE8" border>
      <Intro
        titleStart="Themes"
        textContent="Explore our complete archive of original & curated essays, videos and art using the filters below."
      />
      <div class="tag-Container">
        <Tag text="Filter" />
        <Tag text="Filter" />
        <Tag text="Filter" />
        <Tag text="Filter" />
        <Tag text="Filter" />
        <Tag text="Filter" />
        <Tag text="Filter" />
        <Tag text="Filter" />
        <Tag text="Filter" />
        <Tag text="Filter" />
      </div>
    </ContentBlock>
    <ArticleList :posts="posts" type="simplelist" />
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
