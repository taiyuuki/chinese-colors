<script setup lang="ts">
import { ColorJson } from 'src/colors/type'

defineProps<{ color1: ColorJson, color2: ColorJson }>()
</script>

<template>
  <div class="color-gradient" />
</template>

<style scoped>
.color-gradient {
    width: 30px;
    height: 120px;
    background: linear-gradient(to bottom, v-bind('color1.hex'), v-bind('color2.hex'));
    color: var(--text-color);
    margin: 2px;
}
</style>
