<template>
    <swiper-container 
    :slides-per-view="1" :pagination="{ hideOnClick: false }" loop="true"
    autoplay-delay="3000" autoplay-disable-on-interaction="false"
    class="h-[40vh] rounded-3xl overflow-hidden hover:cursor-grab active:cursor-grabbing">
        <swiper-slide v-for="slide in slides" :key="slide.quote"
        class="flex items-center p-10 bg-cover" :style="carouselBackground(slide)">
            <h1 class="text-4xl leading-tight text-slate-100 font-semibold uppercase lg:w-[22%] select-none drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]">
                {{ slide.quote }}
            </h1>
        </swiper-slide>
    </swiper-container>
</template>

<script setup>
import { register } from 'swiper/element/bundle'

register()

const slides = [
    {
        quote: 'Moda atemporal para expresar tu esencia',
        imgUrl: 'src/assets/img/slide1.webp',
        position: '20%'
    },
    {
        quote: 'Gooood',
        imgUrl: 'src/assets/img/slide2.webp',
        position: '65%'
    },
    {
        quote: 'Gooood2',
        imgUrl: 'src/assets/img/slide3.webp',
        position: '40%'
    }
]

const carouselBackground = (slide)=>{
    return {
        backgroundImage: `url(${slide.imgUrl})`,
        backgroundPositionY: slide.position
    }
}
</script>