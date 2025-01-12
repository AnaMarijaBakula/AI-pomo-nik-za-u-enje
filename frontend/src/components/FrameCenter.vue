<template>
  <div class="white-frame">
    <slot></slot> <!-- Ovo omogućava da unutar okvira umetneš sadržaj -->
  </div>
</template>

<script setup>

</script>

<style scoped>
.white-frame {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  max-width: 700px; /* Ovdje možeš postaviti maksimalnu širinu okvira */
  width: 100%;
}
</style>
