<template>
    <nav class="flex sm:gap-3 lg:gap-8 items-center text-eerie-black">
        <button @click="$emit('sideBar')" class="lg:hidden" aria-label="Abrir menu"><MenuIcon/></button>
        <RouterLink to="/" class="font-bold uppercase">Timeless</RouterLink>
        <ul class="sm:hidden lg:flex font-medium gap-8">
            <li><RouterLink :to="{ name: 'men' }">Hombre</RouterLink></li>
            <li><RouterLink :to="{ name: 'women' }">Mujer</RouterLink></li>
            <li><RouterLink :to="{ name: 'jewelery' }">Joyería</RouterLink></li>
        </ul>
    </nav>
</template>

<script setup>
import MenuIcon from '~icons/mingcute/menu-line'
</script>