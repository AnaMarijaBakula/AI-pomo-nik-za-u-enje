<script setup>
defineProps(['style']);
import { VCard, VCardText, VCardTitle } from 'vuetify/components';
import MonacoEditor from "@/components/MonacoEditor.vue";

import { ref, onMounted } from 'vue';
import axios from 'axios';

const adviceList = ref([]); // Ovdje ćemo pohraniti podatke iz API-ja

const fetchAdvice = async () => {
  try {
    const response = await axios.get('http://localhost:5001/api/advice');
    adviceList.value = response.data.advice;
  } catch (error) {
    console.error('Error fetching advice:', error);
  }
};

onMounted(fetchAdvice);

</script>

<template>
  <div class="hero">
    <div class="frame_5">
      <div class="playgroundarea">
        <MonacoEditor />
      </div>
      <div class="advicearea">
        <div class="advice-header">
          <h2> Savjeti </h2>
        </div>
        <div class="advice-cards">

          <v-card
            v-for="advice in adviceList"
            :key="advice._id"
            class="advice-card"
            outlined
          >
            <v-card-title>{{ advice.adviceTitle }}</v-card-title>
            <v-card-text>
              <p>{{ advice.adviceDescription.suggestion }}</p>
              <p><strong>Incorrect Code:</strong></p>
              <pre style="text-align: left;"><code>{{ advice.adviceDescription.incorrectCode }}</code></pre>
              <p><strong>Correct Code:</strong></p>
              <pre style="text-align: left;"><code>{{ advice.adviceDescription.correctCode }}</code></pre>
            </v-card-text>
          </v-card>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
/* Hero */
.hero {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-right: 98px;
  padding-bottom: 10px;
  padding-left: 98px;
  gap: 10px;
  overflow: hidden;
  min-height: 100%;
}

/* Frame 5 */
.frame_5 {
  width: 1281px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 48px;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  overflow: hidden;
  position: relative;
}

/* PlaygroundArea */
.playgroundarea {
  width: 617px;
  height: 785px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #624f82;
  background-color: #ffffff;
}

/* AdviceArea */
.advicearea {
  width: 617px;
  height: 785px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #624f82;
  background-color: #ffffff;
}

.advice-header {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}

.advice-cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.advice-card {
  border-radius: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-color: #624f82;
}

.success {
  border-color: #4CAF50;
}

.warning {
  border-color: #FFC107;
}

.error {
  border-color: #F44336;
}
</style>


