<template>
  <section class="nav-pc" w-80 hidden md:float-left md:h-screen md:flex md:flex-col>
    <h1 class="nav-pc-title">
      <NuxtLink to="/">
        Ekar
      </NuxtLink>
    </h1>
    <hr class="nav-hr">
    <div class="nav-pc-textbox" flex flex-col mt-5 pr-6 pl-6>
      <span class="nav-text-special">
        <div class="special-line">-</div>
        <NuxtLink active-class="active" to="Unnoticed">Unnoticed (Ongoing)</NuxtLink>
      </span>
      <span class="nav-text-special">
        <div class="special-line">-</div>
        <NuxtLink active-class="active" to="Turpan">Turpan</NuxtLink>
      </span>
      <span class="nav-text-special">
        <div class="special-line">-</div>
        <NuxtLink active-class="active" to="AnotherLandscape">Another Landscape (Ongoing)</NuxtLink>
      </span>
      <span class="nav-text-special">
        <div class="special-line">-</div><NuxtLink active-class="active" to="neverknowhowmuchiloveyou"> Never Know how much i love you (Ongoing)</NuxtLink>
      </span>
      <span class="nav-text-special">
        <div class="special-line">-</div>
        <NuxtLink active-class="active" to="about">About</NuxtLink>
      </span>
    </div>
    <footer class="nav-footer">
      Design and create by <a class="footer-link" href="">Ekar</a> in 2022
    </footer>
  </section>
</template>
