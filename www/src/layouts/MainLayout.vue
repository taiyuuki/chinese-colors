<script setup lang="ts">
defineOptions({ name: 'MainLayout' })

</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
