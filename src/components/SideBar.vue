<template>
    <div class="flex flex-col items-end p-5 ">
        <button @click="$emit('sideBar')" aria-label="Cerrar menu"><CloseIcon/></button>
        <nav class="self-start">
            <ul class="flex flex-col font-medium gap-4">
                <li @click="$emit('sideBar')"><RouterLink :to="{ name: 'home' }">Inicio</RouterLink></li>
                <li @click="$emit('sideBar')"><RouterLink :to="{ name: 'men' }">Hombre</RouterLink></li>
                <li @click="$emit('sideBar')"><RouterLink :to="{ name: 'women' }">Mujer</RouterLink></li>
                <li @click="$emit('sideBar')"><RouterLink :to="{ name: 'jewelery' }">Joyería</RouterLink></li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import CloseIcon from '~icons/mingcute/close-line'
</script>