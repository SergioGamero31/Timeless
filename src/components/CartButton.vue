<template>
    <button class="sm:flex lg:block sm:items-center sm:justify-center sm:gap-2 lg:gap-0 sm:self-stretch
        lg:self-end rounded-xl p-2">
        <span v-if="responsive" class="lg:hidden">Agregar</span>
        <CartIcon/>
    </button>   
</template>

<script setup>
import CartIcon from '~icons/mingcute/shopping-cart-2-line'

const props = defineProps({
    responsive: String
})
</script>