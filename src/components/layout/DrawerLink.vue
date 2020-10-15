<template>
  <q-item
    clickable
    tag="a"
    :target="isBlank ? '_blank': ''"
    :href="link"
    :to="to"
    class="text-muted"
    :key="rerenderComponent"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label v-if="title">{{ $t(title) }}</q-item-label>
      <q-item-label v-if="caption" caption>
        {{ $t(caption) }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'DrawerLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    to: {
      type: String,
      default: '/'
    },

    icon: {
      type: String,
      default: ''
    },

    isBlank: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    rerenderComponent () {
      console.log('drawer link rerender component')
      return this.$store.getters['language/getRerenderComponent']
    }
  }
}
</script>
