<script setup lang="ts">

</script>

<template>
  <div>
    <Suspense>
      <template #default>
        <asyncImg />
      </template>
      <template #fallback>
        <div text-center text-4xl italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style>
</style>
