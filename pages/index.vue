<template>
  <div class="page">
    <div class="item landingHome"></div>
    <ArticleList :posts="posts" type="horizontal" />
    <nuxt-link class="item btn btn-Wide" to="/blog" tag="li">
      see all essays
    </nuxt-link>
    <ContentBlock color="white" bg="#B4ABAB">
      <Intro color="white" titleStart="Curated" titleEnd="Essays" />
      <ArticleList :posts="posts" type="vertical-two" />
    </ContentBlock>
    <ContentBlock color="white" bg="#212121">
      <Intro color="white" titleStart="Curated" titleEnd="Essays" />
      <ArticleList :posts="posts" type="vertical-two" />
    </ContentBlock>
    <ContentBlock bg="white">
      <Intro color="black" titleStart="Curated" titleEnd="Essays" />
      <ArticleList :posts="posts" type="vertical-two" />
    </ContentBlock>
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
