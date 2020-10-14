<template>
  <q-input
    @input="$emit('update:value', $event)"
    :name="name"
    :type="type"
    :value="value"
    :label="label"
    :class="`q-mb-md ${addClass}`"
    rounded
    outlined
    dense
  />
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
    }
  }
}
</script>
