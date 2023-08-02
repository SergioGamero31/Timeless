<template>
  <div class="bg-dun h-screen">
    <header class="flex justify-between">
      <NavBar/>
      <div class="flex w-1/4 gap-3">
        <SearchBar/>
        <CartButton/>
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