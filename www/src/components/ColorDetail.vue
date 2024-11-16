<script setup lang="ts">
import { useDisplayColor } from 'src/composables/display-color'
import { bubbleMessage, rgbToCmyk, rgbToHsv } from 'src/utils'
import { computed } from 'vue'

const { color, contrastColor } = useDisplayColor()

const name = computed(() => color.name.split(''))
const phonic = computed(() => color.phonic.split(' '))
const hex = computed(() => color.hex.toLocaleUpperCase())
const rgb = computed(() => `rgb(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]})`)
const cmyk = computed(() => rgbToCmyk(color.rgb[0], color.rgb[1], color.rgb[2]))
const hsv = computed(() => rgbToHsv(color.rgb[0], color.rgb[1], color.rgb[2]))

function copyToClipboard(text: string, e: MouseEvent) {
    const el = document.createElement('textarea')
    el.value = text
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    bubbleMessage(e, '复制成功')
}
</script>

<template>
  <div
    class="color-detail"
    :style="{ color: contrastColor }"
  >
    <div class="color-detail-content">
      <div class="color-detail-name">
        <ruby
          v-for="(word, index) in name"
          :key="word"
        >
          <rb>{{ word }}</rb>
          <rt>{{ phonic[index] }}</rt>
          &nbsp;
        </ruby>
      </div>
      <div class="color-detail-hex-value">
        {{ hex }} <svg
          class="copy-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          @click="copyToClipboard(hex, $event)"
        ><path
          fill="currentColor"
          d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
        /></svg>
      </div>
      <div class="color-detail-rgb-value">
        {{ rgb }} <svg
          class="copy-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          @click="copyToClipboard(rgb, $event)"
        ><path
          fill="currentColor"
          d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
        /></svg>
      </div>
      <div class="color-detail-rgb">
        <div class="color-detail-rgb-label">
          RGB:
        </div>
        <q-knob
          v-model="color.rgb[0]"
          show-value
          :min="0"
          :max="255"
          size="80px"
          readonly
          color="red"
          track-color="track"
        />
        <q-knob
          v-model="color.rgb[1]"
          show-value
          :min="0"
          :max="255"
          size="80px"
          readonly
          color="green"
          track-color="track"
        />
        <q-knob
          v-model="color.rgb[2]"
          show-value
          :min="0"
          :max="255"
          size="80px"
          readonly
          color="blue"
          track-color="track"
        />
      </div>
      <div class="color-detail-hsv">
        <div class="color-detail-hsv-label">
          HSV:
        </div>
        <q-knob
          v-model="hsv.h"
          show-value
          :min="0"
          :max="360"
          size="80px"
          readonly
          track-color="track"
        />
        <q-knob
          v-model="hsv.s"
          show-value
          :min="0"
          :max="100"
          size="80px"
          readonly
          track-color="track"
        />
        <q-knob
          v-model="hsv.v"
          show-value
          :min="0"
          :max="100"
          size="80px"
          readonly
          track-color="track"
        />
      </div>
      <div class="color-detail-cmyk">
        <div class="color-detail-cmyk-label">
          CMYK:
        </div>
        <q-knob
          v-model="cmyk.c"
          show-value
          :min="0"
          :max="255"
          size="80px"
          readonly
          color="cyan-6"
          track-color="track"
        />
        <q-knob
          v-model="cmyk.m"
          show-value
          :min="0"
          :max="100"
          size="80px"
          readonly
          color="pink-6"
          track-color="track"
        />
        <q-knob
          v-model="cmyk.y"
          show-value
          :min="0"
          :max="100"
          size="80px"
          readonly
          color="yellow-6"
          track-color="track"
        />
        <q-knob
          v-model="cmyk.k"
          show-value
          :min="0"
          :max="100"
          size="80px"
          readonly
          color="black"
          track-color="track"
        />
      </div>
    </div>
  </div>
</template>

<style>
.color-detail {
    flex: 1;
    position: relative;
    padding: 1rem;
}

.copy-icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
    color: var(--text-color);
}

.color-detail-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
}

.color-detail-cmyk, .color-detail-rgb, .color-detail-hsv {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.color-detail-cmyk-label, .color-detail-rgb-label, .color-detail-hsv-label {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    height: 80px;
    line-height: 80px;
}

.color-detail-cmyk > div {
    margin: 0 6px 0 0;
}

.color-detail-rgb > div, .color-detail-hsv > div {
    margin: 0 22px 0 0;
}

.color-detail-name {
    font-size: 3rem;
    font-weight: bold;
    padding: 0.5rem;
    white-space: nowrap;
    word-spacing: 0.1em;
}

.color-detail-phonic {
  margin: 0.5rem 0;
}

.color-detail-hex-value, .color-detail-rgb-value {
  font-size: 20px;
  margin-top: 1rem;
}
</style>
