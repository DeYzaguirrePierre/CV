<template>
  <section id="competences" class="container w-3/5">
    <div class="fade-in text-center">
      <h2 class="text-3xl font-bold mb-6 green-text-first">Mes Compétences Techniques</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="skill in Comp" :key="skill.id" class="mb-6 md:col-span-1">
          <div class="flex justify-between items-center mb-2">
            <div class="flex items-center green-text-second mx-auto">
              <div class="icon-3d" @mouseenter="startRotation" @mouseleave="stopRotation">
                <i :class="['skill-icon', skill.icon]" :ref="'icon' + skill.id"></i>
              </div>
              <span class="text-base font-medium">{{ skill.name }}</span>
            </div>
          </div>
          <div class="skill-bar-container">
            <div class="skill-bar-fill" :ref="'skillBar' + skill.id"></div>
            <span class="skill-bar-text green-text-third">{{ skill.level }}%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import axios from 'axios'

export default {
  data() {
    return {
      Comp: []
    }
  },
  async mounted() {
    await this.fetchData();
    this.$nextTick(() => {
      this.animateSkillBars();
    });
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('/SourceCompetences.json');
        this.Comp = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    animateSkillBars() {
      this.Comp.forEach(skill => {
        const skillBar = this.$refs['skillBar' + skill.id][0]; // Accéder au premier élément du tableau de références
        gsap.to(skillBar, {
          width: `${skill.level}%`,
          duration: 1.5,
          ease: 'power2.out'
        });
      });
    },
    startRotation(event) {
      event.target.querySelector('i').classList.add('rotating');
    },
    stopRotation(event) {
      event.target.querySelector('i').classList.remove('rotating');
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
.skill-icon {
  font-size: 2rem;
  margin-right: 1rem;
  transition: transform 0.3s ease-in-out;
}
.skill-icon:hover {
  transform: rotateY(180deg);
}
.icon-3d {
  perspective: 1000px;
  transform-style: preserve-3d;
  display: inline-block;
}
@keyframes rotate3d {
  0% { transform: rotate3d(0, 1, 0, 0deg); }
  100% { transform: rotate3d(0, 1, 0, 360deg); }
}
.rotating {
  animation: rotate3d 3s infinite linear;
}
.skill-bar-container {
  background-color: #f5f5f5; /* couleur neutral-100 en tailwind */
  border-radius: 9999px;
  height: 20px;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.dark .skill-bar-container {
  background-color: #1c1917; /* couleur neutral-900 en tailwind */
}
.skill-bar-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #14532d, #86efac);
  border-radius: 9999px;
  transition: width 1.5s ease-out;
}
.dark .skill-bar-fill {
  background: linear-gradient(90deg, #86efac, #14532d);
}

.skill-bar-text {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  font-size: 0.875rem;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
}
</style>
