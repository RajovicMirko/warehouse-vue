<template>
    <q-input
      :key="rerenderComponent"
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
  computed: {
    rerenderComponent () {
      return this.$store.getters['language/getRerenderComponent']
    }
  },
  methods: {
    handleChange (value) {
      this.$emit('onChange', { id: this.id, value })
    }
  }
}
</script>
