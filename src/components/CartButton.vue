<template>
    <button class="relative bg-khaki-400 hover:bg-khaki-500 transition-colors text-eerie-black rounded-xl p-2" aria-label="Ver carrito">
        <div v-if="store.isCartEmpty">
            <span class="absolute bottom-7 right-0 bg-brick-red-600 rounded-full h-2.5 w-2.5 animate-ping"></span>
            <span class="absolute bottom-7 right-0 bg-brick-red-600 rounded-full h-2.5 w-2.5"></span>
        </div>
        <CartIcon/>
    </button>   
</template>

<script setup>
import CartIcon from '~icons/mingcute/shopping-cart-2-line'
import { useCartStore } from '../stores/cart'

const store = useCartStore()
</script>