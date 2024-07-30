<script setup>

</script>

<template>
  <section id="home">
      <div class="fade-in">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4 green-text-first">Pierre De Yzaguirre</h1>
          <h2 class="text-2xl mb-4 green-text-second">Développeur Web Full Stack</h2>
          <p class="text-lg green-text-third">Passionné par la création d'applications web modernes et performantes</p>
        </div>
      </div>
  </section>
</template>

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