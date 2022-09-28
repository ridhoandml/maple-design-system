<script setup lang="ts">
import ButtonText from '@/components/buttons/ButtonText.vue';
import ButtonIcon from './components/buttons/ButtonIcon.vue';
</script>

<template>
  <div class="center">
    <ButtonText>Ini Slot</ButtonText>
    <ButtonText right-icon="mongodb" color="blue" type="fill" label="blue fill"></ButtonText>
    <ButtonText right-icon="mongodb" color="blue" type="outline" label="blue outline"></ButtonText>
    <ButtonText right-icon="mongodb" color="blue" type="flat" label="blue flat"></ButtonText>
    <ButtonIcon type="outline" color="teal" shape="round"></ButtonIcon>
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
