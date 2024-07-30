import React from 'react';
const BetweenMId = [
    {
        id: 1,
        descrition: "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
        MainDesciription: "После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана",
        UrlImg: "./imges/Rectangle 21.png",
        date: "11:31 / 15.05.2020"
    },
    {
        id: 2,
        descrition: "Мирзиёев: «Нам следовало бы принять некоторые правила карантина как часть повседневной жизни»",
        MainDesciription: "Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни.",
        UrlImg: "./imges/Rectangle 23.png",
        date: "11:31 / 15.05.2020"
    },
    {
        id: 3,
        descrition: "В Ташкенте планируют ввести новую систему электронных проездных билетов.",
        MainDesciription: "Целью этих изменений является максимально возможное сокращение количества других маршрутов на улицах, где проходят основные маршруты.",
        UrlImg: "./imges/Rectangle 24.png",
        date: "11:31 / 15.05.2020"
    },
    {
        id: 4,
        descrition: "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
        MainDesciription: "После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана",
        UrlImg: "./imges/Rectangle 21.png",
        date: "11:31 / 15.05.2020"
    },
    {
        id: 5,
        descrition: "Мирзиёев: «Нам следовало бы принять некоторые правила карантина как часть повседневной жизни»",
        MainDesciription: "Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни.",
        UrlImg: "./imges/Rectangle 23.png",
        date: "11:31 / 15.05.2020"
    },
    {
        id: 6,
        descrition: "В Ташкенте планируют ввести новую систему электронных проездных билетов.",
        MainDesciription: "Целью этих изменений является максимально возможное сокращение количества других маршрутов на улицах, где проходят основные маршруты.",
        UrlImg: "./imges/Rectangle 24.png",
        date: "11:31 / 15.05.2020"
    },
];

const Between = () => {
    return (
        <div className='Between'>
            {
                BetweenMId.map((todo, index) => {
                    return (
                        <div className='Between_todo'>
                            <div className='Between_todo_phota'>
                                <img className='Between_todo_phota_img' src={todo.UrlImg} alt="" />
                            </div>
                            <div className='Between_todo_alltext'>
                                <h5 className='Between_todo_alltext_title'>{todo.descrition}</h5>
                                <p className='Between_todo_alltext_text'>{todo.MainDesciription}</p>
                                <span className='Between_todo_alltext_date'>
                                    {todo.date}
                                </span>
                            </div>
                        </div>
                    )
                })

            }
        </div >
    );
}

export default Between;

