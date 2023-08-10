<template>
  <div class="bg-dun h-screen sm:px-5 md:px-8 lg:px-24 py-10 overflow-auto text-">
    <header class="flex justify-between">
      <NavBar/>
      <div class="flex w-1/4 gap-3">
        <SearchBar/>
        <CartButton class="bg-khaki-400 hover:bg-khaki-500 transition-colors text-eerie-black" aria-label="Ver carrito"/>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
import CartButton from './components/CartButton.vue'
</script>