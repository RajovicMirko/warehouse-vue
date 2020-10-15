import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en-us',
  // locale: 'sr-rs',
  fallbackLocale: 'en-us',
  messages
})

Vue.prototype.$rerenderComponents = 0

export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n
}

export { i18n }
