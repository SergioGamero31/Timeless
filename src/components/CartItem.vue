<template>
    <li class="flex gap-4 items-center sm:p-3 lg:p-4 bg-dun rounded-3xl">
        <img class="w-1/5 lg:h-32 object-contain rounded-lg bg-white" :class="{'object-cover' : mainProduct}"
        :src="mainProduct ? item.product.img[0] : item.product.image" :alt="item.product.title">
        <div class="flex flex-col flex-grow gap-1" :class="{'sm:truncate' : item.product.title.length > 50}">
            <span class="font-medium lg:whitespace-normal" :class="{'sm:truncate' : item.product.title.length > 50}">{{ item.product.title }}</span>
            <span>$ {{ subtotal }}</span>
        </div>
        <div class="flex gap-0.5 flex-shrink-0">
            <button @click="reduceQuantity(item)" class="bg-eerie-black text-white px-2 py-0.5 rounded-l-2xl active:scale-90">-</button>
            <span class="bg-eerie-black text-white px-2 py-0.5">{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)" class="bg-eerie-black text-white px-2 py-0.5 rounded-r-2xl active:scale-90">+</button>
        </div>
    </li>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'

const store = useCartStore()
const props = defineProps({
    item: {}
})

const mainProduct = computed(()=> props.item.product.type === 'main')

const increaseQuantity = (item) => item.quantity ++
const reduceQuantity = (item) => {
    if(item.quantity > 0) item.quantity --
    if(item.quantity == 0) store.removeFromCart(item)
}
const subtotal = computed(()=>{
   return (props.item.quantity * props.item.product.price).toFixed(2)
})
</script>