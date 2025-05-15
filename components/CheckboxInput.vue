<template>
  <provet-checkbox
    size="s"
    :label="label"
    :value="model"
  />
</template>

<script setup lang="ts">
import type { ModelRef } from 'vue'

defineProps<{
  label: string
}>()

const model: ModelRef<boolean> = defineModel({ default: false })
</script>
