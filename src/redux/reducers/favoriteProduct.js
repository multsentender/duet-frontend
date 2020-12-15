import {SETFAVORITE, SETLOADED} from '../actions/favoriteProducts'

const initialState = {
    favoriteItems: [],
    isLoaded: true
}

const favorite = (state = initialState, action) => {
    switch(action.type) {
        case SETFAVORITE: 
            return{
                ...state,
                favoriteItems: action.payload,
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