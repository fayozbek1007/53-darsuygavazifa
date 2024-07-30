import React from 'react';

const MidNav = () => {
    return (
        <div className='Midd'>
            <div className='Midd_Info'>
                <div className='Mid_alsoStyle'>
                    <div className='Midd_Info_img'>
                        <img className='Midd_Info_img_Name' src="./imges/2659980 1.png" alt="" />
                    </div>
                    <div className='Midd_Info_Title'>
                        <a href='#' className='Midd_Info_Title_text'>Коронавирус COVID-19
                            в Узбекистане</a>
                    </div>
                </div>
            </div>
            <div className='Midd_Info'>
                <div className='Mid_alsoStyle'>
                    <div className='Midd_Info_img'>
                        <img className='Midd_Info_img_Name' src="./imges/emojione-monotone_face-with-medical-mask.png" alt="" />
                    </div>
                    <div className='Midd_Info_Title'>
                        <a href='#' className='Midd_Info_Title_text'>Инфицированы
                            <span className='Midd_span'>2753</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='Midd_Info'>
                <div className='Mid_alsoStyle'>
                    <div className='Midd_Info_img'>
                        <img className='Midd_Info_img_Name' src="./imges/cil_smile.png" alt="" />
                    </div>
                    <div className='Midd_Info_Title'>
                        <a href='#' className='Midd_Info_Title_text'>Выздоровели
                            <span className='Midd_span'>2245</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='Midd_Info'>
                <div className='Mid_alsoStyle'>
                    <div className='Midd_Info_img'>
                        <img className='Midd_Info_img_Name' src="./imges/Vector (2).png" alt="" />
                    </div>
                    <div className='Midd_Info_Title'>
                        <a href='#' className='Midd_Info_Title_text'>Умерли
                        <span className='Midd_span'>12</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MidNav;

