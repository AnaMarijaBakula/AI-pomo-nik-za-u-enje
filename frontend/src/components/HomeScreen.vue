<template>
  <v-container>
    <v-row justify="center">
      <v-col :cols="12" :md="8" :lg="6" :xl="2">
        <FrameCenter>
          <div class="main-content">
            <span class="text">Level Up Your Code</span>
            <span class="text_1">
              Starting out can be overwhelming, so we focus on what matters—your project.
              Through code analysis, we offer practical advice to help you master best practices and grow confidently as a
              programmer. Build smarter with our support!
            </span>
          </div>
          <v-btn class="style_outlined_1" color="primary" @click="start">
            <span class="text_3">Get Started</span>
          </v-btn>
        </FrameCenter>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import FrameCenter from "@/components/FrameCenter.vue";

const start = () => {
  console.log("Get Started clicked");
}
</script>

<style scoped>

.main-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 90%; /* Maksimalna širina za tekst, manja od okvira */
}

.text {
  font-size: clamp(16px, 5vw, 40px); /* Smanjena maksimalna veličina fonta */
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #333333;
  text-align: center;
}

.text_1 {
  font-size: clamp(12px, 4vw, 20px); /* Smanjena maksimalna veličina fonta */
  font-family: 'DM Sans', sans-serif;
  color: #8ca2c0;
  text-align: center;
  line-height: 32px;
}

.style_outlined_1 {
  background: linear-gradient(#fff, #fff) padding-box,
  linear-gradient(60deg, #4E89FD, #A24CFE) border-box; /* Gradijent rubova */
  padding: 10px 30px; /* Veći padding za dugme */
  border: 2px solid transparent;
  border-radius: 50px;
  display: inline-block;
  text-align: center;
  font-size: 16px; /* Fiksna veličina fonta za dugme */
}

.text_3 {
  color: #624F82;
  font-family: "DM Sans", sans-serif;
  font-size: 16px; /* Fiksna veličina fonta */
  letter-spacing: 1px;
}
</style>
