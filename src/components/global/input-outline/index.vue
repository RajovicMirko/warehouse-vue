<template>
    <q-input
      :id="id"
      :type="type"
      :value="value"
      :label="label"
      lazy-rules
      :rules="rules"
      rounded
      outlined
      dense
      autocorrect="off"
      @input="handleChange"
    />
</template>

<script>
export default {
  name: 'input-outline',
  props: {
    id: {
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
    rules: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleChange (value) {
      this.$emit('onChange', { id: this.id, value })
    }
  }
}
</script>
