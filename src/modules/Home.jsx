import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {fetchData} from '../redux/actions/data'
import {Gallery, ProductSlider, Services} from '../components'

import image from '../assets/img/about.png'

const Home = () => {
    const dispatch = useDispatch();
    
    const {filters, products, gallery, isLoaded} = useSelector(({data}) => data)

    const [activeType, setActiveType] = useState(null)
    const activeTypeHandler = (val) => {
        setActiveType(val)
    }

    useEffect(() => {
        dispatch(fetchData(true, activeType, null))
    }, [activeType])

    return (
        <div className="home">
            <main className="page">
                <div className="main-back" id='main'>
                    <div className="maintext">
                        <h2 className="test">Место создания прекрасного</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere amet error asperiores incidunt
                            soluta ut
                            iusto magnam veritatis. Velit numquam tempore ipsa quas minima architecto maxime quidem enim harum
                            reiciendis!</p>
                        <button><span>Контакты</span></button>
                    </div>
                </div>
                <div className="infopage container" id='about'>
                    <div className="infotext">
                        <h2>Кто мы?</h2>
                        <p>Карл Маркс (1844): «… коммунизм есть положительное выражение упразднения частной собственности; на первых порах он выступает как всеобщая частная собственность». Карл Маркс (1844): «… коммунизм есть положительное выражение упразднения частной собственности; на первых порах он выступает как всеобщая частная собственность».</p>
                    </div>
                    <img src={image} alt="masterpiece"/>
                </div>
                <Services/>
                <div className="present_block">
                    <div className="present">
                    <h4>Наша работа</h4>
                    <div className="present_line"></div>
                    <p className="present_text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem fugiat sequi rem hic mollitia, id maiores nisi quam ipsa nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button className="present_btn"></button>
                </div>
                </div>
                <Gallery active={activeType} setActive={activeTypeHandler} items={gallery} isLoaded={isLoaded}/>
                <ProductSlider items={products.items} manuf={filters.manufactured} isLoaded={isLoaded}/>
                <div className="text_block">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nihil vel tempore, suscipit, possimus voluptatem officia nam eos odit.</p>
                </div>
            </main>
        </div>
    )
}

export default Home