<script setup lang="ts">
import { computed } from 'vue'
  
const props = defineProps({
    width: { type: Number, default: 300 }, // 进度条总宽度
    height: { type: Number, default: 30 }, // 进度条总高度
    value: { type: Number, default: 0 }, // 进度值 0-1
    max: { type: Number, default: 1 }, // 最大值
    barHeight: { type: Number, default: 12 }, // 进度条高度
    cornerRadius: { type: Number, default: 0 }, // 圆角半径
    textPosition: { // 文字位置
        type: String, 
        default: 'inside', 
        validator: (v: string) => ['inside', 'outside'].includes(v),
    },
})

const progress = computed(() => props.value / props.max)
  
// 进度条当前宽度（带动画）
const currentWidth = computed(() => props.width * progress.value)
</script>
  
<template>
  <svg
    class="linear-progress"
    :width="width"
    :height="height"
  >
    <!-- 背景条 -->
    <rect
      class="track"
      :rx="cornerRadius"
      :ry="cornerRadius"
      :height="barHeight"
      :y="(height - barHeight) / 2"
      :width="width"
    />
        
    <!-- 进度条 -->
    <rect
      class="bar"
      :rx="cornerRadius"
      :ry="cornerRadius"
      :height="barHeight"
      :y="(height - barHeight) / 2"
      :width="currentWidth"
    />
      
  </svg>
</template>
  
<style scoped>
.linear-progress {
    display: block;
    margin: 3px;
}

.track {
    fill: var(--track-color);
}

.bar {
    transition: width 0.5s ease;
    shape-rendering: crispEdges;
    fill: var(--text-color);
}

.progress-text {
    fill: var(--text-color);
    font-weight: bold;
    text-anchor: start;
    transition: all 0.5s ease;
    color: var(--text-color);
}
</style>
