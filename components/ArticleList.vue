<template>
  <div :class="type" class="item articleList">
    <ul>
      <!-- VERTICAL TWO -->
      <template v-if="type === 'vertical-two'">
        <li v-for="(post, key) in posts" :key="key" class="articleList-Item">
          <nuxt-link
            :to="'/essays/' + post.slug"
            title="to article"
            tag="div"
            class="articleList-Image imageWindow imageWindow-S-Side"
          >
            <img :src="post.feature_image" />
          </nuxt-link>

          <nuxt-link
            :to="'/essays/' + post.slug"
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
          </nuxt-link>
        </li>
      </template>

      <!-- HORIZONTAL -->
      <template v-else-if="type === 'horizontal'">
        <li v-for="(post, key) in posts" :key="key" class="articleList-Item">
          <nuxt-link
            :to="'/essays/' + post.slug"
            title="to article"
            tag="div"
            class="articleList-Image imageWindow imageWindow-Horizontal"
          >
            <img :src="post.feature_image" />
          </nuxt-link>

          <nuxt-link
            :to="'/essays/' + post.slug"
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
          </nuxt-link>
        </li>
      </template>

      <!-- SIMPLELIST -->
      <template v-else-if="type === 'simplelist'">
        <li v-for="(post, key) in posts" :key="key" class="articleList-Item">
          <nuxt-link
            :to="'/essays/' + post.slug"
            title="to article"
            tag="div"
            class="articleList-Content"
          >
            <div>
              <h1 class="displayFont displayFont-M">{{ post.title }}</h1>
            </div>
            <div class="tagFont articleList-Content_Tag">
              curated essay
            </div>
          </nuxt-link>
        </li>
      </template>

      <!-- VERTICAL ONE -->
      <template v-else>
        <li v-for="(post, key) in posts" :key="key" class="articleList-Item">
          <nuxt-link
            :to="'/essays/' + post.slug"
            title="to article"
            tag="div"
            class="articleList-Image imageWindow imageWindow-S"
          >
            <img :src="post.feature_image" />
          </nuxt-link>

          <nuxt-link
            :to="'/essays/' + post.slug"
            title="to article"
            tag="div"
            class="articleList-Content"
          >
            <div>
              <h1 class="displayFont displayFont-M">{{ post.title }}</h1>
            </div>

            <AuthorList :authors="post.authors" />

            <div class="articleList-Content_Text">
              <p class="typeSecondary lineClamp">{{ post.excerpt }}</p>
            </div>
          </nuxt-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
    type: String
  }
}
</script>

<style lang="sass">
.articleList
  width: 100%
  padding: 0 var(--spacing-sides)
  &-Content
    display: flex
    flex-direction: column

  &.simplelist
    ul
      display: flex
      flex-direction: column
      flex-wrap: nowrap
      li
        width: 100%
        padding: 2rem 0
        border-bottom: 1px solid $type
        &:first-child
          margin-top: 0
        .articleList-Content
          flex-direction: row
          justify-content: space-between
          align-items: center
          & > div
            &:first-child
              padding-right: 5em
            &:last-child
              flex-shrink: 0

  &.vertical-one
    ul
      display: flex
      flex-direction: column
      li
        display: flex
        flex-wrap: nowrap
        margin-bottom: var(--vertical-two)
        &:last-child
          margin-bottom: 0
        .articleList-Image
          flex-shrink: 0
          margin-right: 2rem
        .articleList-Content_Text
          max-width: $max-width

  &.vertical-two
    ul
      columns: 2
      column-gap: var(--spacing-sides)
      li
        display: flex
        flex-wrap: nowrap
        flex-shrink: 1
        margin-bottom: var(--vertical-two)
        &:last-child
          margin-bottom: 0
        .articleList-Image
          flex-shrink: 0
          margin-right: 2rem
        .articleList-Content_Text
          max-width: $max-width

  &.horizontal
    padding-right: 0
    ul
      display: flex
      flex-direction: row
      flex-wrap: nowrap
      overflow-x: auto
      li
        flex-direction: column
        max-width: 28vw
        margin-right: var(--vertical-three)
        .articleList-Image
          margin-bottom: 1.75rem
        .authorList
          margin-top: 1rem
</style>
