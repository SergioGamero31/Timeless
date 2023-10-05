import { defineStore } from "pinia";

export const useOrderStore = defineStore('order', {
    state: ()=>{
        return{
            orderDetails:{
                orderNumber: '',
                orderDate: ''
            },
            paymentMethod:'',
            paymentInfo: {}
        }
    },
    actions: {
        generateOrderNumber(){
            const randomNumber = Math.floor(Math.random() * 1000000000)
            const paddedNumber = '000' + randomNumber.toString()
            this.orderDetails.orderNumber = paddedNumber.slice(-11)
        },
        setOrderDate(){
            const date = new Date()
            this.orderDetails.orderDate = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`
        },
        setPaymentMethod(method){
            this.paymentMethod = method
        },
        clearOrder(){
            this.paymentMethod = ''
            this.paymentInfo = {}
            this.orderDetails = {
                orderNumber: '',
                orderDate: '',
            }
        }
    }
})