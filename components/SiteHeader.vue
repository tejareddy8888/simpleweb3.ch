<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute();

const navigation = computed( () =>[
  { name: 'Blog', href: '/blog', current: route.name.includes('blog') },
  { name: 'Works', href: '/works', current: route.name.includes('works') },
  { name: 'About', href: '/about', current: route.name === 'about' },
])
</script>

<template>
  <Disclosure as="nav" class="bg-teal-700 shadow-lg" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex-shrink-0 flex items-center">
            <img class="h-10 w-auto" src="/logo/mdi_cube-outline.svg" alt="SimpleWeb3" />
            <img class="h-4 w-auto" src="/logo/Simpleweb3.svg" alt="SimpleWeb3" />
          </NuxtLink>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <div class="flex space-x-4">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              :class="[
                item.current
                  ? 'bg-teal-900 text-white'
                  : 'text-teal-100 hover:bg-teal-600 hover:text-white',
                'px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out'
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-teal-100 hover:text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-teal-900 text-white'
              : 'text-teal-100 hover:bg-teal-600 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium'
          ]"
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>