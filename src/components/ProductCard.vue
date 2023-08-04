<template>
    <div class="flex flex-col gap-4 bg-linen rounded-3xl sm:p-3.5 md:p-5">
        <button class="sm:hidden md:block text-red-600 text-xl self-start"><HeartIcon/></button>
        <img class="sm:w-[85%] lg:w-[70%] mx-auto mix-blend-darken" src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg">
        <div class="flex flex-col gap-1 lg:gap-0">
            <div class="flex flex-col gap-1">
                <span class="font-semibold">Mens Casual Slim Fit</span>
                <span class="flex gap-1 sm:text-sm text-base items-center text-gray-500">
                    <StarIcon class="text-yellow-600"/>4.8 (14 views)
                </span>
            </div>
            <div class="flex sm:flex-col lg:flex-row items-end justify-between sm:gap-3 lg:gap-0">
                <span class="text-base font-semibold sm:self-start lg:self-end">$15.99</span>   
                <CartButton responsive="true" background="bg-[#5EAAA8]" color="text-white"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import HeartIcon from '~icons/mingcute/heart-line'
import StarIcon from '~icons/mingcute/star-fill'
import CartButton from './CartButton.vue';
</script>