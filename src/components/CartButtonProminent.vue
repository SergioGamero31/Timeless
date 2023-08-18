<template>
    <button class="group flex items-center gap-8 p-1 indent-4 rounded-full text-white border border-white hover:bg-white
    hover:text-eerie-black uppercase transition-colors">
        Comprar 
        <span class="bg-white p-1.5 rounded-full group-hover:bg-eerie-black transition-colors">
            <CartIcon class="text-eerie-black group-hover:text-white transition-colors"/>
        </span>
    </button>
</template>

<script setup>
import CartIcon from '~icons/mingcute/shopping-cart-2-line'
</script>