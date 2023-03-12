<template>
  <div class="textarea">
    <validation-provider
      v-slot="{ errors }"
      tag="div"
      :name="name"
      :rules="rules"
    >
      <label
        v-if="label"
        :for="name"
        class="textarea__label"
      >
        {{ label }}
      </label>
      <textarea
        :id="name"
        :value="value"
        class="textarea__input"
        :class="{'textarea__input_error': errors.length}"
        :name="name"
        :placeholder="placeholder"
        :readonly="readonly"
        :style="`height: ${DEFAULT_HEIGHT}`"
        :data-selector="`TEXTAREA-${dataSelector}`"
        @input="handlerInput"
      />
      <p class="textarea__error textarea__error_err">
        {{ errors[0] }}
      </p>
    </validation-provider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const DEFAULT_HEIGHT = '74px'

export default Vue.extend({
  name: 'base-text-area',
  props: {
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    rules: {
      type: String,
      default: ''
    },
    dataSelector: {
      type: String,
      required: true
    }
  },
  data: () => ({
    DEFAULT_HEIGHT
  }),
  methods: {
    handlerInput ({ target }: { target: HTMLFormElement }) {
      this.$emit('input', target.value)
      this.changeHeight(target)
    },

    changeHeight (target: HTMLFormElement) {
      const el = target
      el.style.height = DEFAULT_HEIGHT
      el.style.height = `${target.scrollHeight + 2}px`
    }
  }
})
</script>

<style lang="scss" scoped>
.textarea {
  &__label {
    font-weight: 600;
    margin-bottom: 6px;
  }

  &__input {
    width: 100%;
    padding: 9px 12px;
    border-radius: 6px;
    border: 1px solid var(--primaryColor);
    background: transparent;
    transition: border, box-shadow 0.3s;
    resize: none;
    overflow: hidden;

    &:focus {
      box-shadow: var(--boxShadow);
    }

    &::-webkit-scrollbar {
      width: 0;
    }

    &_error {
      border: 1px solid var(--errorColor);
    }
  }

  &__error {
    min-height: 21px;
    font-size: 14px;
    color: var(--errorColor);
  }
}
</style>
