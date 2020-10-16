<template>
  <q-btn
    :type="type"
    :class="addClass"
  >
    {{$t(title)}}
  </q-btn>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: ''
    },
    addClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
