<template>
  <div class="page">
    <div class="item landingIndex">
      <div class="landingIndex-Left">
        <h1 class="displayFont displayFont-XL">Why Pragmatism Matters</h1>
        <AuthorList :authors="post.authors" />
        <p class="lineClamp">
          Pragmatism is one half of the Practical Idealist philosophy
          (pragmatism + idealism = practical idealism). Bona fide philosopher
          Brendan Conuel takes us on a journey through the history of American
          Pragmatism, explaining that truth, according to the pragmatist, is
          simply what works.
        </p>
        <Btn text="read" to="/curated" />
      </div>
      <div class="landingIndex-Right">
        <nuxt-link
          :to="'/essays/'"
          title="to article"
          tag="div"
          class="indexLanding-Image imageWindow imageWindow-Feature"
        >
          <img class="rotate" :src="post.feature_image" />
        </nuxt-link>
      </div>
    </div>
    <ArticleList :posts="posts" type="horizontal" />
    <Btn class="item" text="see all essays" isWide to="/essays" />
    <div class="item aboutFeature">
      <div class="aboutFeature-Image">
        <img class="logoSquare" src="/logo-square.png" />
      </div>
      <div class="aboutFeature-Content">
        <h1 class="displayFont displayFont-M uppercase">
          practical
          <span class="typeStroke">idealist</span>
        </h1>
        <br />
        <p class="displayFont">
          Don't fight the system. Create a better one
        </p>
        <br /><br /><br />
        <div class="btn-Container">
          <Btn text="about us" to="/info" />
          <Btn text="our manifesto" to="/info" />
        </div>
      </div>
    </div>
    <ContentBlock bg="#B4ABAB">
      <Intro isWhite titleStart="Curated" titleEnd="Essays" />
      <ArticleList isWhite :posts="posts" type="vertical-two" />
      <Btn text="see all essays" isWide isWhite to="/curated" />
    </ContentBlock>
    <ContentBlock bg="#212121">
      <Intro isWhite titleStart="Curated" titleEnd="Videos" />
      <ArticleList isWhite :posts="posts" type="vertical-two" />
      <Btn text="see all videos" isWide isWhite to="/curated" />
    </ContentBlock>
    <ContentBlock bg="white">
      <Intro titleStart="Curated" titleEnd="Art" />
      <ArticleList :posts="posts" type="vertical-two" />
      <Btn text="see all art" isWide to="/curated" />
    </ContentBlock>
  </div>
</template>

<script>
import { getAllPosts, getSinglePost } from "../api/posts"
import lazyLoadComponents from "@/mixins/lazyLoadComponents"
import onPageLoad from "@/mixins/onPageLoad"
import cursorInteraction from "@/mixins/cursorInteraction"

export default {
  mixins: [lazyLoadComponents, onPageLoad, cursorInteraction],
  async asyncData() {
    const posts = await getAllPosts()
    const post = await getSinglePost("so-you-want-to-change-the-world")
    return { posts: posts, post: post }
  }
}
</script>
