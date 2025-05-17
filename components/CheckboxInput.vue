<template>
  <provet-checkbox
    size="s"
    :label="label"
    :value="model"
    :data-testid="name"
  />
</template>

<script setup lang="ts">
import type { ModelRef } from 'vue'

defineProps<{
  label: string
  name: string
}>()

const model: ModelRef<boolean> = defineModel({ default: false })
</script>
