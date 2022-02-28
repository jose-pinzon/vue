import getNumRandom from '@/helpers/getNumRandom'


export const incrementRamdom = async( {commit} ) => { //TODO: el context ira por defecto

    commit('setLoading',true)
    const randomInt = await getNumRandom()

    commit('incrementBy',randomInt)
    commit('setLoading',false)
}