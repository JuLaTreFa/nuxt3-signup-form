<template>
  <form
    aria-labelledby="signup-heading"
    novalidate
    @submit.prevent="handleSubmit"
  >
    <provet-visually-hidden>
      <h1 id="signup-heading">
        Sign Up Form
      </h1>
    </provet-visually-hidden>

    <provet-stack>
      <BaseInput
        v-model="email"
        label="Email"
        name="email"
        type="email"
        expand
        placeholder="user@example.com"
        :error="errors.email"
        @field-event="validateField"
      />

      <BaseInput
        v-model="password"
        label="Password"
        name="password"
        type="password"
        expand
        placeholder="••••••••"
        :error="errors.password"
        @field-event="validateField"
      />

      <CheckboxInput
        v-model="updates"
        label="Receive occasional product updates and announcements"
      />

      <SubmitButton :disabled="!isFormValid">
        Sign Up
      </SubmitButton>
    </provet-stack>
  </form>
</template>

<script setup lang="ts">
import type { Field, FormData } from '@/types/form'

const emits = defineEmits<{
  (e: 'submitted'): void
}>()

const email = ref<string>('')
const password = ref<string>('')
const updates = ref<boolean>(false)

// Reactive error messages
const errors = reactive<{
  email: string
  password: string
}>({
  email: '',
  password: '',
})

const form: FormData = {
  email,
  password,
}

function validateField(field: Field): void {
  errors[field] = getValidationError(field, form[field].value)
}

function getValidationError(field: Field, value: string): string {
  if (!value.trim()) {
    return `${field[0].toUpperCase() + field.slice(1)} is required`
  }
  return ''
}

const isFormValid: ComputedRef<boolean> = computed(() => {
  return email.value.trim() !== '' && password.value.trim() !== ''
})

function handleSubmit(): void {
  (['email', 'password'] as const).forEach(validateField)

  if (!isFormValid.value) return
  // Show error notification
  emits('submitted')
  // Handle successful submission
}
</script>
