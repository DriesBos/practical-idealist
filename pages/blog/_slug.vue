<template>
  <div class="page page-Article">
    <div class="articleSingle-Landing">
      <div class="imageWindow imageWindow-Full">
        <img :src="post.feature_image" />
      </div>
    </div>

    <div class="articleSingle-Title displayFont displayFont-L">
      <h1>{{ post.title }}</h1>
      <AuthorList :authors="post.authors" />
    </div>

    <div v-html="post.html" />
  </div>
</template>

<script>
import { getSinglePost } from "../../api/posts"
import lazyLoadComponents from "@/mixins/lazyLoadComponents"
import onPageLoad from "@/mixins/onPageLoad"

export default {
  mixins: [lazyLoadComponents, onPageLoad],
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug)
    return { post: post }
  }
}
</script>
