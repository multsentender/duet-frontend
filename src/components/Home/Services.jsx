import React from 'react';

const Services = () => {
    return (
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
    )
}

export default Services