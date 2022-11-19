<script setup lang="ts">
const List = ref([
  {
    id: 1,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/ad3faf323fd4485cb6fd1e2e42792e29?attname=T_1.webp',
  }, {
    id: 2,
    srcUrl: 'https://s2.vika.cn/space/2022/10/27/ad3faf323fd4485cb6fd1e2e42792e29?attname=T_1.webp',
  },
])
const imgss = ref<HTMLImageElement | null>(null)

const { isLoading } = useImage({ src: List.value[0].srcUrl })
const imgLoad = (imgState: any) => {
  return new Promise((resolve) => {
    watchEffect(() => {
      if (!imgState.value)
        resolve(imgState.value)
    })
  })
}
const LoadingS = await imgLoad(isLoading)
</script>

<template>
  <!-- <img ref="imgss" w-120 :src="List[0].srcUrl" alt=""> -->
  <!-- <div>{{ NNum }}</div> -->
  <div text-4xl text-center>
    IMG
  </div>
</template>
