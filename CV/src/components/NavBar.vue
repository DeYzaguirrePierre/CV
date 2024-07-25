<template>
  <header class="fixed top-0 right-0 p-4 z-20 flex items-center">
    <button @click="toggleTheme" class="mr-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700">
      <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
    <div class="hamburger-wrapper">
      <div class="hamburger" :class="{ 'open': isNavOpen }" @click="toggleNav">
        <span class="green-draw"></span>
        <span class="green-draw"></span>
        <span class="green-draw"></span>
      </div>
    </div>
    <transition name="slide">
      <nav v-if="isNavOpen" class="fixed top-0 right-0 h-full w-64 green-bg-ext shadow-lg z-10 p-6">
        <ul class="space-y-4">
          <li>
            <RouterLink to="/" class="green-link cursor-pointer">Accueil</RouterLink>
          </li>
          <li>
            <RouterLink to="/competences" class="green-link cursor-pointer">Compétences</RouterLink>
          </li>
          <li><a @click="navigateTo('/experiences')" class="green-link cursor-pointer">Expériences</a></li>
          <li><a @click="navigateTo('/projets')" class="green-link cursor-pointer">Projets</a></li>
          <li><a @click="navigateTo('/contact')" class="green-link cursor-pointer">Contact</a></li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>

export default {
  data() {
    return {
      // Nav fermer de base & DarkMode desac de base
      isNavOpen: false,
      isDarkMode: false
    }
  },
  methods: {
    // Nav Souvre ou se ferme en fonction de son etat de base ( inverse )
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },
    // Applique le mode sombre ou clair ( inverse )
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      document.documentElement.classList.toggle('dark', this.isDarkMode)
      localStorage.setItem('darkMode', this.isDarkMode)
    }
  },
  // Initialisation du mode sombre basé sur la valeur sauvegardée
  mounted() {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode !== null) {
      this.isDarkMode = JSON.parse(savedDarkMode)
      document.documentElement.classList.toggle('dark', this.isDarkMode)
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.hamburger-wrapper {
  position: relative;
  z-index: 30;
  /* Ensure it is above the nav */
}

.hamburger {
  cursor: pointer;
  width: 30px;
  height: 25px;
  position: relative;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  border-radius: 3px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.hamburger span:nth-child(1) {
  top: 0px;
}

.hamburger span:nth-child(2) {
  top: 10px;
}

.hamburger span:nth-child(3) {
  top: 20px;
}

.hamburger.open span:nth-child(1) {
  top: 10px;
  transform: rotate(135deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.hamburger.open span:nth-child(3) {
  top: 10px;
  transform: rotate(-135deg);
}
</style>