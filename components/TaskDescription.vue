<template>
  <div class="task">
    <el-collapse value="activeNames">
      <el-collapse-item :title="$t('task.title')" name="1">
        <p class="task__text">
          {{ $t('task.description') }}
        </p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'task-description',
  data () {
    return {
      activeNames: []
    }
  }
})
</script>

<style lang="scss" scoped>
.task {
  margin-top: 25px;

  &__title {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }

  &__text {
    white-space: pre-line;
    font-size: 16px;
    line-height: 120%;
  }

  &::v-deep .el-collapse-item__header {
    font-size: 16px;
  }
}

</style>
