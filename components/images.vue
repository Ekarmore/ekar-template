<script setup>
onMounted(() => {
  imagesAnimate()
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
  <section id="img-wrapper" class="flex flex-wrap justify-center items-center" :style="{ height: fixVh }">
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

</style>
