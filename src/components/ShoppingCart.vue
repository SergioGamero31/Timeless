<template>
    <div>
        <div @click="$emit('showCart')" class="fixed left-0 z-10 h-full w-full bg-black bg-opacity-50 animate-fade"></div>
        <div class="fixed flex flex-col justify-between gap-10 right-0 z-20 h-screen sm:h-full sm:w-full md:w-1/2 lg:w-[30%] bg-linen pt-10 p-8">
            <div class="flex flex-col gap-5 overflow-y-auto">
                <div class="flex justify-between items-center">
                    <span class="text-xl font-medium">Carrito</span>
                    <button @click="$emit('showCart')" aria-label="Cerrar carrito"><CloseIcon/></button>
                </div>
                <ul class="flex flex-col gap-6 overflow-y-auto overflow-x-hidden">
                    <CartItem v-for="item in store.cart" :key="item.id" :item="item"/>
                </ul>
            </div>
            <div class="flex flex-col gap-5">
                <div class="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>$ {{ total }}</span>
                </div>
                <button class="w-full bg-payne-gray-500 hover:bg-payne-gray-400 text-white rounded-2xl p-3 transition-colors">Ir a pagar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import CartItem from './CartItem.vue'
import CloseIcon from '~icons/mingcute/close-line'
import { useCartStore } from '../stores/cart'

const store = useCartStore()

const total = computed(()=>{
    return store.cart.reduce((acc, item) =>{
        return acc + (item.product.price * item.quantity)
    },0).toFixed(2)
})
</script>