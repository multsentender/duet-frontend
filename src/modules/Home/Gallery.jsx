import React from 'react';

const Gallery = () => {
    return(
        <div className="gallary_block">
            <div className="gallary_text container">
                <h4>Галерея</h4>
                <div></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima hic porro harum asperiores nulla molestias culpa. Perferendis, in harum.</p>
            </div>
            <div className="gallary container">
                <div className="p1">
                    <button>Все</button>
                    <button>Стрижки</button>
                    <button>Окрашивания</button>
                </div>
                <div className="p2 p pl"><img src="../../assets/img/gallery_item_1.png" alt="item1"/></div>
                <div className="p3 p pc"><img src="../../assets/img/gallery_item_1.png" alt="item1"/></div>
                <div className="p4 p pr"><img src="../../assets/img/gallery_item_1.png" alt="item1"/></div>
                <div className="p5 p pl"><img src="../../assets/img/gallery_item_1.png" alt="item1"/></div>
                <div className="p6 p pc"><img src="../../assets/img/gallery_item_1.png" alt="item1"/></div>
                <div className="p7 p pr"><img src="../../assets/img/gallery_item_1.png" alt="item1"/></div>
                <div className="p8">
                    <button>Instagram</button>
                </div>
            </div>
        </div>
    )
}

export default Gallery