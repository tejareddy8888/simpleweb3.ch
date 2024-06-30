<script setup>

const { data: posts } = await useAsyncData(
    `posts`,
    () => {
        return queryContent('/blog').where({ _path: { $not: { $contains: 'tags' } } }).find()
    }
);
</script>


<template>
    <h1 class=" text-3xl my-8"> Blog Posts</h1>
    <p> Upcoming blogs about Transaction Access List 2930 </p>
 <section class="grid md:grid-cols-2 mt-8 gap-4">
    <Post :posts="posts"/>
 </section>
</template>