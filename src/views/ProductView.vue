<template>
    <main class="flex flex-col lg:w-[80%] xl:w-[60%] mx-auto sm:mt-0 lg:mt-7">
        <button @click="goBack" class="self-start rounded-xl p-2 mb-5 bg-khaki-400 hover:bg-khaki-500 transition-colors">
            <BackIcon/>
        </button>
        <Suspense>
            <template #default>
                <ProductDetail :productId="product"/>
            </template>
            <template #fallback>
                <ProductSuspense/>
            </template>
        </Suspense>
        <h2 class="my-12 font-medium uppercase">Te podría interesar</h2>
        <section>
            <ul class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <ProductCard v-for="product in store.menProducts" :key="product.id" :product="product"/>
            </ul>
        </section>
    </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ProductDetail from '../components/ProductDetail.vue'
import ProductSuspense from '../components/ProductSuspense.vue'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../stores/product'
import BackIcon from '~icons/mingcute/arrow-left-line'

const store = useProductStore()
const router = useRouter()
const product = router.currentRoute.value.params.id

const goBack = () => router.go(-1)
</script>