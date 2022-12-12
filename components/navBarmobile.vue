<script setup>
import { gsap } from 'gsap'
const tl = gsap.timeline()
const showModal = ref(false)
const [openL1, openL2, openL3] = [ref('openL1'), ref('openL2'), ref('openL3')]
const [closeL1, closeL2, closeL3] = [ref('closeL1'), ref('closeL2'), ref('closeL3')]
const [line1, line2, line3] = [ref('line1'), ref('line2'), ref('line3')]
onMounted(() => {
  tl.from('#navbar-mobile', {
    autoAlpha: 0,
    translateY: -50,
    duration: 0.7,
    ease: 'power1',
  })
})

const handleModal = () => {
  showModal.value = !showModal.value
}
// 唤起或关闭Modal
const closeModal = () => {
  showModal.value = false
}
// Modal框不可以拖动
const touchMove = (event) => {
  event.preventDefault()
}
</script>

<template>
  <section id="navbar-mobile" class="absolute top-0 w-full md:hidden z-50">
    <div class="bg-white absolute flex justify-between z-50 items-center h-16 w-full">
      <span class="ml-5 font-serif font-extrabold" @click="closeModal"><NuxtLink to="/">ekar</NuxtLink></span>
      <span class="relative h-5 w-7 mr-5" @click="handleModal">
        <span :class="[showModal ? openL1 : closeL1, line1]" />
        <span :class="[showModal ? openL2 : closeL2, line2]" />
        <span :class="[showModal ? openL3 : closeL3, line3]" />
      </span>
    </div>
    <transition name="fade">
      <div v-show="showModal" ref="mobileModal" :style="{ height: newVh }" class="absolute top-0 w-full bg-white" @touchmove="touchMove">
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
/* icon initial */
.line1{
@apply h-0.5 bg-black w-full  absolute
}
.line2{
@apply h-0.5 bg-black w-full  absolute top-2
}
.line3{
@apply h-0.5 bg-black w-full  absolute
}
/* when modal close,nav-icon */
.openL1{
@apply transform rotate-45 top-2 ease-in-out duration-500 !important;
}
.openL2{
@apply translate-x-2 opacity-0 ease-in-out duration-300
}
.openL3{
@apply  transform  -rotate-45 top-2 ease-in-out duration-500 !important;
}
/* when modal open,nav-icon */
.closeL1{
@apply transform rotate-0 top-0 ease-in-out duration-500 !important;
}
.closeL2{
@apply  translate-x-0 opacity-100 ease-in-out duration-300 delay-200
}
.closeL3{
@apply  transform rotate-0 top-4 ease-in-out duration-500 !important;
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
