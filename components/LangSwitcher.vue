<template>
  <div class="lang">
    <el-select class="lang__select" :value="currentItem.value" @change="changeLocale">
      <el-option
        v-for="item in languages"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
        <template>
          <div class="lang__option">
            <img class="lang__img" :src="item.img" :alt="item.value">
            {{ item.label }}
          </div>
        </template>
      </el-option>
      <template #prefix>
        <img class="lang__img" :src="currentItem.img" :alt="currentItem.value">
      </template>
    </el-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { languages, TLanguage } from '~/configs/languages'

export default Vue.extend({
  name: 'lang-switcher',
  data () {
    return {
      languages
    }
  },
  computed: {
    currentItem (): TLanguage {
      const localeItem = this.languages.find(item => item.value === this.$i18n.locale)
      return localeItem || this.languages[0]
    }
  },
  methods: {
    changeLocale (lang: string) {
      const localeItem = this.languages.find(item => item.value === lang)
      this.$i18n.setLocale(localeItem ? localeItem.value : this.languages[0].value)
    }
  }
})
</script>

<style lang="scss" scoped>
.lang {
  display: flex;
  min-height: 70px;
  align-items: center;
  justify-content: flex-end;

  &__select {
    max-width: 140px;
  }

  &__option {
    display: flex;
    align-items: center;
    font-family: Rubik, sans-serif;
  }

  &__img {
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }

  &::v-deep .el-input__prefix {
    top: 8px;
  }
}

</style>
