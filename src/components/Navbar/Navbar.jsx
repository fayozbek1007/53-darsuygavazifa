import React from 'react';

const Navbar = () => {
    const ReturnName = ["Узбекистана", "Мир", "Экономика", "Политика", "Общество", "Технологии", "Спорт", "Культура", "Происшествия"]
    return (
        <div className='NavbarJsx'>
            <div className='Navbar'>
                <div className='Navbar_One'>
                    <div className='Navbar_One_Title'>
                        <h1 className='Navbar_One_Title_Name'>NAMANGANLIKALR24</h1>
                    </div>
                    <div className='Navbar_One_Cost'>
                        <p className='Navbar_One_Cost_Name'><span className='Navbar_One_Cost_Name_Span'>$</span>10137.2</p>
                        <p className='Navbar_One_Cost_Name'><span className='Navbar_One_Cost_Name_Span'>P</span>138.26</p>
                        <p className='Navbar_One_Cost_Name'><span className='Navbar_One_Cost_Name_Span'>E</span>10988.72</p>
                    </div>
                </div>
                <div className='Navbar_One_Left'>
                    <img className='Navbar_One_Left_img' src="./imges/cib_telegram@2x.png" alt="TelegramIcon" />
                    <a href='#' className='Navbar_One_Left_text'>
                        Подписатся
                    </a>
                </div>
            </div>
            <div className='Navbar_two'>
                <ul className='Navbar_two_ul'>
                    {
                        ReturnName.map((item, index) => {
                            return <li className='Navbar_two_ul_li' key={index}><a className='Navbar_two_ul_li_link' href="#">{item}</a></li>
                        })
                    }
                </ul>
            </div>
            <div className='Navbar_btnImg'>
                <img className='Navbar_btnImg_img' src="./imges/nrg-banner.jpg" alt="" />
            </div>
        </div>
    );
}

export default Navbar;
