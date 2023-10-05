<template>
    <Splide :options="{ rewind: true, arrows: false }" tag="section"
    class="rounded-3xl overflow-hidden">
        <SplideSlide v-for="slide in slides" class="relative hover:cursor-grab sm:h-[35vh] md:h-[40vh] active:cursor-grabbing">
            <img class="h-full w-full object-cover" :class="slide.position" :src="slide.img" alt="Fotografía del modelo">
            <component :is="slide.component" class="absolute my-auto bottom-0 sm:m-5 md:m-10 sm:w-[60%] lg:w-[22%] sm:text-2xl lg:text-4xl text-slate-100 uppercase drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]">
                {{ slide.quote }}
            </component>
        </SplideSlide>
    </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import slide1 from '../assets/img/slide1.webp'
import slide2 from '../assets/img/slide2.webp'
import slide3 from '../assets/img/slide3.webp'

const slides = [
    {
        quote: 'moda atemporal para expresar tu esencia',
        component: 'h1',
        img: slide1,
        position: 'object-top'
    },
    {
        quote: 'detalles que transforman tu estilo',
        component: 'span',
        img: slide2,
        position: 'object-center'
    },
    {
        quote: 'Refleja tu fuerza y estilo',
        component: 'span',
        img: slide3,
        position: 'object-center'
    }
]
</script>