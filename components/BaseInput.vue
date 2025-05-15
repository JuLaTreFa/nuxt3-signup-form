<template>
  <provet-input
    v-bind="errorProp"
    v-model="model"
    :label="label"
    :expand="expand"
    :required="required"
    :hide-required="hideRequired"
    :name="name"
    :type="inputType"
    :placeholder="placeholder"
    :aria-invalid="Boolean(error)"
    :aria-describedby="error ? errorId : undefined"
    @focus="$emit('focus', inputType)"
    @blur="$emit('blur', inputType)"
    @input="$emit('update:model', inputType)"
  >
      <provet-button
        slot="end"
        v-if="type === 'password'"
        type="button"
        aria-label="Toggle password visibility"
        square
        @click="togglePasswordVisibility"
      >
        <provet-icon
          v-if="!showPassword"
          name="interface-edit-off"
        />
        <provet-icon
          v-else
          name="interface-edit-on"
        />
      </provet-button>
  </provet-input>

  <provet-visually-hidden
    v-if="error"
    :id="errorId"
  >
    {{ error }}
  </provet-visually-hidden>
</template>

<script setup lang="ts">
import type { ModelRef } from 'vue'

const props = defineProps<{
  label: string
  expand?: boolean
  required?: boolean
  hideRequired?: boolean
  name: string
  type: string
  placeholder?: string
  error?: string
}>()

defineEmits<{
  (e: 'focus', field: string): void
  (e: 'blur', field: string): void
  (e: 'update:model', field: string): void
}>()

const model: ModelRef<string> = defineModel({ default: '' })

const showPassword = ref<boolean>(false)

const inputType: ComputedRef<string> = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : 'password'
  }
  return props.type
})

function togglePasswordVisibility(): void {
  showPassword.value = !showPassword.value
}

const errorId: ComputedRef<string> = computed(() => `${props.name}-error`)

const errorProp: ComputedRef<{
  error: string
} | {
  error?: undefined
}> = computed(() => {
  return props.error ? { error: props.error } : {}
})
</script>
