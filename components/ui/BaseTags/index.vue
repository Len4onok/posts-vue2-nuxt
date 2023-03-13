<template>
  <div>
    <el-tag
      v-for="tag in dynamicTags"
      :key="tag.id"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag.name }}
    </el-tag>
    <el-input
      v-if="inputVisible"
      ref="saveTagInput"
      v-model="inputValue"
      class="input-new-tag"
      size="mini"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    />
    <el-button v-else-if="dynamicTags.length < 10" class="button-new-tag" size="small" @click="showInput">
      {{ $t('button.addTag') }}
    </el-button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { nanoid } from 'nanoid'
import { ITag } from '~/store/posts/types'

export default Vue.extend({
  name: 'base-tags',
  props: {
    post_id: {
      type: String,
      default: '',
      required: true
    }
  },
  data () {
    return {
      inputVisible: false,
      inputValue: '',
      dynamicTags: [] as ITag[]
    }
  },
  methods: {
    handleClose (tag) {
      this.dynamicTags = this.dynamicTags.filter(item => item.id !== tag.id)
      this.$emit('change', this.dynamicTags)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick((_) => {
        // @ts-ignore
        this.$refs.saveTagInput?.$refs?.input.focus()
      })
    },

    handleInputConfirm () {
      const inputValue = this.inputValue
      if (inputValue) {
        const tag = {
          id: nanoid(),
          name: inputValue,
          post_id: this.post_id
        }
        this.dynamicTags.push(tag)
        this.$emit('change', this.dynamicTags)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
})

</script>
<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
