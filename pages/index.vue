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
        <nuxt-link class="btn cursorInteract" to="/curated" tag="div"
          >read</nuxt-link
        >
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
    <nuxt-link class="item btn btn-Wide" to="/essays" tag="li">
      see all essays
    </nuxt-link>
    <div class="item aboutFeature">
      <div class="aboutFeature-Image">
        <img src="/logo-square.png" />
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
        <ul class="btn-Container">
          <nuxt-link class="btn" to="/info" tag="li">
            about us
          </nuxt-link>
          <nuxt-link class="btn" to="/info" tag="li">
            our manifesto
          </nuxt-link>
        </ul>
      </div>
    </div>
    <ContentBlock color="white" bg="#B4ABAB">
      <Intro color="white" titleStart="Curated" titleEnd="Essays" />
      <ArticleList :posts="posts" type="vertical-two" />
      <nuxt-link class="btn btn-Wide white" to="/curated" tag="li">
        see all essays
      </nuxt-link>
    </ContentBlock>
    <ContentBlock color="white" bg="#212121">
      <Intro color="white" titleStart="Curated" titleEnd="Videos" />
      <ArticleList :posts="posts" type="vertical-two" />
      <nuxt-link class="btn btn-Wide white" to="/curated" tag="li">
        see all videos
      </nuxt-link>
    </ContentBlock>
    <ContentBlock bg="white">
      <Intro color="black" titleStart="Curated" titleEnd="Art" />
      <ArticleList :posts="posts" type="vertical-two" />
      <nuxt-link class="btn btn-Wide" to="/curated" tag="li">
        see all art
      </nuxt-link>
    </ContentBlock>
  </div>
</template>

<script>
import { getAllPosts, getSinglePost } from "../api/posts"
import lazyLoadComponents from "@/mixins/lazyLoadComponents"
import onPageLoad from "@/mixins/onPageLoad"

export default {
  mixins: [lazyLoadComponents, onPageLoad],
  async asyncData() {
    const posts = await getAllPosts()
    const post = await getSinglePost("so-you-want-to-change-the-world")
    return { posts: posts, post: post }
  }
}
</script>
