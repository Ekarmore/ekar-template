<script setup lang="ts">
const List = ref([
  {
    id: 1,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/ad3faf323fd4485cb6fd1e2e42792e29?attname=T_1.webp',
  },
])
const asyncImg = ref<HTMLImageElement | null>(null)
const middle = ref(false)
const { isLoading } = useImage({ src: List.value[0].srcUrl })
// const handleLoad = () => {
//   middle.value = true
//   console.log('111')
// }

// onMounted(() => {
const handleImgLoad = () => {
  return new Promise ((resolve) => {
    const img = new Image()
    img.src = List.value[0].srcUrl
    img.onload = () => {
      resolve('11')
    }
  })
}
const ImgisLoad = await handleImgLoad()
// })
// const isLoad = await handleImgLoad()
// const imgLoad = await handleImgLoad(middle)
// const imgLoad = (imgState: any) => {
//   return new Promise((resolve) => {
//     watchEffect(() => {
//       if (!imgState.value)
//         resolve(imgState.value)
//     })
//   })
// }
// const isLoad = await imgLoad(isLoading)
</script>

<template>
  <img ref="asyncImg" mx-auto w-120 :src="List[0].srcUrl" alt="">
</template>
