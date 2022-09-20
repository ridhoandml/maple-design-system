<script setup lang="ts">
import ButtonText from '@/components/buttons/ButtonText.vue';
</script>

<template>
  <div class="center">
    <ButtonText>Ini Slot</ButtonText>
    <ButtonText right-icon="mongodb" color="blue" type="fill"> Fill</ButtonText>
    <ButtonText right-icon="mongodb" color="blue" type="outline">Outline</ButtonText>
    <ButtonText right-icon="mongodb" color="blue" type="flat"> Flat</ButtonText>
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
