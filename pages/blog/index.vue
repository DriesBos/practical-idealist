<template>
  <div class="page">
    <Intro
      titleStart="Original"
      titleEnd="Essays"
      textContent="The PRACTICAL IDEALIST is dedicated to supporting and amplifying
          innovation – both technological and intellectual – which, as our name
          declares, combines the practical and the idealistic. We publish pieces
          by a variety of thinkers on a variety topics, freely traversing styles
          and perspectives. No matter the style, discipline, or subject matter,
          we value systems thinking, actionable idealism, and beauty—because
          without beauty, it’s all for nought."
    />

    <ArticleList :posts="posts" type="horizontal" />
  </div>
</template>

<script>
import { getAllPosts } from "../../api/posts"
import onPageLoad from "@/mixins/onPageLoad"

export default {
  mixins: [onPageLoad],
  async asyncData() {
    const posts = await getAllPosts()
    return { posts: posts }
  }
}
</script>
