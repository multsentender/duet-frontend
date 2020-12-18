import React from 'react';
import { useSelector, useDispatch} from 'react-redux'

import {fetchData} from '../redux/actions/data'

const Store = () => {
    const dispatch = useDispatch()

    const [activeManuf, setActiveManuf] = React.useState(null)

    React.useEffect(() => {
        dispatch(fetchData(false, null, null))
    }, [activeManuf])

    const {filters, products, isLoaded} = useSelector(({data}) => data.filters)
    


    return (
        <div className="store">
            <div className="filters">
                <button className='filters-visible'>Фильтры</button>
            </div>
            <div className="products">
                
            </div>
        </div>
    )
}

export default Store