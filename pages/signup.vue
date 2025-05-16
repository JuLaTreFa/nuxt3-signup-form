<template>
  <div>
    <Head>
      <title>Signup to Nord</title>
      <meta
        name="description"
        content="Create a Nord account and stay updated."
      >
    </Head>
    <provet-stack style="max-width: 340px; margin: var(--n-space-xl) auto; padding: 0 1rem;">
      <provet-card padding="l">
        <h1 slot="header">
          Sign up to Nord
        </h1>
        <SignupForm @submitted="onSubmitted" />
      </provet-card>
      <provet-card class="n-align-center">
        Already have an account? <a href="#">Sign In</a>.
      </provet-card>
    </provet-stack>
  </div>
</template>

<script setup lang="ts">
function onSubmitted(): void {
  navigateTo('/success')
}
</script>
