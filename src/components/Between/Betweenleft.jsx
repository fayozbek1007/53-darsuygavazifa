import React from 'react';
const BetweenLeft = [{
    id: 1,
    descrip: "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
    date: "11:31 / 15.05.2020"
},
{
    id: 2,
    descrip: "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
    date: "11:31 / 15.05.2020"
},
{
    id: 3,
    descrip: "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
    date: "11:31 / 15.05.2020"
},
{
    id: 4,
    descrip: "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
    date: "11:31 / 15.05.2020"
},
];
const Betweenleft = () => {
    return (
        <div className='BetweenLeft'>
            <div className='Between_left'>
                <h3 className='Between_left_title'>Cамые популярные новости</h3>
            </div>
            {
                BetweenLeft.map((teime, index) => {
                    return (
                        <div className='Between_left_card'>
                            <p className='Between_left_card_description'>{teime.descrip}</p>
                            <span className='Between_left_card_description_date'>{teime.date}</span>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Betweenleft;
