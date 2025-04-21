<script setup lang="ts">
import { Color } from 'src/colors/type'
import { useDisplayColor } from 'src/composables/display-color'
import { computed } from 'vue'
import { vScrollview } from 'src/directives/v-scrollview'
import CircularProgress from './CircularProgress.vue'
import LinearProgress from './LinearProgress.vue'

const props = defineProps<{ color: Color }>()
const { contrastColor, color: currentColor, trackColor } = useDisplayColor()

const selected = computed(() => props.color.name === currentColor.name)
</script>

<template>
  <div
    v-scrollview="selected"
    :class="{ 'color-cell': true, 'color-cell-selected': selected }"
  >
    <div class="color-name">
      {{ props.color.name }}
    </div>
    <div class="color-rgb-knob">
      <CircularProgress
        color="#f44336"
        :value="color.rgb[0]"
        :max="255"
        :size="40"
        :stroke-width="5"
        :text-color="contrastColor"
        :track-color="trackColor"
      />
      <CircularProgress
        color="#4caf50"
        :value="color.rgb[1]"
        :max="255"
        :size="40"
        :stroke-width="5"
        :text-color="contrastColor"
        :track-color="trackColor"
      />
      <CircularProgress
        color="#2196f3"
        :value="color.rgb[2]"
        :max="255"
        :size="40"
        :stroke-width="5"
        :text-color="contrastColor"
        :track-color="trackColor"
      />
    </div>
    <div class="color-rgb-linear">
      <div class="color-rgb-linear-phonic">
        {{ props.color.phonic }}
      </div>
      <LinearProgress 
        :color="contrastColor"
        :track-color="trackColor"
        :value="color.rgb[0]"
        :max="255"
        :width="160"
        :height="3"
        :bar-height="3"
        :show-text="false"
      />
      <LinearProgress 
        :color="contrastColor"
        :track-color="trackColor"
        :value="color.rgb[1]"
        :max="255"
        :width="160"
        :height="3"
        :bar-height="3"
        :show-text="false"
      />
      <LinearProgress 
        :color="contrastColor"
        :track-color="trackColor"
        :value="color.rgb[2]"
        :max="255"
        :width="160"
        :height="3"
        :bar-height="3"
        :show-text="false"
      />
      <div>{{ props.color.hex }}</div>
    </div>
  </div>
</template>

<style>
.color-cell {
  width: 80px;
  height: 350px;
  border-top: 15px solid;
  color: var(--text-color);
  border-top-color: v-bind('color.hex');
  background-color: rgba(0, 0, 0, 0.2);
  user-select: none;
  position: relative;
  box-shadow: 0 0 4px var(--text-color);
}

.color-cell-selected {
  background-color: rgba(255, 255, 255, 0.2);
}

.color-cell:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
}

.color-cell .color-name {
  position: absolute;
  top: 50px;
  right: 5px;
  margin: 0px 5px 0 auto;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  width: 16px;
}

.color-rgb-linear-phonic {
  white-space: nowrap;
}

.color-rgb-knob {
  position: absolute;
  width: 40px;
  top: 5px;
  left: 5px;
}

.color-rgb-linear {
  position: absolute;
  width: 160px;
  top: 100px;
  left: 5px;
  transform: rotate3d(0, 0, 1, 90deg);
  transform-origin: 0% 100%;
}

.color-rgb-knob > div {
  margin: 5px;
}

.color-rgb-linear > div {
  margin: 2px;
}

.q-circular-progress {
  color: var(--text-color);
}

.q-linear-progress {
  color: var(--text-color);
}
</style>
