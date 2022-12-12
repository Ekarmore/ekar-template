<script setup>
import { gsap } from 'gsap'
import toggleImg from '../components/ToggleImg.vue'
const tl = gsap.timeline()
onMounted(() => {
  tl.from('#img-wrapper', {
    autoAlpha: 0,
    filter: 'blur-90',
    translateY: 50,
    duration: 0.7,
  })
})
const imgShow = ref(true)
const item = ref(0)
const routerInfo = useRouter()
const dynamicList = computed(() => {
  if (routerInfo.currentRoute.value.fullPath === '/')
    return turpanList.value
  if (routerInfo.currentRoute.value.fullPath === '/Turpan')
    return turpanList.value
  if (routerInfo.currentRoute.value.fullPath === '/Unnoticed')
    return unnoticedList.value
  if (routerInfo.currentRoute.value.fullPath === '/AnotherLandscape')
    return anotherLandscapeList.value
  if (routerInfo.currentRoute.value.fullPath === '/NeverKnowhowmuchiloveyou')
    return neverKnowList.value
})
const pageCurrent = (cur) => {
  item.value = cur
}
const handleImgShow = (show) => {
  imgShow.value = show
}
const imgLoad = () => {
  setTimeout(() => {
    imgShow.value = true
  }, 50)
}
const nextImg = () => {
  imgShow.value = false
  setTimeout(() => {
    if (item.value < dynamicList.value.length - 1)
      item.value++
    else
      item.value = 0
  }, 200)
}
</script>

<template>
  <section id="img-wrapper" class="flex flex-wrap justify-center items-center" :style="{ height: newVh }">
    <div class="flex items-center">
      <transition name="imgAnimate">
        <img v-show="imgShow" class="max-h-md md:max-h-xl 2xl:max-h-2xl max-w-full p-2" :src="dynamicList[item].srcUrl" alt="" @click="nextImg" @load="imgLoad">
      </transition>
    </div>
    <toggleImg
      :info="dynamicList"
      @page-current="pageCurrent"
      @handle-img="handleImgShow"
    >
      <span font-serif font-xs pl-2>({{ dynamicList[item].id }} of {{ dynamicList.length }})</span>
    </toggleImg>
  </section>
</template>

<style>
.imgAnimate-enter-active,
.imgAnimate-leave-active {
  @apply opacity-100 translate-y-0 duration-700 ease-in-out;
}

.imgAnimate-enter-from,
.imgAnimate-leave-from {
  @apply opacity-0 translate-y-3  duration-700 ease-in-out;
}
</style>
