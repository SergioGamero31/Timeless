<template>
    <div @click="$emit('showReceipt')" class="fixed flex items-center justify-center z-10 h-screen w-screen bg-black bg-opacity-50 animate-fade">
        <Vue3Lottie v-if="isLoading" @click.stop :animation-data="LoaderJSON" :height="120" :width="120"/>
        <div v-else @click.stop class="flex flex-col gap-4 p-5 pb-16 rounded-t-xl text-eerie-black bg-linen divide-y divide-dun receipt">
            <div class="text-center">
                <Vue3Lottie :animation-data="ConfirmationJSON" :height="60" :width="60"/>
                <h2 class="text-xl font-bold">Pago confirmado!</h2>
            </div>
            <div class="flex flex-col items-center gap-5">
                <div class="mt-4 text-center">
                    <h3 class="text-gray-600">Monto Total</h3>
                    <span class="text-2xl font-bold">USD {{ total }}</span>
                </div>
                <div class="grid grid-cols-2 gap-3 w-full">
                    <div class="flex flex-col w-full border rounded-lg p-2 border-gray-500">
                        <span>Orden</span>
                        <span class="font-medium">{{ store.orderDetails.orderNumber }}</span>
                    </div>
                    <div class="flex flex-col w-full border rounded-lg p-2 border-gray-500">
                        <span>Fecha</span>
                        <span class="font-medium">{{ store.orderDetails.orderDate }}</span>
                    </div>
                    <div class="flex flex-col w-full border rounded-lg p-2 border-gray-500">
                        <span>Método de Pago</span>
                        <span class="font-medium capitalize">
                            {{ store.paymentMethod === 'card' ? 'Tarjeta de Crédito' : store.paymentMethod }}
                        </span>
                    </div>
                    <div class="flex flex-col w-full border rounded-lg p-2 border-gray-500">
                        <span>Remitente</span>
                        <span class="font-medium">Sergio Gamero</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import { useCartStore } from '../stores/cart'
import { useOrderStore } from '../stores/order'
import ConfirmationJSON from '../assets/animations/confirmation.json'
import LoaderJSON from '../assets/animations/loader.json'

const store = useOrderStore()
const cartStore = useCartStore()

let isLoading = ref(true)
let total = cartStore.cartTotal

onMounted(()=>{
    setTimeout(()=> isLoading.value = false ,2000)
    store.generateOrderNumber()
    store.setOrderDate()
})
</script>

<style scoped>
.receipt {
  --mask: radial-gradient(10px at bottom,#0000 97%,#000) 50% / 27px 100%;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}
</style>