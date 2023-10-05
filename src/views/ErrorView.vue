<template>
    <main class="flex flex-col items-center justify-center px-8 gap-10 h-[80vh] text-eerie-black">
        <h1 class="text-8xl font-semibold">404</h1>
        <div class="flex flex-col items-center gap-2 text-center">
            <h2 class="font-medium text-xl ">Página no encontrada</h2>
            <p>Lo siento, no pudimos encontrar la página que estas buscando</p>
        </div>
        <RouterLink :to="{ name: 'home'}" class="py-3 px-5 rounded-xl bg-eerie-black hover:bg-neutral-700 text-white">
            Volver al Inicio
        </RouterLink>
    </main>
</template>