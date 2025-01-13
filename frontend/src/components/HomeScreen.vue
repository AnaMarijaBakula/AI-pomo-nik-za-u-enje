<template>
  <v-container>
    <v-row justify="center">
      <v-col :cols="12" :md="10" :lg="6" :xl="4">
        <FrameCenter>
          <div class="main-content">
            <span class="title"> Level Up Your Code </span>
            <span class="text">
              Starting out can be overwhelming, so we focus on what matters—your project.
              Through code analysis, we offer practical advice to help you master best practices and grow confidently as a
              programmer. Build smarter with our support!
            </span>
          </div>
          <router-link to="/uploadproject" class="button" style="text-decoration: none">
            <span class="text_3">Get Started</span>
          </router-link>
        </FrameCenter>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import FrameCenter from "@/components/FrameCenter.vue";
</script>

<style scoped>
.main-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 90%;
}

.title {
  font-size: clamp(16px, 5vw, 40px);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #333333;
  text-align: center;
}

.text {
  width: 100%;
  font-size: clamp(12px, 4vw, 20px);
  font-family: 'DM Sans', sans-serif;
  color: #8ca2c0;
  text-align: center;
  line-height: 32px;
}

.button {
  background:
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(60deg, #4E89FD, #A24CFE) border-box;
  padding: 15px 30px;
  border: 2px solid transparent;
  border-radius: 50px;
  display: inline-block;
  text-align: center;
  font-size: 16px;
}

.text_3 {
  color: #624F82;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
}
</style>
