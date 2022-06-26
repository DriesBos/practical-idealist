<template>
  <div class="page">
    <ArticleList :posts="posts" type="horizontal" />
    <nuxt-link class="item btn btn-Wide" to="/blog" tag="li">
      see all essays
    </nuxt-link>
    <ContentBlock color="white" bg="#B4ABAB">
      <Intro color="white" titleStart="Curated" titleEnd="Essays" />
      <ArticleList :posts="posts" type="vertical-two" />
      <nuxt-link class="item btn btn-Wide" to="/curated" tag="li">
        see all essays
      </nuxt-link>
    </ContentBlock>
    <ContentBlock color="white" bg="#212121">
      <Intro color="white" titleStart="Curated" titleEnd="Videos" />
      <ArticleList :posts="posts" type="vertical-two" />
      <nuxt-link class="item btn btn-Wide" to="/curated" tag="li">
        see all videos
      </nuxt-link>
    </ContentBlock>
    <ContentBlock bg="white">
      <Intro color="black" titleStart="Curated" titleEnd="Art" />
      <ArticleList :posts="posts" type="vertical-two" />
      <nuxt-link class="item btn btn-Wide" to="/curated" tag="li">
        see all art
      </nuxt-link>
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
