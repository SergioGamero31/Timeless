<template>
    <li class="flex flex-col justify-between bg-linen rounded-3xl sm:p-3.5 md:p-5 hover:cursor-pointer">
        <button class="sm:hidden md:block text-red-600 text-xl self-start" aria-label="Añadir a favoritos"><HeartIcon/></button>
        <img class="sm:h-40 md:h-56 object-contain m-auto mix-blend-multiply" :src=product.image :alt="product.title">
        <div class="flex flex-col sm:gap-1 lg:gap-0 mt-3">
            <div class="flex flex-col text-eerie-black">
                <span class="font-semibold truncate">{{ product.title }}</span>
                <span class="flex gap-1 sm:text-sm text-base items-center text-gray-500">
                    <StarIcon class="text-yellow-600"/> {{ product.rating.rate }} ({{ product.rating.count }})
                </span>
            </div>
            <div class="flex sm:flex-col lg:flex-row items-end justify-between sm:gap-3 lg:gap-0">
                <span class="text-base font-semibold sm:self-start lg:self-end text-eerie-black">${{ product.price }}</span>   
                <CartButton class="bg-verdigris-400 hover:bg-verdigris-500 text-white transition-colors" aria-label="Agregar al carrito" responsive="true"/>
            </div>
        </div>
    </li>
</template>

<script setup>
import HeartIcon from '~icons/mingcute/heart-line'
import StarIcon from '~icons/mingcute/star-fill'
import CartButton from './CartButton.vue'

const props = defineProps({
    product: {}
})
</script>