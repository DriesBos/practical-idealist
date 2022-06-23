<template>
  <div>
    <ul class="articleList">
      <li v-for="(post, key) in posts" :key="key">
        <div class="articleList-Image">
          <img :src="post.feature_image" />
        </div>

        <div class="articleList-Content">
          <nuxt-link :to="'/blog/' + post.slug" title="to article" tag="div">
            <div>
              <p>{{ post.title }}</p>
            </div>

            <div>
              <ul class="authorList">
                <li v-for="(author, index) in post.authors" :key="index">
                  <p>{{ author.name }}</p>
                </li>
              </ul>
            </div>
          </nuxt-link>
          <div>
            <p>{{ post.excerpt }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getAllPosts } from "../../api/posts"

export default {
  async asyncData() {
    const posts = await getAllPosts()
    return { posts: posts }
  }
}
</script>
