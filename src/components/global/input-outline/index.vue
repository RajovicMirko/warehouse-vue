<template>
  <div class="q-mb-md">
    <q-input
      @input="handleChange"
      :name="name"
      :type="type"
      :value="value"
      :label="label"
      :class="`${addClass}`"
      rounded
      outlined
      dense
    />
    <component
      :is="$getComponent('error-message')"
      v-for="(error, i) in errors"
      :key="i"
      :visible='error.visible'
      :message='error.message'
    />
  </div>
</template>

<script>
export default {
  name: 'input-outline',
  props: {
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    addClass: {
      type: String,
      default: ''
    },
    errors: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleChange (value) {
      this.$emit('onChange', { name: this.name, value })
    }
  }
}
</script>
