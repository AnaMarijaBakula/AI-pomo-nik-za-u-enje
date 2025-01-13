<script setup>
defineProps(['style']);
import { VCard, VCardText, VCardTitle } from 'vuetify/components';
import MonacoEditor from "@/components/MonacoEditor.vue";

</script>

<template>
  <div class="hero">
    <div class="frame_5">
      <div class="playgroundarea">
        <MonacoEditor />
      </div>
      <div class="advicearea">
        <div class="advice-header">
          <h2> Tips for better practice </h2>
        </div>
        <div class="advice-cards">

          <v-card class="advice-card" outlined>
            <v-card-title>Tip 1: Using Variables for Colors and Fonts</v-card-title>
            <v-card-text>
              For colors and fonts, it is recommended to use CSS variables for better maintainability and easier changes in the future.
              Create a style file and organize your styles like this:
              <pre style="text-align: left;"><code>
                :root {
                  --primary-color: #4E89FD;
                  --secondary-color: #A24CFE;
                  --font-family: 'DM Sans', sans-serif;
                }</code></pre>
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


