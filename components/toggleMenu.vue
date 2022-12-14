<script setup lang="ts">
import { gsap } from 'gsap'
const prop = defineProps(['modalState'])
const emit = defineEmits(['handleMenu'])
const modalState = ref(prop)
const tl = gsap.timeline()
const menuState = ref(false)
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
watch(modalState, () => {
  if (!modalState.value)
    menuState.value = false
})
const handleModal = () => {
  menuState.value = !menuState.value
  emit('handleMenu', menuState.value)
}
// 唤起或关闭Modal
const closeModal = () => {
  menuState.value = false
  emit('handleMenu', menuState.value)
}
</script>

<template>
  <div class="bg-white absolute flex justify-between z-50 items-center h-16 w-full">
    <span class="ml-5 font-serif font-extrabold" @click="closeModal"><NuxtLink to="/">ekar</NuxtLink></span>
    <span class="relative h-5 w-7 mr-5" @click="handleModal">
      <span :class="[menuState ? openL1 : closeL1, line1]" />
      <span :class="[menuState ? openL2 : closeL2, line2]" />
      <span :class="[menuState ? openL3 : closeL3, line3]" />
    </span>
  </div>
</template>

<style>
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
</style>
