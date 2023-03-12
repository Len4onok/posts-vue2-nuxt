<template>
  <div class="post">
    <div v-if="post.tags && post.tags.length" class="post__tags">
      <div v-for="tag in post.tags" :key="tag.id" class="post__tag">
        {{ tag.name }}
      </div>
    </div>
    <h2 class="post__name">
      {{ post.name }}
    </h2>
    <div class="post__description">
      {{ post.description }}
    </div>
    <el-button
      class="post__button"
      type="danger"
      icon="el-icon-delete"
      plain
      data-selector="DELETE_POST"
      @click="deleteItem"
    >
      {{ $t('button.deletePost') }}
    </el-button>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import { mapActions } from 'vuex'
import MainVue from '~/mixins/MainVue'

export default (Vue as VueConstructor<Vue & InstanceType<typeof MainVue>>).extend({
  name: 'post-card',
  mixins: [MainVue],
  props: {
    post: {
      type: Object,
      default: () => {
      },
      required: true
    }
  },
  methods: {
    ...mapActions({
      deletePost: 'posts/deletePost'
    }),
    deleteItem () {
      this.SendRequest(async () => {
        await this.deletePost(this.post)
      }, undefined, true)
    }
  }
})
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  flex-direction: column;
  min-width: 200px;
  border-radius: 10px;
  box-shadow: var(--boxShadow);
  padding: 10px;

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
  }

  &__tag {
    max-width: max-content;
    padding: 5px 7px;
    background-color: var(--primaryColor);
    border-radius: 10px;
  }

  &__name {
    margin-top: 10px;
  }

  &__description {
    font-size: 16px;
    margin-bottom: 10px;
  }

  &__button {
    font-size: 16px;
    width: 100%;
    margin-top: auto;
    margin-bottom: 0;
  }
}

</style>
