import { ref, readonly } from "vue";

export function useFetch(){
    const results = ref(null)
    const error = ref(null)

    const fetchData = async (url) => {
        try{
            const res = await fetch(url)
            const response = await res.json();
            results.value = response
        }catch(err){
            console.error(err)
            error.value = err
        }
    }
    return { fetchData, results: readonly(results), error }
}