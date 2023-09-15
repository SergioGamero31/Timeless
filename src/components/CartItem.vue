<template>
    <li class="flex gap-4 items-center sm:p-3 lg:p-4 bg-dun rounded-3xl">
        <div class="w-1/4 lg:h-32 rounded-xl p-1 bg-white overflow-hidden">
            <img class="h-full m-auto object-contain" :src="item.product.image">
        </div>
        <div class="flex flex-col w-1/2">
            <span class="font-medium" :class="{'truncate' : item.product.title.length > 50}">{{ item.product.title }}</span>
            <span>$ {{ item.product.price }}</span>
        </div>
        <div class="flex gap-0.5 w-1/4 ">
            <button class="bg-eerie-black text-white px-2 py-0.5 rounded-l-2xl active:scale-90">-</button>
            <span class="bg-eerie-black text-white px-2 py-0.5">{{ item.quantity }}</span>
            <button class="bg-eerie-black text-white px-2 py-0.5 rounded-r-2xl active:scale-90">+</button>
        </div>
    </li>
</template>

<script setup>
const props = defineProps({
    item: {}
})
</script>