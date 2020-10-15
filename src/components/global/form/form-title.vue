<template>
  <div class="q-mb-md">
    <span
      v-if="title"
      class="text-h5 text-primary"
    >
      {{title}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'form-title',
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>
