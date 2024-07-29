<template>
    <main class="container mx-auto mt-12 p-4">
      <div class="fade-in text-center">
        <h2 class="text-3xl font-bold mb-6 green-text-first">Mes Projets</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="projet in projets" :key="projet.id" class="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden project-card">
            <img :src="projet.image" :alt="projet.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2 green-text-second">{{ projet.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ projet.description }}</p>
              <div class="flex flex-wrap mb-4">
                <span v-for="tech in projet.technologies" :key="tech" class="bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-200 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">{{ tech }}</span>
              </div>
              <div class="flex justify-between items-center">
                <a :href="projet.github" target="_blank" class="green-text-third flex items-center">
                  <i class="fab fa-github mr-2"></i> GitHub
                </a>
                <a :href="projet.demo" target="_blank" class="green-btn font-bold py-2 px-4 rounded transition duration-300">
                  Visualiser
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        projets: []
      }
    },
    async mounted() {
      await this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('/SourceProjets.json');
          this.projets = response.data;
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  [v-cloak] { display: none; }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .fade-in {
    animation: fadeIn 1s ease-out;
  }
  
  </style>
  