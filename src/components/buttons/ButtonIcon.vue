<script setup lang="ts">
import type { TypeButton, SizeButton, ColorButton, ShapeButton } from '@/utils/TypesComponent';

interface IButtonProps {
  icon?: string;
  type?: TypeButton;
  size?: SizeButton;
  color?: ColorButton;
  shape?: ShapeButton;
}

const props = defineProps<IButtonProps>();
const emits = defineEmits(['onClick']);

const icon = props.icon == null || props.icon == ''.trim() ? 'bx bxs-bell' : props.icon;
const color = props.color == null ? 'teal' : props.color;
const size = props.size == null ? 'normal' : props.size;
const type = props.type == null ? 'fill' : props.type;
const shape = props.shape == null ? 'rectangle' : props.shape;

const classGenerator = (): string => {
  const prefix = `button`;
  let arrayClass: string[] = [];

  arrayClass.push(`${prefix}`);
  arrayClass.push(props.size == null ? `${prefix}--normal` : `${prefix}--${size}`);
  arrayClass.push(`${prefix}--${color}-${type}`);
  arrayClass.push(`${prefix}--${shape}`);

  return arrayClass.join(' ');
};

const classList = classGenerator();
</script>

<template>
  <button :class="classList" @click="emits('onClick')">
    <div class="button__content">
      <i :class="`bx ${icon}`"></i>
    </div>
  </button>
</template>

<style scoped lang="scss">
@import '../../assets/sass/index.scss';

@mixin size-class($size, $font-size, $font-weight, $line-height, $padding, $border-radius, $border-width) {
  &--#{$size} {
    font-size: $font-size;
    font-weight: $font-weight;
    line-height: $line-height;
    padding: $padding;
    border-radius: $border-radius;
    outline-style: $border-solid;
    outline-width: $border-width;
  }
}

@mixin style-class($style, $color, $active-color, $hover-color, $pressed-color, $disabled-color) {
  &--#{$style} {
    &-fill {
      color: $color;
      background-color: $active-color;

      &:hover {
        background-color: $hover-color;
      }

      &:active {
        background-color: $pressed-color;
        outline: 6px solid opacity-color($active-color, 0.25);
      }

      &:disabled {
        background-color: $disabled-color;
      }
    }

    &-outline {
      color: $active-color;
      background-color: transparent;
      outline-color: $active-color;

      &:hover {
        color: $hover-color;
        border-color: $hover-color;
      }

      &:active {
        color: $pressed-color;
        border-color: $pressed-color;
        background-color: $color;
        outline: 6px solid opacity-color($active-color, 0.25);
      }

      &:disabled {
        color: $disabled-color;
        border-color: $disabled-color;
      }
    }

    &-flat {
      color: $active-color;
      background-color: $color;
      outline: none;

      &:hover {
        color: $hover-color;
      }

      &:active {
        color: $pressed-color;
        outline: 6px solid opacity-color($active-color, 0.25);
      }

      &:disabled {
        color: $disabled-color;
      }
    }
  }
}

.button {
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  // Size x-small
  @include size-class('x-small', $font-size-12, $font-weight-700, $line-height-150, $space-4, $space-2, $border-1);
  // Size small
  @include size-class('small', $font-size-14, $font-weight-700, $line-height-150, $space-8, $space-2, $border-2);
  // Size normal
  @include size-class('normal', $font-size-16, $font-weight-700, $line-height-140, $space-12, $space-4, $border-3);
  // Size large
  @include size-class('large', $font-size-18, $font-weight-700, $line-height-140, $space-16, $space-8, $border-4);
  // Size x-large
  @include size-class('x-large', $font-size-20, $font-weight-700, $line-height-140, $space-20, $space-12, $border-5);

  // Style teal
  @include style-class('teal', $white, $teal-500, $teal-600, $teal-700, $teal-300);
  // Style blue
  @include style-class('blue', $white, $blue-500, $blue-600, $blue-700, $blue-300);
  // Style green
  @include style-class('green', $white, $green-500, $green-600, $green-700, $green-300);
  // Style red
  @include style-class('red', $white, $red-500, $red-600, $red-700, $red-300);
  // Style yellow
  @include style-class('yellow', $white, $yellow-500, $yellow-600, $yellow-700, $yellow-300);

  &--round {
    border-radius: $border-rounded;
  }

  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
