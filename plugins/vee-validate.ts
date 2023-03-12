import Vue from 'vue'

import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure,
  setInteractionMode
} from 'vee-validate'

import * as rules from 'vee-validate/dist/rules'
import type { Context } from '@nuxt/types'

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)
setInteractionMode('eager')

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...(rules as any)[rule]
  })
})

export default ({ app }: { app: Context }): void => {
  configure({
    defaultMessage: (_field_, values) => app.i18n.t(`messages.${values._rule_}`, values) as string
  })
}
