<script setup lang="ts">
const navList = ref([
  {
    id: 1,
    to: 'Unnoticed',
    content: 'Unnoticed (Ongoing)',
  },
  {
    id: 2,
    to: 'Turpan',
    content: 'Turpan',
  },
  {
    id: 3,
    to: 'AnotherLandscape',
    content: 'Another Landscape (Ongoing)',
  },
  {
    id: 4,
    to: 'neverknowhowmuchiloveyou',
    content: 'Never Know how much i love you (Ongoing)',
  },
  {
    id: 5,
    to: 'About',
    content: 'About',
  },
])
</script>

<template>
  <section class=" w-80 hidden md:float-left md:h-screen md:flex md:flex-col">
    <h1 class="pl-10 pt-10 blur-0 hover:blur-lg duration-300 ease-in-out text-2xl mb-5 mt-5 font-serif">
      <NuxtLink to="/">
        Ekar
      </NuxtLink>
    </h1>
    <hr class="mb-5 w-10/12 mx-auto border-black">
    <div class="nav-pc-textbox" flex flex-col mt-5 pr-6 pl-6>
      <span v-for="navItem in navList" :key="navItem.id" class="flex font-sans text-sm m-2 hover:translate-x-1 text-gray-400 hover:text-gray-500 transition-all duration-500 ease-out">
        <div class="special-line">-</div>
        <NuxtLink active-class="text-black" :to="navItem.to">{{ navItem.content }}</NuxtLink>
      </span>
    </div>
    <footer class="text-xs font-sans xl:opacity-70 absolute bottom-8 left-8">
      Design and create by <a class="footer-link" href="">Ekar</a> in 2022
    </footer>
  </section>
</template>
