<template>
  <button
    :class="[
      'px-4 py-2 rounded-md font-semibold text-sm sm:text-base transition duration-300 ease-in-out',
      variant === 'primary' ? 'bg-teal-700 text-white hover:bg-teal-800' : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      className
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value)
  },
  className: {
    type: String,
    default: ''
  }
});

defineEmits(['click']);
</script>