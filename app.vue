<script setup>
useHead({
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/Ekar.jpg',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  @apply blur-0 opacity-100 translate-y-0 duration-700 ease-in-out;
}
.page-enter-from,
.page-leave-from {
  @apply blur-lg opacity-0 translate-y-5 duration-700 ease-in-out;
}
html, body , #__nuxt{
  margin: 0;
  padding: 0;
}
</style>
