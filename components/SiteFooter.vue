<template>
  <footer class="bg-emerald-500">
    <section class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-3 text-gray-300 flex flex-row">
      <p class="flex-1">&copy; Simple Web3 2023. All Rights Reserved</p>
      <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icon" size="1.5rem" class="text-gray-300" />
        </a>
      </div>
    </section>
  </footer>
</template>

<script setup>
const links = [
  { name: 'GitHub', href: 'https://github.com/tejareddy8888', icon: 'entypo-social:github' },
  { name: 'Twitter', href: 'https://twitter.com/0xteja', icon: 'entypo-social:twitter' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tejareddy8888/', icon: 'entypo-social:linkedin-with-circle' },
  { name: 'Youtube', href: 'https://www.youtube.com/channel/UCQxJ6lweyj3q3fnuBaKxqvw', icon: 'entypo-social:youtube' }
]
</script>