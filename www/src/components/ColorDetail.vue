<script setup lang="ts">
import { useDisplayColor } from 'src/composables/display-color'
import { computed, ref } from 'vue'
import { rgbToCMYK, rgbToHSL, rgbToHSV } from 'src/utils'
import ColorSquare from './ColorSquare.vue'
import ColorGradient from './ColorGradient.vue'

const { color, setColor, dark } = useDisplayColor()

const name = computed(() => color.name.split(''))
const phonic = computed(() => color.phonic.split(' '))
const rgb = computed(() => `rgb(${color.rgb.join(', ')})`)
const hsv = computed(() => {
    const { h, s, v } = rgbToHSV(color.rgb[0], color.rgb[1], color.rgb[2])

    return `hsv(${h}, ${s}%, ${v}%)`
})
const hsl = computed(() => {
    const { h, s, l } = rgbToHSL(color.rgb[0], color.rgb[1], color.rgb[2])

    return `hsl(${h}, ${s}%, ${l}%)`
})
const cmyk = computed(() => {
    const { c, m, y, k } = rgbToCMYK(color.rgb[0], color.rgb[1], color.rgb[2])

    return `cmyk(${c}, ${m}, ${y}, ${k})`
})

const tab = ref<'hex' | 'rgb' | 'hsv' | 'hsl' | 'cmyk'>('hex')

function handleClick(e: MouseEvent) {
    const target = e.target as HTMLElement
    const name = target.parentElement?.dataset.name
    if (name) {
        const c = color.similarColors.find(c => c.name === name) || color.contrastColors.find(c => c.name === name)

        if (c) {
            setColor(c)
        }
    }
}
</script>

<template>
  <div
    class="color-detail"
  >
    <div class="color-detail-content">
      <div class="color-detail-name">
        <ruby
          v-for="(word, index) in name"
          :key="word + index"
        >
          <rb>{{ word }}</rb>
          <rt>{{ phonic[index] }}</rt>
          <span v-if="index !== name.length - 1">&nbsp;</span>
        </ruby>
      </div>

      <div class="color-picker">
        <q-color
          v-model="color.hex"
          :dark="dark"
          flat
          readonly
          bordered
          rounded
          no-footer
          no-header
        />
      </div>
      <div class="color-detail-values">
        <q-tabs
          v-model="tab"
          class="color-detail-tabs"
          active-class="color-detail-value-active"
          dense
          align="justify"
        >
          <q-tab
            name="hex"
            label="HEX"
            :ripple="false"
          />
          <q-tab
            name="rgb"
            label="RGB"
            :ripple="false"
          />
          <q-tab
            name="hsl"
            label="HSL"
            :ripple="false"
          />
          <q-tab
            name="hsv"
            label="HSV"
            :ripple="false"
          />
          <q-tab
            name="cmyk"
            label="CMYK"
            :ripple="false"
          />
        </q-tabs>
        <div>
          <q-tab-panels
            v-model="tab"
            style="background-color: initial;"
            animated
          >
            <q-tab-panel name="hex">
              <div>{{ color.hex }}</div>
            </q-tab-panel>
            <q-tab-panel name="rgb">
              <div>{{ rgb }}</div>
            </q-tab-panel>
            <q-tab-panel name="hsl">
              <div>{{ hsl }}</div>
            </q-tab-panel>
            <q-tab-panel name="hsv">
              <div>{{ hsv }}</div>
            </q-tab-panel>
            <q-tab-panel name="cmyk">
              <div>{{ cmyk }}</div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
      <div class="color-detail-similar-contrast">
        <div v-show="color.similarColors.length">
          相似颜色
        </div>
        <div
          class="color-detail-similar"
          @click="handleClick"
        >
          <div
            v-for="c in color.similarColors"
            :key="c.name"
            :data-name="c.name"
          >
            <ColorSquare :color="c" />
          </div>
        </div>

        <div v-show="color.contrastColors.length">
          强对比色
        </div>

        <div
          class="color-detail-contrast"
          @click="handleClick"
        >
          <div
            v-for="c in color.contrastColors"
            :key="c.name"
            :data-name="c.name"
          >
            <ColorSquare :color="c" />
          </div>
        </div>
        <div
          class="color-detail-contrast"
        >
          <div
            v-for="c in color.contrastColors"
            :key="c.name"
          >
            <ColorGradient
              :color1="c"
              :color2="color"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-detail {
    flex: 1;
    position: relative;
    padding: 1rem;
    color: var(--text-color);
    transition: color 1.5s ease-in-out;
}

.copy-icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
}

.color-detail-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
}

.color-detail-name {
    font-size: 3rem;
    font-weight: bold;
    white-space: nowrap;
    word-spacing: 0.1em;
}

.color-detail-name rb {
    font-family: '楷体',serif;
}

.color-detail-phonic {
  margin: 0.5rem 0;
}

.color-detail-tabs {
  margin: 10px auto;
  width: fit-content;
  color: var(--unselected-color);
  border-bottom: 1px solid var(--text-color);
}

.color-detail-value-content {
  color: var(--unselected-color)
}

.color-detail-value-active {
  color: var(--text-color);
}

.color-detail-values {
  margin: 10px auto;
  width: fit-content;
  box-shadow: 0 0 0 1px var(--text-color);
  font-weight: bold;
  font-size: 1.2rem;
}

.color-detail-value {
  padding: 20px;
}

.color-picker {
    margin: 1rem auto;
    width: fit-content;
}

.color-detail-similar-contrast {
  margin: 10px auto;
  width: fit-content;
  height: 270px;
}

.color-detail-contrast {
    position: relative;
    display: flex;
    align-items: center;
    margin: 10px auto;
    width: fit-content;
}

.color-detail-similar {
    position: relative;
    display: flex;
    align-items: center;
    margin: 10px auto;
    width: fit-content;
}
</style>
