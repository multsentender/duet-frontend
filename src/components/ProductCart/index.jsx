import React from 'react';
import PropTypes from 'prop-types'

const ProductCart = ({manuf, title, imageUrl, price, description, application, isStore}) => {
    return(
        <div className="product--item">
            <div className="product--item_image">
                <img src={imageUrl} alt={`${manuf} ${title}`}/>
            </div>
            <div className="product--item_info">
                <h5>{manuf}</h5>
                <h6>{title}</h6>
                <p>{description}</p>
                {application && (
                    <span>{application}</span>
                )}
                {isStore && (
                    <div className="product--item_btn">
                        <span>{price}</span>
                        <button>В корзину</button>
                    </div>
                )}
            </div>
        </div>
    )
}

ProductCart.propTypes = {
    manuf: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number,
    description: PropTypes.string,
    isStore: PropTypes.bool
}

ProductCart.defaultProp = {
    manuf: '',
    title: '',
    imageUrl: '',
    price: 0,
    isStore: false
}

export default ProductCart;