<script setup lang="ts">
const { path } = useRoute();

const { data, pending, error, refresh } = await useAsyncData(
    `content-${path}`,
    () => {
        return queryContent().where({ _path: path }).findOne()
    }
);
</script>

<template>
    <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-7xl" />
    <section class="my-8">
        <a v-for="tag in data.tags" :key="tag"  class=" text-xs font-semibold inline-block py-1 px-2 rounded-lg text-gray-500 bg-green-400 uppercase last:mr-0 mr-4">
            <Icon name="mdi-light:tag" size="1rem" class="text-gray-100 mr-2"/> {{ tag }}
        </a>
    </section>
</template>