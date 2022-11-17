<script setup lang="ts">
import { ref } from 'vue'
const showModal = ref(false)
const changeMenu = ref(false)
const [openL1, openL2, openL3] = [ref('openL1'), ref('openL2'), ref('openL3')]
const [closeL1, closeL2, closeL3] = [ref('closeL1'), ref('closeL2'), ref('closeL3')]

const newVh = ref('100vh')
onMounted(() => {
  newVh.value = `${window.innerHeight}px`
})

const handleModal = () => {
  showModal.value = !showModal.value
  changeMenu.value = !changeMenu.value
}
// toggle Modal
const closeModal = () => {
  showModal.value = false
  changeMenu.value = false
}
// Modal event preventDefault
const touchMove = (event: any) => {
  event.preventDefault()
}
</script>

<template>
  <section class="nav-mobile">
    <div class="nav-mobile-bar">
      <span class="nav-mobile-title" @click="closeModal"><NuxtLink to="/">Ekar</NuxtLink></span>
      <span class="nav-icon" @click="handleModal">
        <span :class="[changeMenu ? openL1 : closeL1]" />
        <span :class="[changeMenu ? openL2 : closeL2]" />
        <span :class="[changeMenu ? openL3 : closeL3]" />
      </span>
    </div>
    <transition name="fade">
      <div v-show="showModal" ref="mobileModal" :style="{ height: newVh }" class="nav-mobile-modal" @touchmove="touchMove">
        <div class="modal-text-container" @click="closeModal">
          <span class="modal-text">
            <NuxtLink active-class="active" to="Unnoticed">Unnoticed (Ongoing)</NuxtLink>
          </span>
          <span class="modal-text">
            <NuxtLink active-class="active" to="Turpan">Turpan</NuxtLink>
          </span>
          <span class="modal-text">
            <NuxtLink active-class="active" to="AnotherLandscape">Another Landscape (Ongoing)</NuxtLink>
          </span>
          <span class="modal-text">
            <NuxtLink active-class="active" to="NeverKnowHowMuchILoveYou">Never Know how much i love you (Ongoing)</NuxtLink>
          </span>
          <span class="modal-text">
            <NuxtLink active-class="active" to="about">About</NuxtLink>
          </span>
          <footer class="nav-mobile-footer">
            Design and create by <a href="">Ekar</a> in 2022
          </footer>
        </div>
      </div>
    </transition>
  </section>
</template>
