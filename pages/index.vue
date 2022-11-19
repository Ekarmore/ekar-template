<script setup lang="ts">
// async function timeout(ms: number) {
//   await new Promise((resolve) => {
//     setTimeout(resolve, ms)
//   })
// }

// async function asyncPrint(value: string, ms: number) {
//   await timeout(ms)
//   console.log(value)
// }

// asyncPrint('hello world', 4000)
</script>

<template>
  <div>
    <Suspense>
      <template #default>
        <imggg />
      </template>

      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style>
.one{
@apply text-6xl font-bold
}
</style>
