<template>
  <transition name="fade">
    <div
      v-if="isLoading"
      class="loader"
      :class="{'loader_hider': false}"
    >
      <div class="loader__body">
        <div class="loader__anim">
          <div class="lds-dual-ring" />
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'loader-screen',
  computed: {
    ...mapGetters({
      isLoading: 'loader/getIsLoading'
    })
  }
})

</script>
<style lang="scss" scoped>

.loader {
  padding: 10px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(#000000, .6);
  z-index: 1500;
  align-items: center;
  justify-content: center;
  display: flex;

  &_hider {
    background: #FFFFFF;
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__text {
    background: #FAEEEB;
    padding: 1px 8px;
    font-weight: bold;
    font-size: 12px;
    color: #000000;
    border-radius: 5px;
  }
}

.lds-dual-ring {
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;
}

.lds-dual-ring:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 100px;
  height: 100px;
  // margin: 8px;
  border-radius: 50%;
  border: 6px solid #ffffff;
  border-color: var(--primaryColor) transparent var(--primaryColor) transparent;
  animation: lds-dual-ring 1.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
