<template>
  <provet-input
    v-bind="inputErrorAttrs"
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
    @focus="() => $emit('field-event', name)"
    @blur="() => $emit('field-event', name)"
    @input="() => $emit('field-event', name)"
  >
    <provet-button
      v-if="type === 'password'"
      slot="end"
      type="button"
      aria-label="Toggle password visibility"
      square
      @click="togglePasswordVisibility"
    >
      <provet-icon
        v-if="!passwordVisible"
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
import type { Field } from '@/types/form'

const props = defineProps<{
  label: string
  expand?: boolean
  required?: boolean
  hideRequired?: boolean
  name: Field
  type: string
  placeholder?: string
  error?: string
}>()

defineEmits<{
  (e: 'field-event', field: Field): void
}>()

const model: ModelRef<string> = defineModel({ default: '' })

const passwordVisible = ref<boolean>(false)

const inputType: ComputedRef<string> = computed(() => {
  if (props.type === 'password') {
    return passwordVisible.value ? 'text' : 'password'
  }
  return props.type
})

function togglePasswordVisibility(): void {
  passwordVisible.value = !passwordVisible.value
}

const errorId: ComputedRef<string> = computed(() => `${props.name}-error`)

const inputErrorAttrs: ComputedRef<{
  error: string
} | {
  error?: undefined
}> = computed(() => {
  return props.error ? { error: props.error } : {}
})
</script>
