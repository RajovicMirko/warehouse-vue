<template>
  <q-select
    v-model="language"
    :options="languageOptions"
    :label="$t('languageSelectLabel')"
    :class="addClass"
    dense
    borderless
    emit-value
    map-options
    options-dense
    :label-color="labelColor"
    :color="color"
    :dark="dark"
    style="min-width: 100px"
  />
</template>

<script>
export default {
  name: 'language-select',
  props: {
    addClass: {
      type: String,
      default: ''
    },
    labelColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      language: this.$i18n.locale,
      languageOptions: [
        { value: 'en-us', label: 'English' },
        { value: 'sr-rs', label: 'Srpski' }
      ]
    }
  },
  watch: {
    language (value) {
      this.$i18n.locale = value
    }
  }

}
</script>
