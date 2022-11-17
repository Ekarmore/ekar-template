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
const showModal = ref(false)
const changeMenu = ref(false)
const [openL1, openL2, openL3] = [ref('openL1'), ref('openL2'), ref('openL3')]
const [closeL1, closeL2, closeL3] = [ref('closeL1'), ref('closeL2'), ref('closeL3')]

const newVh = ref('100vh')
onMounted(() => {
  newVh.value = `${window.innerHeight}px`
})

const handleModal = () => {
  showModal.value = !showModal.value
  changeMenu.value = !changeMenu.value
}
// toggle Modal
const closeModal = () => {
  showModal.value = false
  changeMenu.value = false
}
// Modal event preventDefault
const touchMove = (event: any) => {
  event.preventDefault()
}
</script>

<template>
  <section class="w-full md:hidden z-50">
    <div class="bg-white absolute flex justify-between z-50 items-center h-16 w-full">
      <span class="ml-5 text-xl font-serif" @click="closeModal"><NuxtLink to="/">Ekar</NuxtLink></span>
      <span class="relative h-5 w-7 mr-5" @click="handleModal">
        <span :class="[changeMenu ? openL1 : closeL1]" />
        <span :class="[changeMenu ? openL2 : closeL2]" />
        <span :class="[changeMenu ? openL3 : closeL3]" />
      </span>
    </div>
    <transition name="fade">
      <div v-show="showModal" ref="mobileModal" :style="{ height: newVh }" class="absolute top-0 bg-white w-full z-10 " @touchmove="touchMove">
        <div class="flex flex-col items-center mt-24" @click="closeModal">
          <span v-for="navItem in navList" :key="navItem.id" class="flex font-sans text-sm m-2 hover:translate-x-1 text-gray-400 hover:text-gray-500 transition-all duration-500 ease-out">
            <div class="special-line">-</div>
            <NuxtLink active-class="text-black" :to="navItem.to">{{ navItem.content }}</NuxtLink>
          </span>
          <span class="navTEST">TEST</span>
          <footer class="text-center text-xs text-gray-500 absolute bottom-5 font-mono">
            Design and create by <a href="">Ekar</a> in 2022
          </footer>
        </div>
      </div>
    </transition>
  </section>
</template>

<style>
.navTEST{
@apply text-4xl text-blue-900
}
/* when modal close,nav-icon */
.openL1{
@apply h-0.5 bg-black w-full  absolute transform rotate-45 top-2 ease-in-out duration-500 !important;
}
.openL2{
@apply h-0.5 bg-black w-full  top-2  absolute translate-x-2 opacity-0 ease-in-out duration-300
}
.openL3{
@apply h-0.5 bg-black w-full  absolute transform  -rotate-45 top-2 ease-in-out duration-500 !important;
}
/* when modal open,nav-icon */
.closeL1{
@apply h-0.5 bg-black w-full  absolute transform rotate-0 top-0 ease-in-out duration-500 !important;
}
.closeL2{
@apply h-0.5 bg-black w-full  absolute top-2 translate-x-0 opacity-100 ease-in-out duration-300 delay-200
}
.closeL3{
@apply h-0.5 bg-black w-full  absolute transform rotate-0 top-4 ease-in-out duration-500 !important;
}
</style>
