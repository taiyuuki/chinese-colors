<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
  
const props = defineProps({
    width: { type: Number, default: 300 }, // 进度条总宽度
    height: { type: Number, default: 30 }, // 进度条总高度
    value: { type: Number, default: 0 }, // 进度值 0-1
    max: { type: Number, default: 1 }, // 最大值
    color: { type: String, default: '#4CAF50' }, // 进度条颜色
    barHeight: { type: Number, default: 12 }, // 进度条高度
    cornerRadius: { type: Number, default: 0 }, // 圆角半径
    showText: { type: Boolean, default: true }, // 是否显示文字
    textPosition: { // 文字位置
        type: String, 
        default: 'inside', 
        validator: (v: string) => ['inside', 'outside'].includes(v),
    },
    textSize: { type: Number, default: 14 }, // 文字大小（可覆盖自动计算）
    textColor: { type: String, default: '#333' }, // 文字颜色
})
  
const emit = defineEmits(['animation-end'])
const progress = computed(() => props.value / props.max)
  
// 进度条当前宽度（带动画）
const currentWidth = ref(0)
  
// 自动计算文字大小（基于高度）
const autoTextSize = computed(() => {
    return Math.min(props.height * 0.4, props.textSize)
})
  
// 实际使用的文字大小
const textSize = computed(() => {
    return props.textSize > 0 ? props.textSize : autoTextSize.value
})
  
// 进度文字位置计算
const textX = computed(() => {
    return props.textPosition === 'inside' 
        ? Math.min(currentWidth.value - 30, props.width - 30) 
        : props.width + 8
})
  
const textY = computed(() => {
    return props.height / 2 + (props.textPosition === 'outside' ? textSize.value / 3 : 0)
})
  
// 进度动画处理
watchEffect(() => {
    const targetWidth = props.width * progress.value
    currentWidth.value = targetWidth
    
    // 如果需要可以添加动画结束事件
    setTimeout(() => emit('animation-end'), 500)
})
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
      :fill="color"
    />
        
    <!-- 进度文字 -->
    <text
      v-if="showText"
      class="progress-text"
      :x="textX"
      :y="textY"
      :font-size="textSize"
    >
      {{ value }}
    </text>
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
}

.progress-text {
    fill: v-bind('textPosition === "inside" ? "white" : color');
    font-weight: bold;
    text-anchor: start;
    transition: all 0.5s ease;
    color: var(--text-color);
}
</style>
