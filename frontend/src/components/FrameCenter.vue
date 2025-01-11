<template>
  <div class="white-frame">
    <slot></slot> <!-- Ovo omogućava da unutar okvira umetneš sadržaj -->
  </div>
</template>

<script setup>

</script>

<style scoped>
.white-frame {
  width: 904px;
  height: 483px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 48px;
  gap: 10px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 10px;
  background-color: #ffffff;
  position: relative;
}
</style>
