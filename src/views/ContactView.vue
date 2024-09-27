<template>
    <div class="fade-in mt-12 text-center">
      <div class="mt-8 bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
        <h3 class="text-3xl font-bold mb-6 green-text-first">Contactez-moi</h3>
        <div class="space-y-4">
          <div class="flex items-center">
            <i class="fas fa-envelope green-text-second mr-3"></i>
            <a href="mailto:p.deyzaguirre@gmail.com@gmail.com" class="green-link">p.deyzaguirre@gmail.com@gmail.com</a>
          </div>
          <div class="flex items-center">
            <i class="fas fa-phone green-text-second mr-3"></i>
            <a href="tel:+33671916600" class="green-link">+33 6 71 91 66 00</a>
          </div>
          <div class="flex items-center">
            <i class="fab fa-linkedin green-text-second mr-3"></i>
            <a href="https://www.linkedin.com/in/p-de-yzaguirre/" target="_blank" class="green-link">linkedin.com/in/p-de-yzaguirre/</a>
          </div>
          <div class="flex items-center">
            <i class="fab fa-github green-text-second mr-3"></i>
            <a href="https://github.com/GamerAmnesia" target="_blank" class="green-link">github.com/p.deyzaguirre</a>
          </div>
          <div class="flex items-center">
            <i class="far fa-file green-text-second mr-3"></i>
            <a href="#cv" class="green-link">Mon CV en bas de page</a>
          </div>
        </div>
      </div>
    </div>
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