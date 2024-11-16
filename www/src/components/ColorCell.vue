<script setup lang="ts">
import { Color } from 'src/colors/type'
import { useDisplayColor } from 'src/composables/display-color'
import { QKnob, QLinearProgress } from 'quasar'
import { computed } from 'vue'
import { vScrollview } from 'src/directives/v-scrollview'

const props = defineProps<{ color: Color }>()
const { dark, contrastColor, color: currentColor } = useDisplayColor()

const selected = computed(() => props.color.name === currentColor.name)

const r_n = computed(() => props.color.rgb[0])
const g_n = computed(() => props.color.rgb[1])
const b_n = computed(() => props.color.rgb[2])

const r_l = computed(() => props.color.rgb[0] / 255)
const g_l = computed(() => props.color.rgb[1] / 255)
const b_l = computed(() => props.color.rgb[2] / 255)
</script>

<template>
  <div
    v-scrollview="selected"
    :class="{ 'color-cell': true, 'color-cell-selected': selected }"
    :style="{ borderTopColor: props.color.hex, color: contrastColor }"
  >
    <div class="color-name">
      {{ props.color.name }}
    </div>
    <div class="color-rgb-knob">
      <q-knob
        v-model="r_n"
        show-value
        :min="0"
        :max="255"
        size="40px"
        readonly
        color="red"
        track-color="track"
      />
      <q-knob
        v-model="g_n"
        show-value
        :min="0"
        :max="255"
        size="40px"
        readonly
        color="green"
        track-color="track"
      />
      <q-knob
        v-model="b_n"
        show-value
        :min="0"
        :max="255"
        size="40px"
        readonly
        color="blue"
        track-color="track"
      />
    </div>
    <div class="color-rgb-linear">
      <div class="color-rgb-linear-phonic">
        {{ props.color.phonic }}
      </div>
      <q-linear-progress
        :value="r_l"
        size="sm"
        :dark="dark"
      />
      <q-linear-progress
        :value="g_l"
        size="sm"
        :dark="dark"
      />
      <q-linear-progress
        :value="b_l"
        size="sm"
        :dark="dark"
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
