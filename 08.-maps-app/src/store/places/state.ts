export interface PlacesState {
    isLoading:boolean;
    userLocation? :[number, number]//longitud y latititud
}

function state(): PlacesState {
    return {
        isLoading:true,
        userLocation:undefined
    }
}

export default state;