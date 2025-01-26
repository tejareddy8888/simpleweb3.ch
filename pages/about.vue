<script setup>
const sendEmail = () => {
  window.location.href = 'mailto:saitejapottanigari@gmail.com';
};

const openLinkedIn = () => {
  window.open('https://www.linkedin.com/in/tejareddy8888/', '_blank');
};
</script>

<template>
  <section>
    <div class="md:w-3/4">
      <h1 class="text-2xl sm:text-3xl font-playfair font-normal">Hi, I am Saiteja Pottanigari</h1>
        <p class="text-lg py-2">
         With over seven years of work experience in multiple domains. I am fascinated about the evolution in
          fintech industry. I enjoy researching, challenging myself and putting theoretical concepts into practice.</p>
        <p class="text-lg py-2">
          I pursued my masters at the University of Zurich in Data Science which provided me a strong foundation in
          analytics and computational techniques. However, my interests have evolved towards decentralization and
          scalable
          distributed systems. This has led me to pursue a deeper understanding of blockchain technology, exploring its
          potential to revolutionize various industries through secure, transparent, and efficient solutions.</p>
        <p class="text-lg py-2">
          I am currently working on providing secure and seamless staking experience at Sygnum Bank. Meanwhile, also exploring regulated on-chain finance.</p>
        <p class="text-lg py-2">
          As the popular quote says “Change is the only constant”. I am always open to new challenges. I particularly
          enjoy collaborating on new projects that leverage my expertise in blockchain technology and finance knowledge.
          I
          am eager to contribute to innovative and transformative initiatives. Please feel free to DM me for any
          collaborative opportunities.</p>
      </div>
  </section>
  <section class="pt-30 sm:pt-40">
      <div class="bg-white dark:bg-gray-500 shadow-md rounded-lg p-6 mx-auto">
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
        <div class="flex flex-col items-center justify-center space-y-4">
          <CustomButton @click="sendEmail" class="w-full max-w-xs">
            <div class="flex items-center justify-center">
              <Icon name="mdi:email" class="mr-2" />
              Email Me
            </div>
          </CustomButton>
          <CustomButton 
            @click="openLinkedIn" 
            variant="secondary"
            class="w-full max-w-xs"
          >
            <div class="flex items-center justify-center">
              <Icon name="mdi:linkedin" class="mr-2" />
              Message on LinkedIn
            </div>
          </CustomButton>
        </div>
      </div>
    </section>
</template>