<template>
  <main class="mt-7">
    <Carousel/>
    <section>
      <h2 class="font-semibold uppercase my-7">Mas comprados</h2>
      <ul class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 sm:gap-3 md:gap-5">
        <ProductCard v-for="index in 10"/>
      </ul>
    </section>
  </main>
</template>

<script setup>
import Carousel from '../components/Carousel.vue';
import ProductCard from '../components/ProductCard.vue';
</script>
