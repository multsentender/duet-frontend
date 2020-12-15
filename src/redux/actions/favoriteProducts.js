import axios from 'axios'

export const FETCHFAVORITE = 'FATCH_FAVORITE'
export const SETHOME = 'SET_HOME'
export const SETLOADED = 'SET_LOADED'

export const setFavorite = (payload) => {
    return{
        type: SETHOME,
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
    dispacth(setLoaded(false))

    axios.get('http://localhost:3003/api/').then(data => setFavorite(data))
}