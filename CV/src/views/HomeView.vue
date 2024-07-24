<script setup>
import { ref } from 'vue'

// Cette variable isDarkMode devrait être partagée ou synchronisée avec l'état global,
// Par exemple, vous pouvez utiliser un store comme Vuex ou Pinia pour gérer le thème globalement.
const isDarkMode = ref(false)
// Assurez-vous d'appeler cette fonction pour appliquer le mode sombre ou clair
function toggleTheme() {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('darkMode', isDarkMode.value)
}
// Initialisation du mode sombre basé sur la valeur sauvegardée
const savedDarkMode = localStorage.getItem('darkMode')
if (savedDarkMode !== null) {
  isDarkMode.value = JSON.parse(savedDarkMode)
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}
</script>

<template>
  <main>
    <section id="accueil" class="min-h-screen flex items-center justify-center bg-green-50 dark:bg-green-900">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4 green-text-first">Pierre De Yzaguirre</h1>
        <h2 class="text-2xl mb-4 green-text-second">Développeur Web Full Stack</h2>
        <p class="text-lg green-text-third">Passionné par la création d'applications web modernes et performantes</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Ajoutez ici les styles supplémentaires si nécessaire */
</style>