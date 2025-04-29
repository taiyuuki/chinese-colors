<script setup lang="ts">
import { QBtn } from 'quasar'
import { useDisplayColor } from 'src/composables/display-color'
import { colorMap, colorSeries, currentType, setColorSeries } from 'src/composables/color-series'
import { Ref, ref } from 'vue'
import ColorCell from './ColorCell.vue'

const { setColor } = useDisplayColor()
const scroll_area = ref() as Ref<HTMLDivElement>

function selectSeries(e: MouseEvent) {
    const target = e.target as HTMLElement
    const btn = target.closest('[data-id]')
    if (btn) {
        const type = btn.getAttribute('data-id') as keyof typeof colorMap
        if (currentType.value !== type) {
            setColorSeries(type)
            scroll_area.value.scrollTo({ top: 0, behavior: 'auto' })
        }
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
  <div
    ref="scroll_area"
    class="scroll-area"
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

    <q-virtual-scroll
      v-slot="{ item }"
      class="color-sheet"
      :items="colorSeries"
      separator
      @click="handleSelectCell"
    >
      <ColorCell
        :key="item.name"
        :color="item"
        :data-cell="item.name"
      />
    </q-virtual-scroll>
  </div>
</template>

<style>
.scroll-area {
    flex:1;
    height: calc(100vh - 80px);
    overflow-y: auto;
}
.scroll {
    scroll-behavior: smooth;
}
.color-sheet .q-virtual-scroll__content {
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
