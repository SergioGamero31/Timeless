<template>
    <Splide :options="{ rewind: true, arrows: false }" tag="section"
    class="rounded-3xl overflow-hidden">
        <SplideSlide v-for="slide in slides" class="flex items-center hover:cursor-grab sm:h-[40%] lg:h-[40vh] active:cursor-grabbing">
            <img class="w-full object-cover" :src="slide.img">
            <component :is="slide.component" class="absolute self-end sm:m-5 md:m-10 sm:w-[45%] lg:w-[22%] sm:text-2xl lg:text-4xl text-slate-100 uppercase drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]">
                {{ slide.quote }}
            </component>
        </SplideSlide>
    </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const slides = [
    {
        quote: 'moda atemporal para expresar tu esencia',
        component: 'h1',
        img: 'src/assets/img/slide1.webp',
    },
    {
        quote: 'detalles que transforman tu estilo',
        component: 'span',
        img: 'src/assets/img/slide2.webp',
    },
    {
        quote: 'Refleja tu fuerza y estilo',
        component: 'span',
        img: 'src/assets/img/slide3.webp',
    }
]
</script>