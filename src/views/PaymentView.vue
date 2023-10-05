<template>
    <main class="flex sm:flex-col lg:flex-row lg:my-5 sm:gap-5 lg:gap-10 text-eerie-black">
        <form @submit.prevent="validateForm" class="flex flex-col gap-5 basis-1/2 sm:order-2">
            <section class="flex flex-col gap-4">
                <div class="flex flex-col">
                    <h2 class="font-semibold text-lg">Método de Pago</h2>
                    <p class="text-gray-600">Todas las transacciones son seguras y están encriptadas.</p>
                    <span v-if="paymentMessage" class="font-medium text-brick-red-600 animate-shake">{{ paymentMessage }}</span>
                </div>
                <div class="flex flex-col p-5 divide-y divide-dun bg-linen rounded-xl">
                    <span class="flex flex-col p-2">
                        <label class="flex items-center gap-2 hover:cursor-pointer">
                            <input
                                name="method"
                                v-model="paymentMethod"
                                type="radio" 
                                value="paypal"
                                class="text-payne-gray-400 border-gray-300 focus:border-verdigris focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50"
                                required>
                                <PaypalIcon width="52" height="24"/>
                        </label>
                        <span v-if="paymentMethod === 'paypal'" class="ml-6 text-sm text-gray-600 animate-fade-down animate-duration-200 ">fakeemail@email.com</span>
                    </span>
                    <span class="flex flex-col p-2">
                        <label class="flex justify-between w-full font-medium hover:cursor-pointer">
                            <span class="flex items-center gap-2">
                                <input
                                    name="method"
                                    v-model="paymentMethod"
                                    type="radio" 
                                    value="card"
                                    class="text-payne-gray-400 border-gray-300 focus:border-verdigris focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50"
                                    >
                                    Tarjeta de crédito o débito
                            </span>
                            <div class="flex items-center gap-2">
                                <VisaIcon width="32" height="16" class="text-blue-900"/>
                                <MasterIcon width="32"/>
                            </div>
                        </label>
                        <div class="flex flex-col gap-4">
                            <CreditCard v-if="paymentMethod === 'card'" class="self-center mt-4 animate-fade-down animate-duration-200"/>
                            <div v-if="paymentMethod === 'card'" class="flex flex-col gap-2">
                                <span v-if="errorMessage" class="font-medium text-brick-red-600 animate-shake">{{ errorMessage }}</span>
                                <div class="flex flex-col gap-1">
                                    <label for="cardNumber" class="self-start uppercase font-medium text-sm text-zinc-500">Número de Tarjeta</label>
                                    <input
                                        id="cardNumber"
                                        v-model="paymentInfo.cardNumber"
                                        v-maska data-maska="####-####-####-####" 
                                        type="text"
                                        inputmode="numeric"
                                        class="w-full rounded-lg border-gray-300 focus:border-payne-gray-400 focus:border-2 focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50"
                                        placeholder="*** *** *** ***" autocomplete="off" required>
                                </div>
                                <div class="flex gap-2 justify-between">
                                    <div class="flex flex-col gap-1 w-full">
                                        <label for="cardHolder" class="self-start uppercase font-medium text-sm text-zinc-500">Titular</label>
                                        <input
                                            id="cardHolder"
                                            v-model="paymentInfo.cardHolder"
                                            type="text"
                                            class="w-full rounded-lg uppercase border-gray-300 focus:border-payne-gray-400 focus:border-2 focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50"
                                            minlength="10" 
                                            placeholder="Juan Perez"
                                            autocomplete="cc-name" required>
                                    </div>
                                    <div class="flex gap-2">
                                        <div class="flex flex-col gap-1">
                                            <label for="expiryDate" class="self-start uppercase font-medium text-sm text-zinc-500">Vence</label>
                                            <input
                                                id="expiryDate"
                                                v-model="paymentInfo.expiryDate"
                                                v-maska data-maska="##/##"
                                                type="text"
                                                inputmode="numeric"
                                                class="w-20 placeholder:text-center rounded-lg border-gray-300 focus:border-payne-gray-400 focus:border-2 focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50"
                                                placeholder="01/23" required>
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <label for="cvv" class="self-start uppercase font-medium text-sm text-zinc-500">CVV</label>
                                            <input
                                                id="cvv"
                                                v-model="paymentInfo.cvv"
                                                v-maska data-maska="###"
                                                type="number"
                                                class="w-20 placeholder:text-center rounded-lg border-gray-300 focus:border-payne-gray-400 focus:border-2 focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50"
                                                placeholder="012" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </section>
            <section class="flex flex-col gap-4">
                <h2 class="font-semibold text-lg">Dirección de envío</h2>
                <div class="flex flex-col p-5 rounded-xl bg-linen divide-y divide-dun">
                    <span class="flex flex-col p-2 gap-1">
                        <span v-if="shippingMessage" class="font-medium text-brick-red-600 animate-shake">{{ shippingMessage }}</span>
                        <label class="flex items-center gap-2 font-medium hover:cursor-pointer">
                            <input
                                name="address"
                                v-model="shippingAddress"
                                type="radio"
                                value="current" 
                                class="text-payne-gray-400 border-gray-300 focus:border-verdigris focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50" 
                                required>
                                Usar dirección actual
                        </label>
                        <div v-if="shippingAddress === 'current'" class="flex flex-col ml-6 text-sm text-gray-600 animate-fade-down animate-duration-200">
                            <span>Juan Perez</span>
                            <span>123 Calle Falsa</span>
                            <span>Ciudad, 12345</span>
                            <span>País</span>
                        </div>
                    </span>
                    <span>
                        <label class="flex items-center gap-2 p-2 font-medium hover:cursor-pointer">
                            <input
                                name="address"
                                v-model="shippingAddress"
                                type="radio"
                                value="other"
                                class="text-payne-gray-400 border-gray-300 focus:border-payne-gray-400 focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50" 
                                >
                                Usar una dirección diferente
                        </label>
                        <div v-if="shippingAddress === 'other'" class="flex flex-col gap-2 animate-fade-down animate-duration-200">
                            <input
                                v-model="shippingInfo.firstName"
                                type="text"
                                class="rounded-lg border-gray-300 focus:border-payne-gray-400 focus:border-2 focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50"
                                maxlength="30"
                                placeholder="Nombre" required>
                            <input
                                v-model="shippingInfo.lastName"
                                type="text"
                                class="rounded-lg border-gray-300 focus:border-payne-gray-400 focus:border-2 focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50"
                                maxlength="30"
                                placeholder="Apellido" required>
                            <input
                                v-model="shippingInfo.address1"
                                type="text"
                                class="rounded-lg border-gray-300 focus:border-payne-gray-400 focus:border-2 focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50"
                                maxlength="100"
                                placeholder="Dirección Línea 1" required>
                            <input
                                v-model="shippingInfo.address2"
                                type="text"
                                class="rounded-lg border-gray-300 focus:border-payne-gray-400 focus:border-2 focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50"
                                maxlength="100"
                                placeholder="Dirección Línea 2">
                            <input
                                v-model="shippingInfo.zipCode"
                                v-maska data-maska="#####"
                                type="number"
                                class="rounded-lg border-gray-300 focus:border-payne-gray-400 focus:border-2 focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50"
                                placeholder="Código Postal" required>
                            <input
                                v-model="shippingInfo.city"
                                type="text"
                                class="rounded-lg border-gray-300 focus:border-payne-gray-400 focus:border-2 focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50"
                                maxlength="60"
                                placeholder="Ciudad" required>
                            <input
                                v-model="shippingInfo.country"
                                type="text"
                                class="rounded-lg border-gray-300 focus:border-payne-gray-400 focus:border-2 focus:ring-0 hover:ring focus:ring-offset-0 hover:ring-indigo-200 hover:ring-opacity-50"
                                maxlength="60"
                                placeholder="País" required>
                        </div>
                    </span>
                </div>
            </section>
            <div class="flex items-center justify-between">
                <RouterLink class="flex items-center gap-1 font-medium text-payne-gray-500 hover:underline" :to="{ name: 'home' }">
                    <ArrowLeft/>Seguir comprando
                </RouterLink>
                <button type="submit" class="px-5 p-2.5 rounded-xl bg-payne-gray-500 hover:bg-payne-gray-400 text-white transition-colors">Completar Orden</button>
            </div>
        </form>
        <section class="flex flex-col gap-4 basis-1/2 sm:order-1 lg:order-2">
            <h2 class="font-semibold text-lg">Orden</h2>
            <div class="flex flex-col p-5 gap-5 rounded-xl bg-linen divide-y divide-dun">
                <ul v-if="store.cart.length > 0" class="flex flex-col gap-3">
                    <li v-for="item in store.cart" class="flex relative items-center gap-3 p-2 rounded-xl bg-dun">
                        <img :src="item.product.type ? item.product.img[0] : item.product.image" 
                        class="w-12 h-12 object-contain bg-white" :class="{'object-cover': item.product.type }"
                        :alt="item.product.title">
                        <div class="flex w-full justify-between truncate">
                            <span class="font-medium truncate"> {{ item.product.title }}</span>
                            <span>${{ store.calculateSubtotal(item) }}</span>
                        </div>
                        <span class="absolute w-4 h-4 right-0 top-0 -mr-1 -mt-1 rounded-full text-xs text-white bg-eerie-black text-center">{{ item.quantity }}</span>
                    </li>
                </ul>
                <div class="flex justify-between p-2 pb-0">
                    <span class="font-medium">Total</span>
                    <span class="font-medium">$ {{ store.cartTotal }}</span>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import { vMaska } from 'maska'
import CreditCard from '../components/CreditCard.vue'
import VisaIcon from '../components/icons/IconVisa.vue'
import MasterIcon from '../components/icons/IconMastercard.vue'
import PaypalIcon from '../components/icons/IconPaypal.vue'
import ArrowLeft from '~icons/mingcute/left-line'
import { useCartStore } from '../stores/cart'

const store = useCartStore()
const emit = defineEmits(['showReceipt'])

let paymentMethod = ref(null)
let shippingAddress = ref(null)

const paymentInfo = ref({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
})
const shippingInfo = ref({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    zipCode: '',
    city: '',
    country: ''
})

let errorMessage = ref('')
let paymentMessage = ref('')
let shippingMessage = ref('')

const sendOrder = () => {
    store.sendOrder()
    emit('showReceipt')
}

const validateForm = () => {
    errorMessage.value = ''
    paymentMessage.value = ''

    if(store.cart.length === 0){
        paymentMessage.value = "Debes tener al menos un producto en el carrito!"
    } else if(!paymentMethod.value || !shippingAddress.value){
        paymentMessage.value = "Selecciona un método de pago y una dirección de envío"
    } else if (paymentMethod.value === 'card'){
        validatePayment()
    } else if (shippingAddress.value === 'other'){
        validateShipping()
    } else{
        sendOrder()
    }
}
    
const validatePayment = () => {
    if (!paymentInfo.value.expiryDate || !paymentInfo.value.cardNumber || !paymentInfo.value.cardHolder || !paymentInfo.value.cvv){
        paymentMessage.value = "Los campos son obligatorios"
    } else if (!isValidExpiryDate(paymentInfo.value.expiryDate)){
        errorMessage.value = "Ingresa una fecha de vencimiento válida"
    } else{
        sendOrder()
    }
}

const validateShipping = () => {
    if (!shippingInfo.value.firstName || !shippingInfo.value.lastName || !shippingInfo.value.address1 || !shippingInfo.value.zipCode || !shippingInfo.value.city || !shippingInfo.value.country){
        shippingMessage.value = "Los campos son obligatorios"    
    } else{
        sendOrder()
    }
}

const isValidExpiryDate = (date) => {
    const parts = date.split('/')
    const month = parseInt(parts[0], 10)
    const year = parseInt(parts[1], 10)
    const currentYear = new Date().getFullYear() % 100

    if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < currentYear) {
        return false
    }
    return true
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>