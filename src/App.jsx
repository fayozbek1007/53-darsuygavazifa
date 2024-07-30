import MidNav from './components/MidNav/MidNav';
import Navbar from './components/Navbar/Navbar';
import MainInfo from './components/MainInfo/MainInfo';
import Between from './components/Between/Between';
import Betweenleft from './components/Between/Betweenleft';
import Fotter from './components/Footter/Fotter';
import './App.css';
import './allcss/MIdNav.css'
import './allcss/Navbar.css'
import './allcss/mainjs.css'
import './allcss/between.css'
import './Media/media.css'
import './allcss/footter.css'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <MidNav />
        <MainInfo />
        <div className='MiddInfo'>
          <div className='MiddInfo_left'>
            <img className='MiddInfo_left_img' src="./imges/bell-icon@2x.png" alt="" />
            <p className='MiddInfo_left_img_text'>Хотите узнать новости первыми? подключите уведомления!
            </p>
          </div>
          <div className='MiddInfo_right'>
            <a className='MiddInfo_right_link' href="#">Включит  уведомления!
            </a>
          </div>
        </div>
        <div className='Head_Between'>
          <Between />
          <Betweenleft />
        </div>
      </div>
        <Fotter />
    </div>
  );
}

export default App;
