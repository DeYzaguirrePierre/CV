<template>
  <header>
    <NavBar />
  </header>
  <main id="code-background" class="min-h-screen flex items-center justify-center green-bg">
    <RouterView />
  </main>
  <footer>
    <FooterCV />
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import FooterCV from '@/components/FooterCV.vue'
import gsap from 'gsap'

const codeSnippets = ref([])

async function fetchData() {
  try {
    const response = await axios.get('/BackGroundText.json')
    codeSnippets.value = response.data
    createCodeBackground()
  } catch (error) {
    console.error(error)
  }
}

// Fonction du background anim
function createCodeBackground() {
  const codeBackground = document.getElementById('code-background')

  for (let i = 0; i < 50; i++) {
    const codeElement = document.createElement('div')
    codeElement.textContent = codeSnippets.value[Math.floor(Math.random() * codeSnippets.value.length)]
    codeElement.style.position = 'absolute'
    codeElement.style.left = `${Math.random() * 100}%`
    codeElement.style.top = `${Math.random() * 100}%`
    codeElement.style.transform = `rotate(${Math.random() * 360}deg)`
    codeBackground.appendChild(codeElement)

    gsap.to(codeElement, {
      y: `${Math.random() * 200 - 100}%`,
      x: `${Math.random() * 200 - 100}%`,
      rotation: `${Math.random() * 720 - 360}`,
      duration: 20 + Math.random() * 10,
      repeat: -1,
      yoyo: true,
      ease: 'none'
    })
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>

</style>
