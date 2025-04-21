<script setup lang="ts">
import { useDisplayColor } from 'src/composables/display-color'
import { computed } from 'vue'
import ColorSquare from './ColorSquare.vue'
import ColorGradient from './ColorGradient.vue'

const { color, setColor, dark } = useDisplayColor()

const name = computed(() => color.name.split(''))
const phonic = computed(() => color.phonic.split(' '))

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
          &nbsp;
        </ruby>
      </div>
      <div class="color-picker">
        <q-color
          v-model="color.hex"
          :dark="dark"
          flat
          readonly
          bordered
          no-footer
        />
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
    padding: 0.5rem;
    white-space: nowrap;
    word-spacing: 0.1em;
}

.color-detail-phonic {
  margin: 0.5rem 0;
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
