<template>
  <svg
    class="arrow-icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    focusable="false"
  >
    <path
      v-if="direction === 'left'"
      d="M19 12H5m0 0 7 7m-7-7 7-7"
      v-bind="strokeAttrs"
    />
    <path
      v-else-if="direction === 'up'"
      d="M12 19V5m0 0-7 7m7-7 7 7"
      v-bind="strokeAttrs"
    />
    <path
      v-else-if="direction === 'external'"
      d="M7 17 17 7M8 7h9v9"
      v-bind="strokeAttrs"
    />
    <path
      v-else-if="direction === 'refresh'"
      d="M20 11a8 8 0 0 0-14.7-3L4 10m0 0V5m0 5h5m-5 3a8 8 0 0 0 14.7 3L20 14m0 0v5m0-5h-5"
      v-bind="strokeAttrs"
    />
    <path
      v-else
      d="M5 12h14m0 0-7-7m7 7-7 7"
      v-bind="strokeAttrs"
    />
  </svg>
</template>

<script setup>
defineProps({
  direction: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right', 'up', 'external', 'refresh'].includes(value),
  },
})

const strokeAttrs = {
  stroke: 'currentColor',
  'stroke-width': 1.7,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
}
</script>

<style scoped>
.arrow-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  flex: 0 0 auto;
  vertical-align: -0.15em;
}
</style>
