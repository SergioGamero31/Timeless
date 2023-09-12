<template>
  <Transition name="fade">
    <SideBar @sideBar="toogleSideBar" v-if="sideBar" 
    class="fixed h-screen w-2/5 z-10 bg-linen"/>
  </Transition>
  <div class="flex flex-col gap-7 sm:px-5 md:px-8 lg:px-24 pt-10 pb-5">
    <header class="flex justify-between">
      <NavBar @sideBar="toogleSideBar"/>
      <CartButton class="bg-khaki-400 hover:bg-khaki-500 transition-colors text-eerie-black" aria-label="Ver carrito"/>
    </header>
    <RouterView/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import CartButton from './components/CartButton.vue'
import SideBar from './components/SideBar.vue';

const sideBar = ref(false)

const toogleSideBar = () => {
  sideBar.value = !sideBar.value
}
</script>

<style>
html{
  background-color: #D8C4B6;
}
.fade-enter-active {
  animation: fadeInRight 0.2s ease-in;
}
.fade-leave-active {
  animation: fadeOutLeft 0.2s ease-in-out;
}

@keyframes fadeInRight {
  from {
    transform: translateX(-10rem);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes fadeOutLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-10rem);
  }
}
</style>