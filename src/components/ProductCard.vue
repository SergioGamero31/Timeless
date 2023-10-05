<template>
    <li class=" bg-linen rounded-3xl">
        <RouterLink :to="{name: 'product', params:{ id: product.id }}"
        class="flex flex-col h-full justify-between sm:p-3.5 md:p-5 hover:cursor-pointer">
            <img class="w-40 sm:h-40 md:h-56 lg:h-[50%] object-contain m-auto mix-blend-multiply" :src=product.image :alt="product.title">
            <div class="flex flex-col sm:gap-1 lg:gap-0 mt-3">
                <div class="flex flex-col text-eerie-black">
                    <span class="font-semibold truncate">{{ product.title }}</span>
                    <span class="flex gap-1 sm:text-sm text-base items-center text-gray-500">
                        <StarIcon class="text-yellow-600"/> {{ product.rating.rate }} ({{ product.rating.count }})
                    </span>
                </div>
                <div class="flex sm:flex-col lg:flex-row items-end justify-between sm:gap-3 lg:gap-0">
                    <span class="text-base font-semibold sm:self-start lg:self-end text-eerie-black">${{ product.price }}</span>   
                    <button @click.stop.prevent="addToCart(product)"
                    class="sm:flex lg:block sm:items-center sm:justify-center sm:gap-2 lg:gap-0 sm:self-stretch lg:self-end p-2 rounded-xl text-white bg-payne-gray-500 hover:bg-payne-gray-400 transition-colors" 
                    aria-label="Agregar al carrito">
                        <span class="lg:hidden">Agregar</span>
                        <CartIcon/>
                    </button>
                </div>
            </div>
        </RouterLink>
    </li>
</template>

<script setup>
import HeartIcon from '~icons/mingcute/heart-line'
import StarIcon from '~icons/mingcute/star-fill'
import CartIcon from '~icons/mingcute/shopping-cart-2-line'
import { useCartStore } from '../stores/cart'

const store = useCartStore()

const addToCart = (product) => store.addToCart(product)

const props = defineProps({
    product: {}
})
</script>