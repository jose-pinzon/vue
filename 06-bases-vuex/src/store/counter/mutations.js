export const increment =  (state) => {//TODO:el state ira por defecto
    state.count++
    state.lasMutaciones = "incrementado"
}
export const incrementBy =  (state, val) => {
    state.count += val
    state.lasMutaciones = "incrementado " + val
    state.NumRandom = val
}

export const aumentar10 =  (state, val) => {
    state.contador += val
}



export const setLoading  = (state, val) => {
    state.isload = val
}