<template>
    <div class="flex bg-linen rounded-xl justify-between w-full">
        <input class="outline-none bg-transparent w-full indent-4" type="text" placeholder="Buscar">
        <button class="bg-khaki-400 hover:bg-khaki-500 transition-colors rounded-xl p-2" aria-label="Buscar"><SearchIcon/></button>
    </div>
</template>

<script setup>
import SearchIcon from '~icons/mingcute/search-2-line'
</script>