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
                    <span>$ {{ store.cartTotal }}</span>
                </div>
                <button @click="goToPayment" :disabled="store.cart.length === 0" 
                class="w-full bg-payne-gray-500 enabled:hover:bg-payne-gray-400 text-white rounded-2xl p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Ir a pagar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import CartItem from './CartItem.vue'
import CloseIcon from '~icons/mingcute/close-line'
import { useCartStore } from '../stores/cart'

const store = useCartStore()
const router = useRouter()
const emit = defineEmits(['showCart'])

const goToPayment = () => {
    router.push({ name: 'payment'})
    emit('showCart')
}
</script>