<template>
   <main>
    <section>
      <ul class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 sm:auto-rows-fr md:grid-rows-[40vh_20vh] lg:grid-rows-[40vh_40vh]">
        <li @mouseover="showImage=true" @mouseout="showImage=false" 
        class="relative sm:col-span-2 md:col-span-3 lg:col-span-4 row-span-2 rounded-3xl overflow-hidden animate-fade">
          <img class="h-full w-full object-cover" :src="showImage ? mainProduct.img[1]: mainProduct.img[0]" :alt="mainProduct.title">
          <div class="absolute flex justify-between w-full bottom-0 p-5 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
            <div class="flex flex-col text-white uppercase">
              <span class="text-3xl sm:w-[50%] md:w-full animate-fade-right animate-delay-700">{{ mainProduct.title }}</span>
              <span class="text-xl animate-fade-up animate-delay-700">${{ mainProduct.price }}</span>
            </div>
            <CartButtonProminent @click="addToCart(mainProduct)" class="self-end animate-fade-left animate-delay-700"/>
          </div>
        </li>
        <ProductCard v-for="product in store.womenProducts" :key="product.id" :product="product"/>
      </ul>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../stores/product'
import { useCartStore } from '../stores/cart'
import CartButtonProminent from '../components/CartButtonProminent.vue'

import img0 from '../assets/img/crop-sweatshirt.webp'
import img1 from '../assets/img/crop-sweatshirt2.webp'

const store = useProductStore()
const cartStore = useCartStore()

onMounted(()=>{
  store.getWomenProducts()
})

let showImage = ref(false)

const mainProduct = {
  id: 101,
  title: 'Crop Sweatshirt',
  price: '69.95',
  img: [img0, img1],
  type: 'main'
}

const addToCart = (product) => cartStore.addToCart(product)
</script>