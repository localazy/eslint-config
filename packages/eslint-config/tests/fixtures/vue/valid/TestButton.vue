<template>
  <TestButton
    :class="['btn', `btn-${variant}`, { 'btn-block': block, 'btn-disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot v-if="$slots.icon" name="icon" />
    <span class="btn-text">
      <slot>{{ text }}</slot>
    </span>
  </TestButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TestButton',

  props: {
    text: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value: string) => {
        return ['primary', 'secondary', 'success', 'danger', 'warning', 'info'].includes(value);
      },
    },
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
