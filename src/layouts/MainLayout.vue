<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          {{$t('appTitle')}}
        </q-toolbar-title>

        <div>user dropdown</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          {{$t('drawerTitle')}}
        </q-item-label>
        <EssentialLink
          v-for="link in linksData"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/layout/EssentialLink.vue'

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      linksData: [
        {
          title: this.$t('drawerWarehouseTitle'),
          caption: this.$t('drawerWarehouseCaption'),
          icon: 'fas fa-warehouse',
          to: '/warehouses'
        },
        {
          title: this.$t('drawerStockTitle'),
          caption: this.$t('drawerStockCaption'),
          icon: 'fas fa-boxes',
          to: '/stocks'
        },
        {
          title: this.$t('drawerUserTitle'),
          caption: this.$t('drawerUserCaption'),
          icon: 'fas fa-user',
          to: '/users'
        }
      ]
    }
  }
}
</script>
