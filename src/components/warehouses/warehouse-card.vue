<template>
  <q-card class="warehouse-card q-ma-md col-12 col-sm-5" @click="handleClick">
      <q-card-section class="bg-primary text-center text-white q-pa-sm title-wrapper">
        <div class="text-subtitle1">Warehouse name</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section class="a-px-md q-py-sm">
        <div>
          <span class="text-grey-7">{{$t('warehousesCardCity')}}: </span>
          <span>Belgrade</span>
        </div>

        <div>
          <span class="text-grey-7">{{$t('warehousesCardAddress')}}: </span>
          <span>Neka ulica</span>
        </div>

        <div>
          <span class="text-grey-7">{{$t('warehousesCardContactPerson')}}: </span>
          <span>Janko Janković</span>
        </div>

        <div>
          <span class="text-grey-7">{{$t('warehousesCardContactPhone')}}: </span>
          <span>064/123-45-67</span>
        </div>
      </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'Warehouse-card',
  methods: {
    handleClick () {
      console.log('card clicked')
    }
  }
}
</script>
