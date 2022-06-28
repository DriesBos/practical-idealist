<template>
  <div class="page">
    <div class="item landingIndex">
      <div class="landingIndex-Left">
        <h1 class="displayFont displayFont-XL">
          Practical <span class="typeStroke">Idealist</span>
        </h1>
        <p class="lineClamp">
          One who simultaneously employs idealistic and pragmatic thinking to
          design visionary systems that can actually be built
        </p>
        <Btn text="our manifesto" to="#our-manifesto" />
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
  </div>
</template>

<script>
import { getAllPosts, getSinglePost } from "../../api/posts"
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
