<template>
    <section class="flex gap-5 justify-center">
        <ul class="sm:hidden lg:flex flex-col">
            <li class="w-32 bg-white rounded-3xl overflow-hidden p-4">
                <img :src="store.product.image" :alt="store.product.title">
            </li>
        </ul>
        <div class="flex sm:flex-col md:flex-row rounded-3xl overflow-hidden">
            <div class="flex md:w-[50%] sm:h-80 md:h-full items-center justify-center bg-white p-8">
                <img class="w-[60%] h-full object-contain" :src="store.product.image" :alt="store.product.title">
            </div>
            <div class="flex flex-col md:w-[50%] justify-between bg-linen sm:p-5 md:p-10 sm:gap-5 md:gap-7"> 
                <div class="flex flex-col gap-6">
                    <h1 class="sm:text-lg md:text-xl font-bold text-eerie-black">{{store.product.title}}</h1>
                    <div class="flex gap-3">
                        <span class="flex items-center gap-1 px-2 py-1 rounded-lg bg-tan text-coyote "><StarIcon/>{{store.product.rating.rate}}</span>
                        <span class="flex items-center gap-1 px-2 py-1 rounded-lg bg-brick-red-300 text-brick-red-700 "><HeartIcon/>{{store.product.rating.count}}</span>
                    </div>
                    <span class="sm:text-lg md:text-xl font-bold text-eerie-black">${{ store.product.price }}</span>
                    <p class=" text-onyx">{{ truncatedDesc }}
                        <button @click="toggleReadMore" class="text-cyan-700 font-medium hover:underline">{{ readMoreButton }}</button>
                    </p>
                </div>
                <button class="flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-white bg-payne-gray-500 hover:bg-payne-gray-400 transition-colors">Añadir al carrito<CartIcon/></button>
            </div>
        </div>
    </section>    
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '../stores/product'
import StarIcon from '~icons/mingcute/star-fill'
import HeartIcon from '~icons/mingcute/heart-fill'
import CartIcon from '~icons/mingcute/shopping-cart-2-line'

const store = useProductStore()
const router = useRouter()
const props = defineProps({ productId: String })

let isExpanded = ref(false)
const productDescription = computed(()=> store.product.description)
await store.fetchSingleProduct(props.productId)

watch(()=> router.currentRoute.value.params.id, async (newId)=>{
    await store.fetchSingleProduct(newId)
    isExpanded.value = false
})

const truncatedDesc = computed(() => {
    if(isExpanded.value) return productDescription.value
    else return productDescription.value.slice(0, 120)
})

const readMoreButton = computed(()=> isExpanded.value ? "Mostrar menos" : "Mostrar más")

const toggleReadMore = () => {
    isExpanded.value = !isExpanded.value
}
</script>