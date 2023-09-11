import { defineStore } from "pinia";
import { useFetch } from "../composables/useFetch";
import { CATEGORIES } from "../consts/categories";

const { fetchData, results, error } = useFetch()

export const useProductStore = defineStore('product', {
    state: ()=>{
        return {
            product: {},
            products: [],
            topProducts: [],
            menProducts: [],
            womenProducts: [],
            jewelery: []
        }
    },
    persist: {
        key: 'product-list',
        paths: ['products', 'topProducts', 'menProducts', 'womenProducts']
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
        async fetchSingleProduct(id){
            const url = `https://fakestoreapi.com/products/${id}`
            await fetchData(url)
            if(error.value) console.log(error.value)
            else this.product = results.value            
        },
        filterByCategory(category){
            return this.products.filter(product => product.category === category)
        },
        getTopProducts(){
            const topProducts = this.products.filter(product => product.category !== CATEGORIES.ELECTRONICS_CATEGORY)
            this.topProducts = topProducts
        },
        getMenProducts(){
            this.menProducts = this.filterByCategory(CATEGORIES.MEN_CATEGORY)
        },
        getWomenProducts(){
            this.womenProducts = this.filterByCategory(CATEGORIES.WOMEN_CATEGORY)
        },
        getAccessories(){
            this.jewelery = this.filterByCategory(CATEGORIES.JEWELERY_CATEGORY)
        },
        restoreProduct(){
            this.product = {}
        }
    }
})