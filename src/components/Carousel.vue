<template>
    <Splide :options="{ rewind: true, arrows: false }" tag="section"
    class="rounded-3xl overflow-hidden">
        <SplideSlide v-for="slide in slides" class="flex items-center hover:cursor-grab sm:h-[40%] lg:h-[40vh] active:cursor-grabbing">
            <img class="w-full object-cover" :src="slide.img">
            <h1 class="absolute sm:text-2xl lg:text-4xl lg:w-[22%] sm:mx-5 md:mx-10 text-slate-100 font-semibold uppercase drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]">
                {{ slide.quote }}
            </h1>
        </SplideSlide>
    </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const slides = [
    {
        quote: 'Moda atemporal para expresar tu esencia',
        component: 'h1',
        img: 'src/assets/img/slide1.webp',
    },
    {
        quote: 'Gooood',
        component: 'span',
        img: 'src/assets/img/slide2.webp',
    },
    {
        quote: 'Gooood2',
        component: 'span',
        img: 'src/assets/img/slide3.webp',
    }
]
</script>