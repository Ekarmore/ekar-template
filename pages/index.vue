<template>
  <div>
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <div class="one">
      TEST
    </div>
  </div>
</template>

<style>
.one{
@apply text-6xl font-bold
}
</style>
