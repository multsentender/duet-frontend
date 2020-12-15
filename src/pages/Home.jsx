import React, {useState, useEffect} from 'react';
import {Header, Footer, ProductSlider} from '../modules'

import image from '../assets/img/info.png'

const state = {
    items: [

    ],
    isLoaded: true
}

const Home = () => {
    const [style, setStyle] = useState(false)
    const ref = React.useRef()

    const HandleStyle = () => {
        if(ref.current.getBoundingClientRect().y <= -60) {
            setStyle(true)
        } else {
            setStyle(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', HandleStyle)
    }, [])

    return (
        <div className="home">
            <Header scroled={style}/>
            <main ref={ref} className="page">
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
                <div className="services-all" id="service">
                    <div className="services">
                        <div className="post-1 post">
                            <h3>Услуги</h3>
                        </div>
                        <div className="haircut man">
                            <h4>Мужские стрижки</h4>
                            <ul className="haircut_items">
                                <li><p>Канадка</p><span>150</span></li>
                                <li><p>Модельная</p><span>240</span></li>
                                <li><p>Креативная</p><span>270</span></li>
                                <li><p>Андеркат</p><span>300</span></li>
                                <li><p>Окантовка</p><span>70</span></li>
                                <li><p>Борода</p><span>100</span></li>
                            </ul>
                        </div>
                        <div className="haircut woman">
                            <h4>Женские стрижки</h4>
                            <ul className="haircut_items">
                                <li><p>"Если вам за 60" без фелировки</p><span>150</span></li>
                                <li><p>Модельная</p><span>270</span></li>
                                <li><p>Каскад</p><span>300-350</span></li>
                                <li><p>Каре</p><span>300-350</span></li>
                                <li><p>Челка</p><span>100</span></li>
                                <li><p>Кончики</p><span>200-250</span></li>
                                <li><p>Лечебная</p><span>от 300</span></li>
                                <li><p>Полировка</p><span>300-700</span></li>
                            </ul>
                        </div>
                        <div className="another_block">
                            <h4>Остальные услуги</h4>
                            <div className="another">
                                <ul className="another_items">
                                    <li><p>Уладка</p><span>от 350</span></li>
                                    <li><p>Мелирование</p><span>от 600</span></li>
                                    <li><p>Договременная укладка</p><span>от 600</span></li>
                                    <li><p>Осветление</p><span>от 600</span></li>
                                </ul>
                                <ul className="another_items">
                                    <li><p>Брови</p><span>от 350</span></li>
                                    <li><p>Долговременная укладка</p><span>от 600</span></li>
                                    <li><p>Маникюр</p><span>200</span></li>
                                    <li><p>Педикюр</p><span>150</span></li>
                                </ul>
                                <ul className="another_items">
                                    <li><p>Лечение волос</p><span>от 170</span></li>
                                    <li><p>Окрашивание своей краской</p><span>от 350</span></li>
                                    <li><p>Окрашивание Matrix</p><span>от 750</span></li>
                                    <li><p>Окрашивание Estel</p><span>от  600</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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
            </main>
            <ProductSlider {...state}/>
            <Footer/>
        </div>
    )
}

export default Home