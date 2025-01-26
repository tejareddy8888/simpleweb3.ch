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
const variables = { limit: 6 }
const { data,error } = await useAsyncQuery(query, variables)
console.log(data)
console.log(error)
</script>

<template>
  <h1 class="text-3xl my-8">My Works</h1>
  <p>Upcoming project about Bitcoin Fedimint usage</p>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-4 px-4 sm:px-0">
     <div v-for="project in data?.viewer.repositories.nodes" :key="project.id"
        class="bg-white dark:bg-gray-600 p-4 sm:p-6 border-2 border-emerald-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-full mx-auto">
        <a :href="project.url" target="_blank" class="block">
           <h2 class="text-lg sm:text-xl text-emerald-700 dark:text-emerald-300 font-semibold mb-2 sm:mb-3 hover:underline">{{ project.name }}</h2>
           <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 h-16 sm:h-20 overflow-hidden">
              {{ project.description }}
           </p>
           <div class="flex justify-between items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <span class="flex items-center">
                 <Icon name="mdi-light:star" size="1rem" class="text-yellow-400 mr-1" /> 
                 {{ project.stargazers.totalCount }}
              </span>
              <span class="flex items-center">
                 <Icon name="game-icons:skills" size="1rem" class="text-blue-400 mr-1" /> 
                 {{ project.forks.totalCount }}
              </span>
              <span class="flex items-center">
                 <Icon name="game-icons:bleeding-eye" size="1rem" class="text-purple-400 mr-1" /> 
                 {{ project.watchers.totalCount }}
              </span>
           </div>
        </a>
     </div>
  </section>
</template>