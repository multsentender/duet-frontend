import {SETHOME, SETLOADED} from '../actions/favoriteProducts'

const initialState = {
    data: {
        favoriteItems: [],
        gallery: []
    },
    isLoaded: true
}

const favorite = (state = initialState, action) => {
    switch(action.type) {
        case SETHOME: 
            return{
                ...state,
                
                isLoaded: false 
            };
        case SETLOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        default: 
            return {...state}
    }
}

export default favorite