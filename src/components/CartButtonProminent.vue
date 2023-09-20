<template>
    <button class="group flex items-center gap-8 sm:p-0 md:p-1 indent-4 rounded-full text-white sm:border-0 md:border border-white hover:bg-white
    hover:text-eerie-black transition-colors" aria-label="Ver producto">
        <span class="sm:hidden md:block uppercase">Agregar</span> 
        <span class="bg-white sm:p-2 md:p-1.5 rounded-full group-hover:bg-eerie-black transition-colors">
            <CartIcon class="text-eerie-black group-hover:text-white transition-colors"/>
        </span>
    </button>
</template>

<script setup>
import CartIcon from '~icons/mingcute/shopping-cart-2-line'
</script>