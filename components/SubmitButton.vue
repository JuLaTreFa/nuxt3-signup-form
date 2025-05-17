<template>
  <provet-button
    :data-testid="name"
    type="submit"
    expand
    variant="primary"
    :disabled="disabled"
  >
    Sign Up
  </provet-button>
</template>

<script setup lang="ts">
defineProps<{ disabled?: boolean, name?: string }>()
</script>
