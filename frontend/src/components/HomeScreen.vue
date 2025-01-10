<script setup>

defineProps(['style']);
import FrameCenter from "@/components/FrameCenter.vue";
</script>

<template>
  <FrameCenter>
          <div class="main-content">
            <span class="text"> Level Up Your Code </span>
            <span class="text_1">
              Starting out can be overwhelming, so we focus on what matters—your project. Through code analysis, we offer practical advice to help you master best practices and grow confidently as a
              programmer. Build smarter with our support!
            </span>
          </div>
          <div class="style_outlined_1">
            <span class="text_3"> Get Started </span>
          </div>
  </FrameCenter>
</template>

<style scoped>

/* Auto Layout Vertical */
.main-content {
  width: 612px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  position: relative;
}

/* Auto Layout Vertical */
.text {
  width: 612px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  font-size: 48px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 120px;
  color: #333333;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
}

/* Starting out can be overwhelming, so we focus on what matters—your project. Through code analysis, we offer practical advice to help you master best practices and grow confidently as a programmer. Build smarter with our support! */
.text_1 {
  width: 612px;
  flex-shrink: 0;
  font-size: 20px;
  font-family: 'DM Sans';
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.5px;
  color:  #8ca2c0;
}

.style_outlined_1 {
  background:
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(60deg, #4E89FD, #A24CFE) border-box;
  padding: 15px 30px 15px 30px ;
  border: 2px solid transparent;
  border-radius: 50px;
  display: inline-block;
}

.text_3 {
  color: #624F82;
  font-family: "DM Sans", ui-sans-serif, system-ui, sans-serif;  /* Font */
  font-weight: 600;  /* Možda podešavate težinu fonta */
  font-size: 16px;  /* Veličina fonta */
  letter-spacing: 1px;  /* Razmak između slova */
}
</style>
