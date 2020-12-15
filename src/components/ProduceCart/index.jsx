import React from 'react';
import PropTypes from 'prop-types'

const ProductCart = ({manufacture, title, image, price, description, isStore}) => {
    <div className="product--item">
        <div className="product--item_image">
            <img src={image} alt={`${manufacture} ${title}`}/>
        </div>
        <div className="product--item_info">
            <h5>{manufacture}</h5>
            <p>{title}</p>
            <span>{description}</span>
        </div>
        {isStore && (
            <div className="product--item_store">
                <button>{price}</button>
            </div>
        )}
    </div>
}

ProductCart.propTypes = {
    manufacture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number,
    description: PropTypes.string,
    isStore: PropTypes.bool
}

ProductCart.defaultProp = {
    manufacture: '',
    title: '',
    image: '',
    price: 0
}

export default ProductCart