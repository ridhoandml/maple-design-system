<script setup lang="ts">
type size = 'small' | 'normal' | 'large';
type color = 'dark' | 'brand' | 'blue' | 'red' | 'green' | 'yellow';
type isIcon = 'none' | 'left' | 'right' | 'both';

interface IButtonProps {
  label: string;
  size?: size;
  color?: color;
  isIcon?: isIcon;
  iconName?: string;
}

interface IButtonEmits {
  click?: string;
}

const props = defineProps<IButtonProps>();
const emits = defineEmits<IButtonEmits>();

let arrayClass: string[] = [];

const classGenerator = (): string[] => {
  return arrayClass;
};

classGenerator();
</script>

<template>
  <button class="button button--small button--brand" @click="emits.click">{{ props.label }}</button>
</template>

<style scoped lang="scss">
@import '@/assets/sass/index.scss';

$light: $white;

.button {
  border: none;
  outline: none;
}

// Button Size
.button--small {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

// Button Color
.button--brand {
  background-color: $teal-800;
  color: $light;
}
</style>
