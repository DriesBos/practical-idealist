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

    <section>
      <ul class="articleList">
        <li v-for="(post, key) in posts" :key="key" class="articleList-Item">
          <nuxt-link
            :to="'/blog/' + post.slug"
            title="to article"
            tag="div"
            class="articleList-Image imageWindow imageWindow-S"
          >
            <img :src="post.feature_image" />
          </nuxt-link>

          <nuxt-link
            :to="'/blog/' + post.slug"
            title="to article"
            tag="div"
            class="articleList-Content"
          >
            <div>
              <h1 class="displayFont displayFont-M">{{ post.title }}</h1>
            </div>

            <div class="authorList">
              <ul>
                <li v-for="(author, index) in post.authors" :key="index">
                  <h2>by {{ author.name }}</h2>
                </li>
              </ul>
            </div>

            <div>
              <p class="typeSecondary lineClamp">{{ post.excerpt }}</p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </section>
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
