<script setup>

const emailAddress = 'saitejapottanigari@gmail.com';
const showCopiedMessage = ref(false);

const images = ref([
  '/private/suit_edit_white.png',
  // Add more image paths as needed
]);

const { data: posts } = await useAsyncData(
  `latest-posts`,
  () => {
    return queryContent('/blog').where({ _path: { $not: { $contains: 'tags' } } }).find()
  }
);

const handleContact = () => {
  const getInTouchSection = document.getElementById('get-in-touch');
  if (getInTouchSection) {
    getInTouchSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleDownloadResume = () => {
  window.open('/resume_feb2025.pdf', '_blank');
};



const sendEmail = () => {
  const mailtoLink = `mailto:${emailAddress}`;
  const newWindow = window.open(mailtoLink, '_blank');

  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
    // If opening the email client fails, copy the email to clipboard
    navigator.clipboard.writeText(emailAddress).then(() => {
      showCopiedMessage.value = true;
      setTimeout(() => {
        showCopiedMessage.value = false;
      }, 5000); // Hide the message after 5 seconds
    }).catch(err => {
      console.error('Failed to copy email: ', err);
      alert('Could not open email client or copy email. Please manually copy: ' + emailAddress);
    });
  }
};

const openLinkedIn = () => {
  window.open('https://www.linkedin.com/in/tejareddy8888/', '_blank');
};
</script>

<template>
  <div class="space-y-12">
    <section>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-playfair font-normal">Hi,</h1>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-playfair font-normal">I'm Teja</h1>
    </section>
    <section class="flex flex-col md:flex-row md:items-start md:space-x-8 lg:space-x-12">
      <div class="md:w-2/3 lg:w-3/4 space-y-4">
        <p class="text-xl sm:text-2xl lg:text-3xl italic font-open-sans font-normal">
          A Blockchain Engineer with a passion for building Future of Finance.
        </p>
        <p class="text-xl sm:text-2xl lg:text-3xl italic font-open-sans font-normal">
          Over 7 years of shipping tangible results
        </p>
        <div class="flex flex-wrap gap-4 pt-20: sm:pt-40">
          <CustomButton @click="handleContact">Contact Me</CustomButton>
          <CustomButton @click="handleDownloadResume" variant="secondary">Download Resume</CustomButton>
        </div>
      </div>
      <div class="mt-8 md:mt-0 md:w-1/3 lg:w-1/4 flex justify-center md:justify-end">
        <ImageSlideShow class="w-64 h-180 sm:w-72 sm:h-180 lg:w-80 lg:h-180" :images="images" :interval="5000" />
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-bold mb-6">Latest Blog Posts</h2>
      <section class="grid md:grid-cols-3 gap-6">
        <Post :posts="posts" />
      </section>
    </section>

    <section id="get-in-touch">
      <div class="bg-white dark:bg-gray-500 shadow-md rounded-lg p-6 mx-auto">
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
        <div class="flex flex-col items-center justify-center space-y-4">
          <CustomButton @click="sendEmail" class="w-full max-w-xs">
            <div class="flex items-center justify-center">
              <Icon name="mdi:email" class="mr-2" />
              Email Me
            </div>
          </CustomButton>
          <transition name="fade">
            <p v-if="showCopiedMessage" class="text-green-500 mt-2">Email copied to clipboard!</p>
          </transition>
          <CustomButton @click="openLinkedIn" variant="secondary" class="w-full max-w-xs">
            <div class="flex items-center justify-center">
              <Icon name="mdi:linkedin" class="mr-2" />
              Message on LinkedIn
            </div>
          </CustomButton>
        </div>
      </div>
    </section>
  </div>
</template>