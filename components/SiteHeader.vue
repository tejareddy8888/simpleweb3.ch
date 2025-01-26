<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute();

const navigation = [
  { name: 'Home', href: '/', current: route.name === 'index' },
  { name: 'Blog', href: '/blog', current: route.name.includes('blog') },
  { name: 'Works', href: '/works', current: route.name.includes('works') },
  { name: 'About', href: '/about', current: route.name === 'about' },
]
</script>

<template>
  <Disclosure as="nav" class="bg-teal-700" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-8 lg:px-10">
      <div class="relative flex h-12 items-center justify-between">
        <div class="flex flex-3 justify-center sm:items-stretch sm:justify-center">
          <div class="relative flex items-center sm:hidden">
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-shrink-0 items-center place-items-center">
            <img class="h-12 w-auto" src="/logo/mdi_cube-outline.svg" alt="SimpleWeb3" />
          </div>
          <div class="flex flex-shrink-0 items-center place-items-center">
            <img class="h-4 w-auto" src="/logo/Simpleweb3.svg" alt="SimpleWeb3" />
          </div>

          <div class="hidden place-items-center sm:ml-10 sm:block">
            <div class="flex place-items-center px-12 space-x-12 ">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-3 text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-3 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-3 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>