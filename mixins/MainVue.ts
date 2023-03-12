import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  methods: {
    ...mapActions({
      setLoading: 'loader/setLoading'
    }),
    SetLoader (value: boolean) {
      this.setLoading(value)
    },
    async SendRequest (resolve: () => Promise<void>, reject?: () => void, isloader = true) {
      this.SetLoader(isloader)
      try {
        await resolve()
      } catch (error) {
        console.log('error - Save - request: ', error)
        this.$notify.error({
          title: this.$t('notification.error') as string,
          message: this.$t('notification.default') as string,
          position: 'bottom-right'
        })
        if (reject) {
          reject()
        }
      } finally {
        this.SetLoader(false)
      }
    }
  }
})
