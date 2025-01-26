<template>
  <div class="flex flex-col min-h-screen">
    <div class="fixed top-0 left-0 right-0 z-50">
      <SiteHeader />
    </div>
    <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full pt-24 sm:pt-40 lg:pt-48 pb-10 sm:pb-16 lg:pb-24">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

html.dark {
  color-scheme: dark;
}
</style>