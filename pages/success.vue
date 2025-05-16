<template>
  <div>
    <Head>
      <title>Account Created – Welcome to Nord</title>
      <meta
        name="description"
        content="Your Nord account has been successfully created. Get started now!"
      >
    </Head>
    <provet-empty-state class="responsive-empty-state">
      <provet-icon
        size="xl"
        name="interface-checked-circle"
      />
      <h2>Success</h2>
      <p>Consgratulations, your account has been successfully created.</p>
      <provet-stack
        justify-content="center"
        gap="s"
        direction="horizontal"
      >
        <provet-button variant="primary">
          Continue
        </provet-button>
        <!-- This button is included for demo/navigation purposes only -->
        <provet-button @click="goToSignup">
          Back to signup
        </provet-button>
      </provet-stack>
    </provet-empty-state>
  </div>
</template>

<script setup lang="ts">
function goToSignup() {
  navigateTo('/')
}
</script>

<style scoped>
.responsive-empty-state {
  margin: var(--n-space-xl) 1rem;
}
/* Apply max-width only from 768px (tablet) and up */
@media (min-width: 540px) {
  .responsive-empty-state {
    max-width: 540px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
