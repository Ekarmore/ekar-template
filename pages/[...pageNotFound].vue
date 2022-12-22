<!-- 404 notFound Page -->
<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const { pageNotFound } = route.params
useHead(
  {
    title: '404 not found | ekar',
  },
)
</script>

<template>
  <main id="NotFound-wrapper" class=" justify-center flex flex-col items-center" :style="{ height: fixVh }">
    <section class=" justify-center flex flex-col items-center">
      <span class="font-bold text-xl font-serif" p="t-3 b-3">
        Oops!
      </span>
      <div text="center" w="auto" class="flex flex-col">
        <span p="l2 r2 b2" class="font-serif ">
          Page:  <span class="italic font-bold border-b border-black">
            {{ pageNotFound[0] }}
          </span> was not found :/
        </span>
        <span class="text-sm font-serif">Please check the path</span>
      </div>
      <span p="t0.5 b0.5 l2 r2" m="t5" text="center white sm" class="bg-black rounded font-serif select-none" @click="router.back()">
        Back
      </span>
    </section>
  </main>
</template>
