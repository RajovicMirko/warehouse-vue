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
          class="text-white flex justify-between items-center bg-secondary"
        >
          <span class="q-ma-none">{{$t('drawerTitle')}}</span>
          <component :is="$getComponent('language-select')" labelColor="white" :dark="true"/>
        </q-item-label>
        <component
          :is="$getComponent('drawer-link')"
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
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      linksData: [
        {
          title: 'drawerWarehouseTitle',
          caption: 'drawerWarehouseCaption',
          icon: 'fas fa-warehouse',
          to: '/warehouses'
        },
        {
          title: 'drawerStockTitle',
          caption: 'drawerStockCaption',
          icon: 'fas fa-boxes',
          to: '/stocks'
        },
        {
          title: 'drawerUserTitle',
          caption: 'drawerUserCaption',
          icon: 'fas fa-user',
          to: '/users'
        },
        {
          title: 'drawerSignOutTitle',
          caption: 'drawerSignOutCaption',
          icon: 'fas fa-sign-out-alt',
          to: '/signin'
        }
      ]
    }
  }
}
</script>
