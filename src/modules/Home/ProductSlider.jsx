import React from 'react';

import {ProductCart} from '../../components'

const ProductSlider = ({items, isLoaded}) => {
    return (
        <div className="slider">
            {items.map((el, index) => <ProductCart key={`ProductSlider${index}`} {...el}/>)}
        </div>
    )
}

export default ProductSlider