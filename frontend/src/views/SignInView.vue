<script setup>

import SignIn from "@/components/SignIn.vue";
</script>

<template>
  <main class="home">
    <SignIn />
  </main>
</template>

<style scoped>
.home {
  background-image: url('@/assets/GetStartedBackground.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
