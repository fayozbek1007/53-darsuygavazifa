import React from 'react';

const Fotter = () => {
    return (
        <div className='Fotter'>
            <div className='Foter_style'>
                <div className='Fotter_top'>
                    <div className='Fotter_top_desk'>
                        <h3 className='Fotter_top_title'>NAMANGANLIKLAR24</h3>
                    </div>
                    <div className='Fotter_top_left'>
                        <p className='Fotter_top_left_txet'>
                            Подписывайтесь на наш канал в Telegram и будьте всегда в курсе самых последних новостей:
                        </p>
                        <div className='Navbar_One_Left'>
                            <img className='Navbar_One_Left_img' src="./imges/cib_telegram@2x.png" alt="TelegramIcon" />
                            <a href='#' className='Navbar_One_Left_text'>
                                Подписатся
                            </a>
                        </div>
                    </div>
                </div>

                <div className='Fotter_top_botton'>
                    <div className='Fotter_top_botton_one'>
                        <h5 className='Fotter_top_botton_one_title'>О сайте </h5>
                        <p className='Fotter_top_botton_one_text'>Воспроизводство, копирование, тиражирование, распростране ние и иное использование информации с сайта «NAMANGANLIKLAR24.UZ» возможно только с предварительного письменного разрешения редакции.
                        </p>
                    </div>
                    <div className='Fotter_top_botton_two'>
                        <p className='Fotter_top_botton_two_text'>Информация о сайте         </p>
                        <p className='Fotter_top_botton_two_text'>Напишите нам         </p>
                        <p className='Fotter_top_botton_two_text'>Реклама         </p>
                        <p className='Fotter_top_botton_two_text'>Прислать новость</p>
                    </div>
                    <div className='Fotter_top_botton_two'>
                        <p className='Fotter_top_botton_two_text'>Использование материалов         </p>
                        <p className='Fotter_top_botton_two_text'>Темы дня         </p>
                        <p className='Fotter_top_botton_two_text'>Наша команда
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fotter;
