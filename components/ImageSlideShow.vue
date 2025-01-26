<template>
  <div 
    :class="[
      'slideshow', 
      shape, 
      'w-64 h-128 overflow-hidden cursor-pointer transition-transform duration-500 ease-in-out'
    ]" 
    @click="nextImage"
  >
    <img 
      :src="images[currentImage]" 
      :alt="'Slide ' + (currentImage + 1)" 
      class="object-cover w-full h-full"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  interval: {
    type: Number,
    default: 3000
  },
  shape: {
    type: String,
    default: 'square',
    validator: (value) => ['square', 'circle'].includes(value)
  }
});

const currentImage = ref(0);
let intervalId;

function nextImage() {
  currentImage.value = (currentImage.value + 1) % props.images.length;
}

onMounted(() => {
  intervalId = setInterval(nextImage, props.interval);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.slideshow.square {
  @apply rounded-lg;
}

.slideshow.circle {
  @apply rounded-full;
}
</style>