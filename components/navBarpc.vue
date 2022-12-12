<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
const tl = gsap.timeline()
onMounted(() => {
  tl.from('.nav-pc', {
    autoAlpha: 0,
    translateX: -100,
    duration: 0.7,
    ease: 'power1',
  })
})
</script>

<template>
  <section class="nav-pc" w-82 hidden md:float-left md:h-screen md:flex md:flex-col>
    <h1 pl-14 text-xl pt-10 mt-15>
      <NuxtLink class="linkFont" to="/">
        ekar
      </NuxtLink>
    </h1>
    <div id="nav-pc-textbox" flex flex-col mt-15 pr-6 pl-12>
      <span v-for="navItem in navList" :key="navItem.item" flex text-xs font-serif m-2 hover:translate-x-1 text-gray-400 hover:text-gray-500 transition-all duration-500 ease-out>
        <NuxtLink active-class="active" :to="navItem.to">{{ navItem.name }}</NuxtLink>
      </span>
      <span class="flex text-xs font-serif mt-10 ml-2 hover:translate-x-1 text-gray-400 hover:text-gray-500 transition-all duration-500 ease-out">
        <NuxtLink active-class="active" to="about">About</NuxtLink>
      </span>
    </div>
    <footer text-xs font-serif op50 absolute bottom-8 left-12>
      Design and create by <a href="">ekar</a> in 2022
    </footer>
  </section>
</template>

<style>
.linkFont{
font-family:serif;
 font-weight: 900;
}
</style>
