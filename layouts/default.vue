<template>
  <div class="primary">
    <div class="primary__box">
      <LangSwitcher />
      <TaskDescription />
      <nuxt />
    </div>
    <loader-screen />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LangSwitcher from '~/components/LangSwitcher.vue'
import TaskDescription from '~/components/TaskDescription.vue'
import LoaderScreen from '~/components/ui/LoaderScreen/index.vue'

export default Vue.extend({
  components: { LoaderScreen, TaskDescription, LangSwitcher }
})
</script>

<style lang="scss" scoped>
.primary {
  min-height: 100vh;
  font-family: Rubik, sans-serif;

  &__box {
    @include container;
    min-height: 100vh;
  }
}
</style>
