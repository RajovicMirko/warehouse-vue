<template>
  <div class="error-message" v-if="visible">{{message}}</div>
</template>

<script>
export default {
  name: 'error-message',
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    },
    message: {
      type: String,
      default: 'Some error with field'
    }
  }
}
</script>
