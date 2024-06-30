<script setup>

const { data: posts } = await useAsyncData(
  `latest-posts`,
  () => {
    return queryContent('/blog').where({ _path: { $not: { $contains: 'tags' } } }).find()
  }
);
</script>

<template>
  <div class="gap-40">
    <section>
      <h1 class="text-3xl font-bold">Welcome to the SimpleWeb3</h1>
    </section>
    <section class="flex flex-col md:flex-row">
      <div class="md:w-3/4">
        <p class="text-lg py-2">
          I am an engineer with six years of work experience in multiple domains. I am fascinated about the evolution in
          fintech industry. I enjoy researching, challenging myself and putting theoretical concepts into practice.</p>
        <p class="text-lg py-2">
          I pursued my masters in the University of Zurich in Data Science which provided me a strong foundation in
          analytics and computational techniques. However, my interests have evolved towards decentralization and
          scalable
          distributed systems. This has led me to pursue a deeper understanding of blockchain technology, exploring its
          potential to revolutionize various industries through secure, transparent, and efficient solutions.</p>
        <p class="text-lg py-2">
          I am currently working on providing secure and seamless Staking and exploring regulated on-chain finance at
          Sygnum Bank.</p>
        <p class="text-lg py-2">
          As the popular quote says “Change is the only constant”. I am always open to new challenges. I particularly
          enjoy collaborating on new projects that leverage my expertise in blockchain technology and finance knowledge.
          I
          am eager to contribute to innovative and transformative initiatives. Please feel free to DM me for any
          collaborative opportunities.</p>
      </div>
      <img src="/green-krishna-snappa.png" alt="Logo" class="w-1/2 md:max-w-sm p-8 mx-auto" />
    </section>

    <section>
      <h2 class="text-3xl font-bold"> Latest Blog Post</h2>
      <section class="grid md:grid-cols-3 pt-8 gap-2">

        <Post :posts="posts" />
      </section>
    </section>
  </div>
</template>