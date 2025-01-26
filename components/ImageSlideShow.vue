<template>
  <div :class="['slideshow', shape, 'w-64 h-128 overflow-hidden cursor-pointer']" @click="nextImage">
    <img :src="images[currentImage]" :alt="'Slide ' + (currentImage + 1)" class="object-cover w-full h-full" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  shape: {
    type: String,
    default: 'square',
    validator: (value) => ['square', 'circle'].includes(value)
  },
  interval: {
    type: Number,
    default: 5000
  }
});

const images = ref([
  '/private/suit_edit_white.png',
  // Add more image paths as needed
]);
const currentImage = ref(0);
let intervalId;

function nextImage() {
  currentImage.value = (currentImage.value + 1) % images.value.length;
}

onMounted(() => {
  intervalId = setInterval(nextImage, props.interval);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.slideshow {
  @apply transition-transform duration-500 ease-in-out;
}

.slideshow.square {
  @apply rounded-none;
}

.slideshow.circle {
  @apply rounded-full;
}
</style>