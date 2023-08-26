import { defineStore } from "pinia";
import { useFetch } from "../composables/useFetch";
import { CATEGORIES } from "../consts/categories";

const { fetchData, results, error } = useFetch()

export const useProductStore = defineStore('product', {
    state: ()=>{
        return {
            products: [],
            topProducts: [],
            menProducts: [],
            womenProducts: []
        }
    },
    persist: {
        key: 'product-list'
    },
    actions: {
        async fetchProducts(){
            const url = 'https://fakestoreapi.com/products'
            await fetchData(url)
            if(error.value) console.log(error.value)
            else {
                this.products = results.value
                this.getTopProducts()
            }
        },
        getTopProducts(){
            const topProducts = this.products.filter(product => product.category !== CATEGORIES.ELECTRONICS_CATEGORY)
            this.topProducts = topProducts
        },
        getMenProducts(){
            const menProducts = this.products.filter(product => product.category === CATEGORIES.MEN_CATEGORY)
            this.menProducts = menProducts
        },
        getWomenProducts(){
            const womenProducts = this.products.filter(product => product.category === CATEGORIES.WOMEN_CATEGORY)
            this.womenProducts = womenProducts
        }
    }
})