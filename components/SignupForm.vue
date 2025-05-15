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
        @blur="validateField"
        @focus="validateField"
        @update:model="validateField"
      />

      <BaseInput
        v-model="password"
        label="Password"
        name="password"
        type="password"
        expand
        placeholder="••••••••"
        :error="errors.password"
        @blur="validateField"
        @focus="validateField"
        @update:model="validateField"
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

function validateField(field: string): void {
  console.log(field)
  if (field === 'email') {
    console.log(email.value)
    errors.email = email.value.trim() ? '' : 'Email is required'
    console.log(errors.email)
  }
  if (field === 'password') {
    errors.password = password.value.trim() ? '' : 'Password is required'
  }
}

const isFormValid: ComputedRef<boolean> = computed(() => {
  return email.value.trim() !== '' && password.value.trim() !== ''
})

function handleSubmit(): void {
  validateField('email')
  validateField('password')
  if (!isFormValid.value) return

  // Handle successful submission
}
</script>
