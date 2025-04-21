<script setup lang="ts">
import { ColorJson } from 'src/colors/type'
import { computed } from 'vue'

const props = defineProps<{ color: ColorJson }>()

const titleTip = computed(() => `${props.color.name}：${props.color.hex}`)
</script>

<template>
  <div
    class="color-square"
    :title="titleTip"
  />
</template>

<style>
.color-square {
    width: 30px;
    height: 30px;
    background-color: v-bind('color.hex');
    color: var(--text-color);
    box-shadow: 0 0 0 1px var(--text-color);
    margin: 2px;
    cursor: pointer;
}
</style>
