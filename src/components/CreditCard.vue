<template>
    <div class="flex flex-col w-80 gap-9 p-5 rounded-xl bg-verdigris text-white">
        <VisaIcon class="self-end" width="48" height="16"/>
        <div class="flex flex-col gap-4">
            <div class="flex gap-4">
                <div v-for="number in cardNumber" :key="number" class="flex text-xl">
                    <span v-for="digit in number" :key="digit"
                    class="animate-flip-down animate-duration-150"
                    :style="`animation-delay: ${delayCounter++ * 100}ms`">{{ digit }}</span>
                </div>
            </div>
            <div class="flex w-full justify-between">
                <span class="self-end font-medium">Juan Perez</span>
                <div class="flex flex-col self-end">
                    <span class="text-xs">Vence</span>
                    <span class="font-medium">02/30</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import VisaIcon from '../components/icons/IconVisa.vue'

const cardNumber = ['1234', '5678', '9012', '3456']
let delayCounter = 2
</script>