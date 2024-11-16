<script setup lang="ts">
import ColorSheet from 'src/components/ColorSheet.vue'
import ColorDetail from 'src/components/ColorDetail.vue'
</script>

<template>
  <q-page class="page row justify-center">
    <ColorDetail />
    <ColorSheet />
  </q-page>
</template>

<style lang="scss">
.page {
    margin: 0 auto; 
}
</style>
