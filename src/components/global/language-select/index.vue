<template>
  <q-select
    v-model="lang"
    :options="langOptions"
    :label="$t('languageSelectLabel')"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
</template>

<script>
export default {
  name: 'language-select',
  data () {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'en-us', label: 'English' },
        { value: 'sr-rs', label: 'Srpski' }
      ]
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
    }
  }

}
</script>
