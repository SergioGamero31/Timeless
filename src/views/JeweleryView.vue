<template>
    <main class="sm:h-full lg:h-[85vh]">
    <section class="flex h-full">
      <ul class="grid sm:grid-cols-2 lg:grid-cols-6 auto-rows-fr gap-5">
        <li @mouseover="showImage=true" @mouseout="showImage=false" 
        class="relative sm:col-span-2 lg:col-span-4 row-span-2 rounded-3xl overflow-hidden animate-fade">
          <img class="h-full w-full object-cover" :src="showImage ? mainProduct.img[1]: mainProduct.img[0]" :alt="mainProduct.name">
          <div class="absolute flex justify-between w-full bottom-0 p-5 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
            <div class="flex flex-col text-white uppercase">
              <span class="text-3xl animate-fade-right animate-delay-700">{{ mainProduct.name }}</span>
              <span class="text-xl animate-fade-up animate-delay-700">${{ mainProduct.price }}</span>
            </div>
            <CartButtonProminent class="self-end animate-fade-left animate-delay-700"/>
          </div>
        </li>
        <ProductCard v-for="product in store.jewelery" :key="product.id" :product="product"/>
      </ul>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import CartButtonProminent from '../components/CartButtonProminent.vue';
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../stores/product'

const store = useProductStore()

onMounted(()=>{
    store.getAccessories()
})

let showImage = ref(false)

const mainProduct = {
  name: 'golden dreams necklace',
  price: '79.90',
  img: ['src/assets/img/golden-necklace.webp', 'src/assets/img/golden-necklace2.webp']
}
</script>