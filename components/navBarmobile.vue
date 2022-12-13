<script setup>
const showModal = ref(false)
const handleMenu = (isModalShow) => {
  showModal.value = isModalShow
}
const touchMove = (event) => {
  event.preventDefault()
}
const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <section id="navbar-mobile" class="absolute top-0 w-full md:hidden z-50">
    <toggleMenu :modal-state="showModal" @handle-menu="handleMenu" />
    <transition name="fade">
      <div v-show="showModal" ref="mobileModal" :style="{ height: fixVh }" class="absolute top-0 w-full bg-white" @touchmove="touchMove">
        <div class="flex flex-col items-center mt-24" @click="closeModal">
          <span v-for="navItem in navList" :key="navItem.item" class="flex text-sm font-serif m-2 text-gray-400">
            <NuxtLink active-class="active" :to="navItem.to">{{ navItem.name }}</NuxtLink>
          </span>
          <span class="flex text-xs font-serif  hover:translate-x-1 text-gray-400 hover:text-gray-500 transition-all duration-500 ease-out">
            <NuxtLink active-class="active" to="about">About</NuxtLink>
          </span>
          <Footer />
        </div>
      </div>
    </transition>
  </section>
</template>

<style>
.linkFont{
font-family:serif;
font-weight: 600
}
.fade-enter-active,
.fade-leave-active {
  @apply opacity-100 translate-y-0 blur-0 duration-500  rounded-none ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 blur-xl -translate-y-7 rounded-3xl duration-500 ease-in-out ;
}
</style>
