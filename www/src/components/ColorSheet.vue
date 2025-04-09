<script setup lang="ts">
import { QBtn, QScrollArea } from 'quasar'
import { useDisplayColor } from 'src/composables/display-color'
import { colorMap, colorSeries, currentType, setColorSeries } from 'src/composables/color-series'
import { Ref, ref } from 'vue'
import ColorCell from './ColorCell.vue'

const { dark, setColor } = useDisplayColor()
const scrollArea = ref() as Ref<InstanceType<typeof QScrollArea>>

function selectSeries(e: MouseEvent) {
    const target = e.target as HTMLElement
    const btn = target.closest('[data-id]')
    if (btn) {
        const type = btn.getAttribute('data-id') as keyof typeof colorMap
        setColorSeries(type)
    }
    
}

function handleSelectCell(e: MouseEvent) {
    const target = e.target as HTMLElement
    const cell = target.closest('[data-cell]')
    if (cell) {
        const name = cell.getAttribute('data-cell') as string
        const color = colorSeries.find(c => c.name === name)
        if (color) {
            setColor(color)
        }
    }
}
</script>

<template>
  <q-scroll-area
    ref="scrollArea"
    class="scroll-area"
    :dark="dark"
  >
    <teleport to="body">
      <div
        class="color-series q-gutter-xs"
        @click="selectSeries"
      >
        <q-btn
          v-for="(item, key) in colorMap"
          :key="key"
          dense
          :label="item.label"
          :color="currentType === key ? item.color : 'white'"
          :text-color="currentType === key ? 'white' : item.color"
          :data-id="key"
        />
      </div>
    </teleport>
    <div
      class="color-sheet"
      @click="handleSelectCell"
    >
      <ColorCell
        v-for="cell in colorSeries"
        :key="cell.name"
        :color="cell"
        :data-cell="cell.name"
      />
    </div>
  </q-scroll-area>
</template>

<style>
.scroll-area {
    flex:1;
    height: calc(100vh - 80px);
}
.scroll {
    scroll-behavior: smooth;
}
.color-sheet {
    display: flex;
    justify-content: end;
    flex-wrap: wrap;
    gap: 1rem;
    padding-right: 20px;
}
.color-series{
    position: fixed;
    right: 20px;
    bottom: 20px;
}
</style>
