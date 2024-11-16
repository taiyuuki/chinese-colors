<script setup lang="ts">
import { QBtn, QScrollArea } from 'quasar'
import { useDisplayColor } from 'src/composables/display-color'
import { colorMap, colorSeries, currentType, setColorSeries } from 'src/composables/color-series'
import { Ref, ref } from 'vue'
import ColorCell from './ColorCell.vue'

const { dark, setColor } = useDisplayColor()
const scrollArea = ref() as Ref<InstanceType<typeof QScrollArea>>

function selectSeries(type: keyof typeof colorMap) {
    if (type === currentType.value) return
    setColorSeries(type)
    scrollArea.value?.setScrollPosition('vertical', 0)
}
</script>

<template>
  <q-scroll-area
    ref="scrollArea"
    class="scroll-area"
    :dark="dark"
  >
    <teleport to="body">
      <div class="color-series q-gutter-xs">
        <q-btn
          v-for="(item, key) in colorMap"
          :key="key"
          dense
          :label="item.label"
          :color="currentType === key ? item.color : 'white'"
          :text-color="currentType === key ? 'white' : item.color"
          @click="selectSeries(key)"
        />
      </div>
    </teleport>
    <div class="color-sheet">
      <ColorCell
        v-for="cell in colorSeries"
        :key="cell.name"
        :color="cell"
        @click="setColor(cell)"
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
