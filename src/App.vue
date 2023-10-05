<template>
  <Transition name="fade">
    <SideBar @sideBar="toogleSideBar" v-if="sideBar" 
    class="fixed h-screen w-2/5 z-10 bg-linen"/>
  </Transition>
  <div class="flex flex-col gap-7 sm:px-5 md:px-8 lg:px-24 pt-10 pb-5 w-full">
    <header class="flex justify-between">
      <NavBar @sideBar="toogleSideBar"/>
      <CartButton @click="toogleCart"/>
    </header>
    <RouterView @showReceipt="toogleReceipt"/>
  </div>
  <ShoppingCart @showCart="toogleCart" v-if="showCart"/>
  <PaymentReceipt @showReceipt="toogleReceipt" v-if="showReceipt"/>
</template>

<script setup>
import { ref, watch} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import CartButton from './components/CartButton.vue'
import SideBar from './components/SideBar.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import PaymentReceipt from './components/PaymentReceipt.vue'

const sideBar = ref(false)
const showCart = ref(false)
const showReceipt = ref(false)

const toogleSideBar = () => sideBar.value = !sideBar.value
const toogleCart = () => showCart.value = !showCart.value
const toogleReceipt = () => showReceipt.value = !showReceipt.value

watch(showCart, (newCart, oldCart)=>{
  if(newCart) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'auto'
})
</script>

<style>
html{
  background-color: #D8C4B6;
  scrollbar-gutter: stable;
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