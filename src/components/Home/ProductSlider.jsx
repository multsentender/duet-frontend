import React from 'react';
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import ContentLoader from "react-content-loader"
import {Link} from 'react-router-dom'

import {ProductCart} from '..'


const ProductSlider = ({items, manuf, isLoaded}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }

    const searchTitleManuf = (id) => {
        const obj = manuf.find(el => el._id === id)
        return obj.title
    }
    return (
        <div id="products" className="slider">
            <div className="slider_info">
                <h4>Наша продукция</h4>
            </div> 
            <Slider id="products" className="slider_block" {...settings}>
                {isLoaded ? 
                    items.map((el, index) => <ProductCart key={el._id} manuf={searchTitleManuf(el.manufacture)} {...el}/>) : 
                    Array(6).fill(null).map((_, index) => {
                        return (
                            <ContentLoader 
                                speed={2}
                                width={700}
                                height={600}
                                viewBox="0 0 700 600"
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                                key={`loadingProduct_${index}`}
                            >
                                <rect x="3" y="119" rx="5" ry="5" width="230" height="230" /> 
                                <rect x="255" y="130" rx="5" ry="5" width="130" height="22" /> 
                                <rect x="255" y="211" rx="5" ry="5" width="200" height="14" /> 
                                <rect x="255" y="236" rx="5" ry="5" width="200" height="14" /> 
                                <rect x="255" y="261" rx="5" ry="5" width="200" height="14" /> 
                                <rect x="255" y="167" rx="5" ry="5" width="184" height="28" /> 
                                <rect x="255" y="293" rx="5" ry="5" width="85" height="45" /> 
                                <rect x="354" y="287" rx="25" ry="25" width="102" height="55" />
                            </ContentLoader>
                        )
                    })
                }
            </Slider>
            <div className="slider_btn">
                <Link to="/store">
                    <span>Магазин</span>
                </Link>
            </div>
        </div>
    )
}

ProductSlider.propTypes = {
    items: PropTypes.array,
    isLoaded: PropTypes.bool
}

ProductSlider.defaultProp = {
    items: [],
    isLoaded: false
}

export default ProductSlider
