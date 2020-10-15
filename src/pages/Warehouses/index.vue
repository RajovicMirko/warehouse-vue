<template>
  <div class="warehouses">
    <div class="page-header flex justify-between items-center bg-secondary q-px-md q-py-sm">
      <span class="text-h5 text-white">{{$t('warehousesTitle')}}</span>
      <q-btn color="warning" icon="add" round />
    </div>
    <div class="row justify-around q-pa-md">
      <component :is="$getComponent('warehouse-card')" />
      <component :is="$getComponent('warehouse-card')" />
      <component :is="$getComponent('warehouse-card')" />
      <component :is="$getComponent('warehouse-card')" />
      <component :is="$getComponent('warehouse-card')" />
      <component :is="$getComponent('warehouse-card')" />
      <component :is="$getComponent('warehouse-card')" />
      <component :is="$getComponent('warehouse-card')" />
      <component :is="$getComponent('warehouse-card')" />
      <component :is="$getComponent('warehouse-card')" />
      <component :is="$getComponent('warehouse-card')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Warehouses'
}
</script>
