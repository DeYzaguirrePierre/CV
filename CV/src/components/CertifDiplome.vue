<template>
    <div class="fade-in mt-12 text-center">
      <h3 class="text-3xl font-bold mb-6 green-text-first">Certifications</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="cert in certifications" :key="cert.name" class="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h4 class="text-lg font-semibold mb-2 green-text-second">{{ cert.name }}</h4>
          <p class="green-text-third mb-2">{{ cert.issuer }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Obtenue en {{ cert.year }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        certifications: []
      }
    },
    async mounted() {
      await this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('/SourceCertif.json');
          this.certifications = response.data;
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
  