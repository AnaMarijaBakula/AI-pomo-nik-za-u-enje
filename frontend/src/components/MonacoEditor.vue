<script>
import MonacoEditor from 'monaco-editor-vue3';

export default {
  components: {
    MonacoEditor,
  },
  data() {
    return {
      options: {
        colorDecorators: true,
        lineHeight: 24,
        tabSize: 2,
      },
      test: '<template>\n' +
        '<button class = "text button">Get Started</button> \n' +
        '</template> \n' +
        '\n' +
        '<style scooped>\n' +
        '.text {\n' +
        '  color : #4E89FD;  \n' +
        '  font-family: "DM Sans", sans-serif \n' +
        '}\n' +
        '\n' +
        '.button {\n' +
        '  background-color: #A24CFE ; \n' +
        '} \n' +
        '</style>',
    };
  },
};
</script>

<template>
  <MonacoEditor
    theme="vs-dark"
    :options="options"
    language="javascript"
    :width="'100%'"
    :height="'100%'"
    v-model:value="test"
  ></MonacoEditor>
</template>

<style scoped></style>
