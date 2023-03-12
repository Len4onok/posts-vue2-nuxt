<template>
  <div class="home">
    <h1>
      {{ $t('title') }}
    </h1>
    <div class="home__add">
      <nuxt-link class="home__link" :to="routesPath.addPost" data-selector="LINK-ADD-POST">
        {{ $t('button.addPost') }}
      </nuxt-link>
    </div>
    <div class="home__posts">
      <post-card v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import PostCard from '~/components/Post/index.vue'
import { routesPath } from '~/configs/routesPath'
import MainVue from '~/mixins/MainVue'

export default (Vue as VueConstructor<Vue & InstanceType<typeof MainVue>>).extend({
  name: 'index-page',
  components: { PostCard },
  mixins: [MainVue],
  data () {
    return {
      routesPath
    }
  },
  computed: {
    ...mapGetters({
      posts: 'posts/getPosts'
    })
  },
  created () {
    if (this.posts && this.posts.length) {
      return
    }
    this.SendRequest(async () => {
      await this.fetchPosts()
    }, undefined, false)
  },
  methods: {
    ...mapActions({
      fetchPosts: 'posts/fetchPosts'
    })
  }
})
</script>

<style lang="scss" scoped>
.home {
  &__add {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  &__link {
    @include button;
  }

  &__posts {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px 0;
  }
}

@include _1400 {
  .home {
    &__posts {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@include _767 {
  .home {
    &__posts {
      grid-template-columns: 1fr;
    }

    &__link {
      width: 100%;
    }
  }
}

</style>
