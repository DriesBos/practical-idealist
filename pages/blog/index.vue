<template>
  <div class="page">
    <section className="sectionIntro">
      <div class="title">
        <h1 class="displayFont displayFont-L uppercase">Original Essays</h1>
      </div>
      <div>
        <p>
          The PRACTICAL IDEALIST is dedicated to supporting and amplifying
          innovation – both technological and intellectual – which, as our name
          declares, combines the practical and the idealistic. We publish pieces
          by a variety of thinkers on a variety topics, freely traversing styles
          and perspectives. No matter the style, discipline, or subject matter,
          we value systems thinking, actionable idealism, and beauty—because
          without beauty, it’s all for nought.
        </p>
        <br />
        <p>
          We welcome submissions from poets and philosophers, artists and
          activists, academics and amateurs alike. Want to contribute something?
          Click here.
        </p>
      </div>
    </section>

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
