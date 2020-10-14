<template>
  <q-item
    clickable
    tag="a"
    :target="isBlank ? '_blank': ''"
    :href="link"
    :to="to"
    class="text-muted"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label v-if="title">{{ title }}</q-item-label>
      <q-item-label v-if="caption" caption>
        {{ caption }}
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
  }
}
</script>
