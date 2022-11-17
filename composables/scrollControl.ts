import { ref } from 'vue'
// import { useDebounceFn } from '@vueuse/core'
export function useXScroll() {
  // get TransverseWrapper
  const TransverseWrapper = ref<HTMLDivElement | null>(null)
  // wheel
  const wheel = (event: any) => {
    // debouncedFn(event)
    const disX = ref(event.deltaY)
    TransverseWrapper.value!.scrollLeft += disX.value * 2
  }
  return { TransverseWrapper, wheel }
}
