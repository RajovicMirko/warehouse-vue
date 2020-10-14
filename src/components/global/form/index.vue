<template>
  <q-form
    class="col-xs-12 col-sm-7 col-md-5 col-lg-4 col-xl-2"
    :class="addClass"
    :ref="reference"
    @submit="handleSubmit"
  >
    <component
      :is="$getComponent('form-title')"
      :title="title"
    />
    <slot />
  </q-form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    addClass: {
      type: String,
      default: ''
    },
    reference: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    }
  },
  mounted () {
    this.$refs[this.reference].$el[0].focus()
  },
  methods: {
    handleSubmit () {
      this.$emit('onSubmit', this.$refs[this.reference])
    }
  }
}
</script>
