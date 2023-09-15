import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: ()=>{
        return {
            cart: [],
        }
    },
    actions: {
        addToCart(product){
            const existingCartItem = this.cart.find(item => item.product.id === product.id)
            if(existingCartItem) existingCartItem.quantity++
            else this.cart.push({ product, quantity: 1 })
        },
        removeFromCart(product){
            const productIndex = this.cart.findIndex(item => item.product.id === product.product.id)
            if(productIndex !== -1){
                this.cart.splice(productIndex, 1)
            }
        }
    }
})