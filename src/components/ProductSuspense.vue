<template>
    <section class="flex gap-5 justify-center">
        <ul class="sm:hidden lg:flex flex-col">
            <li class="w-32 h-36 bg-linen rounded-3xl overflow-hidden">
                <div class="h-full bg-platinum"/>
            </li>
        </ul>
        <div class="flex sm:flex-col md:flex-row md:h-96 w-full rounded-3xl overflow-hidden">
            <div class="sm:w-full md:w-[50%] bg-linen">
                <div class="sm:h-64 md:h-full w-full bg-platinum"/>
            </div>
            <div class="flex flex-col sm:w-full md:w-[50%] justify-between bg-linen sm:p-5 md:p-8 gap-5">
                <div class="flex flex-col gap-5">
                    <h1 class="h-7 bg-alto animate-pulse animate-duration-[600ms]"></h1>
                    <div class="flex gap-3 animate-pulse animate-duration-[600ms]">
                        <span class="bg-alto w-12 h-7"></span>
                        <span class="bg-alto w-12 h-7"></span>
                    </div>
                    <span class="self-start bg-alto w-14 h-7 animate-pulse animate-duration-[600ms]"></span>
                    <p class="bg-alto h-14 animate-pulse animate-duration-[600ms]"></p>
                </div>
                <button class="flex items-center justify-center gap-2 rounded-3xl px-4 py-3 text-white bg-alto cursor-not-allowed">Añadir al carrito<CartIcon/></button>
            </div>
        </div>
    </section>
</template>

<script setup>
import CartIcon from '~icons/mingcute/shopping-cart-2-line'
</script>