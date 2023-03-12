<template>
  <div class="form">
    <validation-observer
      v-slot="{ handleSubmit }"
      ref="form"
      tag="form"
      class="form__inputs"
      @submit.prevent="handleSubmit()"
      @keypress.enter.prevent="handleClick()"
    >
      <base-input
        v-model="post.name"
        :placeholder="$t('placeholder.enterTitle')"
        :name="$t('label.title')"
        :label="$t('label.title')"
        vid="title"
        data-selector="TITLE"
        rules="required|max:255"
      />
      <base-text-area
        v-model="post.description"
        data-selector="DESCRIPTION"
        :name="$t('label.description')"
        :placeholder="$t('placeholder.enterDescription')"
        :label="$t('label.description')"
        rules="required|max:4096"
      />
    </validation-observer>
    <base-tags :post_id="post.id" class="form__tags" @change="changeTag" />
    <button class="form__button" type="submit" data-selector="ADD-POST" @click="handleClick">
      {{ $t('button.save') }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import { mapActions } from 'vuex'
import { nanoid } from 'nanoid'
import MainVue from '~/mixins/MainVue'
import BaseTags from '~/components/ui/BaseTags/index.vue'
import BaseInput from '~/components/ui/BaseInput/index.vue'
import BaseTextArea from '~/components/ui/BaseFieldTextArea/index.vue'
import { routesPath } from '~/configs/routesPath'
import { ITag } from '~/store/posts/types'

export default (Vue as VueConstructor<Vue & InstanceType<typeof MainVue>>).extend({
  name: 'add-post',
  components: {
    BaseTags,
    BaseInput,
    BaseTextArea
  },
  mixins: [MainVue],
  data () {
    return {
      post: {
        id: nanoid(),
        name: '',
        description: '',
        tags: [] as ITag[]
      }
    }
  },
  methods: {
    ...mapActions({
      addPost: 'posts/addPost'
    }),
    changeTag (tags: ITag[]) {
      this.post.tags = [...tags]
    },
    async handleClick () {
      const isValid = await (this.$refs.form as Vue & { validate: () => Promise<boolean> })?.validate()
      if (isValid) {
        this.SendRequest(async () => {
          await this.addPost(this.post)
          await this.$router.push(routesPath.home)
        }, undefined, true)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.form {
  margin-top: 25px;

  &__button {
    margin-top: 10px;
    @include button;
  }
}

</style>
