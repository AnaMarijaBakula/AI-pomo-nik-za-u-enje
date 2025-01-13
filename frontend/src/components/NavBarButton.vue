<script setup>
defineProps(['style']);
</script>

<template>
  <div class="style_singin">
    <span class="sing_in"> Sign In </span>
  </div>
</template>

<style scoped>
/* Style=Filled */
.style_singin {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 11px;
  padding-right: 19px;
  padding-bottom: 11px;
  padding-left: 19px;
  gap: 10px;
  flex-shrink: 0;/* Sprečava smanjivanje gumba */
  border-radius: 50px;
  border-width: 1px;/* Debljina obruba */
  border-color: #624f82;
  background-color: #624f82;
  font-size: 16px;
  font-family: 'DM Sans',sans-serif;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #ffffff;
  white-space: pre;/* Zadržava razmake i prijelome unutar teksta */
  position: relative;/*Pozicjoniranje gubma*/
}

/* Do something */
.sing_in {
  flex-shrink: 0;
}
</style>
