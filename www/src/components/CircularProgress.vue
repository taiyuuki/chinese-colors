<script setup lang="ts">
import { computed } from 'vue'
  
const props = defineProps({
    size: { type: Number, default: 100 }, // 组件大小
    value: { type: Number, default: 0 }, // 进度值 0-1
    max: { type: Number, default: 1 }, // 最大值
    strokeWidth: { type: Number, default: 8 }, // 线条宽度
    color: { type: String, default: '#4CAF50' }, // 进度条颜色
    showText: { type: Boolean, default: true }, // 是否显示文字
    textOffset: { type: Number, default: 0 }, // 文字垂直偏移
    innerRadius: { type: Number, default: null }, // 内半径控制
    textSizeFactor: { type: Number, default: 0.3 }, // 文字大小系数
    minFontSize: { type: Number, default: 0 }, // 最小字体大小
    textColor: { type: String, default: '#333' }, // 文字颜色
})

const progress = computed(() => props.value / props.max)
  
const center = computed(() => props.size / 2)
  
// 计算实际半径
const radius = computed(() => {
    if (props.innerRadius !== null) {

        // 当指定内半径时，计算总半径 = 内半径 + 线宽/2
        return props.innerRadius + computedStrokeWidth.value / 2
    }

    // 默认计算方式保持向后兼容
    return (props.size - computedStrokeWidth.value) / 2
})
  
// 计算最大允许线宽
const computedStrokeWidth = computed(() => {
    if (props.innerRadius !== null) {
        const maxWidth = (props.size / 2 - props.innerRadius) * 2

        return Math.min(props.strokeWidth, maxWidth)
    }

    return props.strokeWidth
})
  
const circumference = computed(() => 2 * Math.PI * radius.value)
const dashArray = computed(() => circumference.value)
const dashOffset = computed(() => circumference.value * (1 - progress.value))

// const progressText = computed(() => `${Math.round(props.progress * 100)}%`)

const fontSize = computed(() => {
    const baseSize = props.size * props.textSizeFactor

    return `${Math.max(baseSize, props.minFontSize)}px`
})
</script>
  
<template>
  <div class="circular-progress">
    <svg
      :width="size"
      :height="size"
    >
      <!-- 背景圆 -->
      <circle
        class="background"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="computedStrokeWidth + 1"
      />
        
      <!-- 进度圆 -->
      <circle
        class="progress"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="computedStrokeWidth"
        :stroke-dasharray="dashArray"
        :stroke-dashoffset="dashOffset"
      />
        
      <!-- 可选文字 -->
      <text 
        v-if="showText"
        :x="center"
        :y="center + textOffset"
        class="progress-text"
        :font-size="fontSize"
      >
        {{ value }}
      </text>
    </svg>
  </div>
</template>
  
  <style scoped>
  /* 原有样式保持不变 */
  .circular-progress {
    display: inline-block;
    position: relative;
  }
  
  svg {
    transform: rotate(-90deg);
  }
  
  circle.background {
    fill: none;
    stroke: var(--track-color);
  }
  
  circle.progress {
    fill: none;
    stroke: v-bind('color');
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease;
  }
  
  .progress-text {
    text-anchor: middle;
    dominant-baseline: middle;
    fill: var(--text-color);
    transform: rotate(90deg);
    transform-origin: center;
  }
  </style>
