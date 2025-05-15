<template>
  <provet-button
    type="submit"
    expand
    variant="primary"
    :disabled="disabled"
  >
    Sign Up
  </provet-button>
</template>

<script setup lang="ts">
defineProps<{ disabled?: boolean }>()
</script>
