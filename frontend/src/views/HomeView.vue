<script setup>
import HomeScreen from '../components/HomeScreen.vue'
</script>

<template>
  <main class="home">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
    <div class="circle circle-4"></div>
  <HomeScreen />
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

.circle {
  position: absolute; /* Pozicioniraj unutar roditeljskog elementa */
  background-size: cover; /* Za sliku koja pokriva cijeli krug */
  border-radius: 50%; /* Napravi ih krugovima */
}

/* Krug 1 - pozicija na x: 10px, y: 20px, s slikom Circle 1 */
.circle-1 {
  width: 290px;
  height: 290px;
  left: 290px;
  top: 400px;
  background-image: url('@/assets/Circle 1.png');
}

/* Krug 2 - pozicija na x: 50%, y: 30%, s slikom Circle 2 */
.circle-2 {
  width: 270px;
  height: 270px;
  left: 380px; /* Centrirano po x osi */
  top: 600px;
  transform: rotate(75deg);
  background-image: url('@/assets/Circle 1.png');
}

/* Krug 3 - pozicija na x: 80%, y: 70%, s slikom Circle 3 */
.circle-3 {
  width: 220px;
  height: 220px;
  right: 380px;
  top: 150px;
  background-image: url('@/assets/Circle 1.png');
}

.circle-4 {
  width: 180px;
  height: 180px;
  right: 300px;
  top: 300px;
  transform: rotate(75deg);
  background-image: url('@/assets/Circle 1.png');
}

/* Mobile Responsiveness */
@media (max-width: 600px) {
  .circle-1 {
    width: 80px;
    height: 80px;
    left: 5%;
    top: 10%;
  }
  .circle-2 {
    width: 100px;
    height: 100px;
    left: 50%;
    top: 40%;
  }
  .circle-3 {
    width: 60px;
    height: 60px;
    left: 85%;
    top: 60%;
  }
}
</style>



