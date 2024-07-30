import React from 'react';
const maininfo = [{
    id: 1,
    mainText: "Мирзиёев рассказал, зачем было построено Сардобинское водохранилище.",
    imageUrl: "./imges/prezident@2x.jpg",
    date: "15:20 / 16:05:2020",
},
{
    id: 2,
    mainText: "Карантин в Узбекистане продлен до 1 июня",
    imageUrl: "./imges/karantin.jpg",
    date: "15:20 / 16:05:2020",
},
{
    id: 1,
    mainText: "Обмелевшая Сардоба: стихия или человеческий фактор?",
    imageUrl: "./imges/sardoba.jpg",
    date: "15:20 / 16:05:2020",
},
{
    id: 1,
    mainText: "Следствие проверяет четыре версии прорыва Сардобинской плотины",
    imageUrl: "./imges/prokuror.jpg",
    date: "15:20 / 16:05:2020",
},
{
    id: 1,
    mainText: "Выявлено еще 7 случаев коронавируса",
    imageUrl: "./imges/tez-yordam.jpg",
    date: "15:20 / 16:05:2020",
},
{
    id: 1,
    mainText: "Итоги второго месяца карантина",
    imageUrl: "./imges/stop-karantin.jpg",
    date: "15:20 / 16:05:2020",
},
];

const MainInfo = () => {
    return (
        <div className='Main_allStyle'>
            {
                maininfo.map((item, index) => {
                    return (
                        <div className='Main_info'>
                            <div className='Main_info_card'> 
                                <div className='Main_info_card_phota'>
                                    <img className='Main_info_card_phota_imgst' src={item.imageUrl} alt="Jahon" />
                                </div>
                                <div className='Main_info_card_things'>
                                    <p className='Main_info_card_things_text'>
                                        {item.mainText}
                                    </p>
                                    <span className='Main_info_card_things_text_date'>{item.date}</span>
                                </div>
                            </div> 
                        </div>
                    )
                })

            }

        </div>
    );
}

export default MainInfo;
