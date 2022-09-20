<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
</script>

<template>
  <div class="center">
    <ButtonText>Ini Slot</ButtonText>
    <ButtonText name-right-icon="mongodb" style-button="blue" type-button="fill">Blue Flat</ButtonText>
  </div>
</template>

<style lang="scss">
@import '@/assets/sass/index.scss';

$font-family: $plus-jakarta-sans;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-family;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 16px;
}
</style>
