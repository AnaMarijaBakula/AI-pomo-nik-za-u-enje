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

        <!-- Hidden file input to select folder -->
        <input
          type="file"
          id="fileInput"
          ref="fileInput"
          @change="handleFileSelect"
          multiple
          webkitdirectory
          style="display: none"
        />

        <!-- Display selected files -->
        <ul v-if="files.length">
          <li v-for="(file, index) in files" :key="index">{{ file.name }}</li>
        </ul>
      </div>
    </div>
  </FrameCenter>
</template>

<style scoped>
.main-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: relative;
  height: auto;
  min-height: 100%;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  font-size: 48px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 120px;
  color: #333333;
  position: relative;
}

.title-text {
  width: 612px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
}

.upload-file {
  width: 510px;
  height: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 19px;
  padding-right: 19px;
  padding-bottom: 19px;
  padding-left: 19px;
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
  flex-shrink: 0;
  font-size: 20px;
  font-family: 'DM Sans';
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.5px;
  color: #8ca2c0;
  white-space: pre;
}

.text_3 {
  font-weight: 600;
  color: #624f82;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 14px;
  color: #333;
}
</style>
