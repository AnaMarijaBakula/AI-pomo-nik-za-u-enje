<script setup>
import UploadProject from '../components/UploadProject.vue'

</script>

<template>
  <main class="uploadproject">
    <UploadProject />
  </main>
</template>

<style scoped>
.uploadproject {
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



