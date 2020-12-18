import axios from 'axios'

export const SETDATA = 'SET_DATA'
export const SETLOADED = 'SET_LOADED'
export const GETMORE = 'GET_MORE_DATA'

export const setData = ({filters, gallery, products, count}) => {
    return{
        type: SETDATA,
        filters,
        gallery,
        products,
        count
    }
}

export const setLoaded = (payload) => {
    return {
        type: SETLOADED,
        payload
    }
}

export const fetchData = (favorite, type, manuf) => (dispatch) => {
    dispatch(setLoaded(false))
    
    axios.post(`http://localhost:3003/api/store`, {
        favorite,
        type,
        manuf
    }).then(({data}) => {
        dispatch(setData(data))})
}

export const getMoreData = (payload) => {
    return {
        type: GETMORE,
        payload
    }
}
