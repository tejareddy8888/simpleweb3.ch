<script setup>
const query = gql`
  query getRepositories($limit: Int!){
  viewer {
    repositories(first:$limit, orderBy: {field: CREATED_AT, direction: DESC}){
      totalCount,
      nodes{
        id
        name
        createdAt
        description
        watchers{
          totalCount
        }
        stargazers{
          totalCount
        }
        forks{
          totalCount
        }
        url
      }
    }
  }
}
`
const variables = { limit: 4 }
const { data } = await useAsyncQuery(query, variables)
</script>


<template>
   <h1 class=" text-3xl my-8"> My Projects</h1>
   <p> Upcoming project about Bitcoin Fedimint usage </p>
   <section class="grid md:grid-cols-2 mt-8 gap-4">
      <!-- <Post :posts="data?.viewer.re"/> -->
      <div v-for="project in data?.viewer.repositories.nodes" :key="project.id"
         class="p-8 border-4 my-4 rounded-lg hover:bg-gray-200">
         <a :href="project.url" target="_blank"></a>
         <h2 class="text-2xl text-emerald-800 font-semibold mb-2 hover:underline">{{ project.name }}</h2>
         <p>
            {{ project.description }}
         </p>
         <div class="mt-4">
            <Icon name="mdi-light:star" size="1.1rem" class="text-indigo-300" /> stars: {{ project.stargazers.totalCount
            }}
            <Icon name="game-icons:skills" size="1.1rem" class="text-indigo-300" /> forks: {{ project.forks.totalCount
            }}
            <Icon name="game-icons:bleeding-eye" size="1.1rem" class="text-indigo-300" /> watchs: {{
               project.watchers.totalCount }}
         </div>
      </div>
   </section>
</template>