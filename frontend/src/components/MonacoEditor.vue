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
      test: '<style>\n' +
        '.text {\n' +
        '  width: 100%;\n' +
        '  font-size: clamp(12px, 4vw, 20px);\n' +
        '  font-family: \'DM Sans\', sans-serif;\n' +
        '  color: #8ca2c0;\n' +
        '  text-align: center;\n' +
        '  line-height: 32px;\n' +
        '}\n' +
        '\n' +
        '.button {\n' +
        '  background:\n' +
        '    linear-gradient(#fff, #fff) padding-box,\n' +
        '    linear-gradient(60deg, #4E89FD, #A24CFE) border-box;\n' +
        '  padding: 15px 30px;\n' +
        '  border: 2px solid transparent;\n' +
        '  border-radius: 50px;\n' +
        '  display: inline-block;\n' +
        '  text-align: center;\n' +
        '  font-size: 16px;\n' +
        '}</style>',
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
