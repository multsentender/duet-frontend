import axios from 'axios'

export const FETCHFAVORITE = 'FATCH_FAVORITE'
export const SETFAVORITE = 'SET_FAVORITE'
export const SETLOADED = 'SET_LOADED'

export const setFavorite = (payload) => {
    return{
        type: SETFAVORITE,
        payload
    }
}

export const setLoaded = (payload) => {
    return {
        type: SETLOADED,
        payload
    }
}

export const fetchFavorite = () => (dispacth) => {
    dispacth(setLoaded(true))

    axios.get('http://localhost:3003/api/').then(data => setFavorite(data))
}