<template>
  <main class="mt-7">
    <Carousel/>
    <section>
      <h2 class="font-bold uppercase my-7 text-eerie-black">Mas comprados</h2>
      <ul class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 sm:gap-3 md:gap-5">
        <ProductCard v-for="product in store.topProducts" :key="product.id" :product="product" />
      </ul>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import Carousel from '../components/Carousel.vue';
import ProductCard from '../components/ProductCard.vue';
import { useProductStore } from '../stores/product';

const store = useProductStore()

onMounted(()=>{
  store.fetchProducts()
})

</script>
