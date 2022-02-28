
import { ref } from "vue"
const useCounter = ( initialvalue  = 5) => {
    const counter = ref(initialvalue)

    // const incremented = () => {
    //     counter.value++
    // }
    // const decrement = () =>{
    //     counter.value--
    // }

    return{ 
        counter, 
        incremented:() => counter.value++, 
        decrement:() => counter.value--
    }
}

export default useCounter