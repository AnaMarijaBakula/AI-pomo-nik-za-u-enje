<script setup>
defineProps(['style']);
import FrameCenter from "@/components/FrameCenter.vue";
import { ref } from 'vue';

const files = ref([]);

const handleFileSelect = (event) => {
  const selectedFiles = event.target.files;
  files.value = Array.from(selectedFiles);
};

const handleDrop = (event) => {
  event.preventDefault();
  const droppedFiles = event.dataTransfer.files;
  files.value = Array.from(droppedFiles);
};

const triggerFileInput = () => {
  document.getElementById('fileInput').click();
};
</script>
<template>
  <v-container>
    <v-row justify="center">
      <v-col :cols="12" :md="10" :lg="6" :xl="4">
        <FrameCenter>
          <div class="main-content">
            <span class="title">Upload your project here</span>
            <div
              class="upload-file"
              @dragover.prevent
              @drop="handleDrop"
            >
              <span class="text_1">Drag & Drop your project folder</span>
              <span class="text_2">OR</span>
              <span class="text_3" @click="triggerFileInput">Select Project Folder</span>

              <input
                type="file"
                id="fileInput"
                @change="handleFileSelect"
                multiple
                webkitdirectory
                style="display: none"
              />

              <ul v-if="files.length">
                <li v-for="(file, index) in files" :key="index">{{ file.name }}</li>
              </ul>
            </div>
          </div>
        </FrameCenter>
      </v-col>
    </v-row>
  </v-container>
</template>

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

.upload-file {
  width: 510px;
  height: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 19px;
  gap: 10px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #624f82;
  background-color: #ffffff;
  position: relative;
}

.text_1, .text_2 , .text_3{
  width: 100%;
  font-size: clamp(12px, 4vw, 20px);
  font-family: 'DM Sans', sans-serif;
  color: #8ca2c0;
  text-align: center;
  line-height: 32px;
}

.text_3 {
  color: #624F82;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 14px;
  color: #333;
}
@media (max-width: 768px) {
  .upload-file{
    width: 100%; /*Na manjim ekranima širina preuzima cijeli ekran*/
    padding: 15px; /*Smanjivanje paddinga za manje ekrane*/
  }

  .text_1, .text_2, .text_3 {
    font-size: clamp(10px,3vw,16px); /*Povećanje fonta za manje ekrane*/
    line-height: 28px;
  }
  .title {
    font-size: 18px;
  }
}


</style>
