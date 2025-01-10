<template>
  <v-container>
    <v-row justify="center">
      <v-col :cols="12" :md="8" :lg="6" :xl="2">
        <div class="white-frame">
          <slot></slot>
        </div>
      </v-col>
    </v-row>
  </v-container>
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
}
</style>
