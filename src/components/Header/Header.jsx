import React  from "react";
import Image from "next/image";
import logo from '../../assets/img/logo.svg';
import touch from '../../assets/img/getInTouch.svg';
import style from './header.module.css';

const Header  = () => {

  const handleClickScroll = () => {
    const element = document.getElementById('getInTouch');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return(
    <div className={style.headerWrapper}>
      <div className={style.header}>
        <div className={style.headerContainer}>
          <div><Image src={logo} alt="logo"/></div>
          {/* <div className={style.headerButtons}>
            <button className={style.headerButton}>ABOUT</button>
            <button className={style.headerButton}>OUR WORKS</button>
            <button className={style.headerButton}>SERVICES</button>
          </div> */}
          <div>
            <button className={style.headerGet} onClick={handleClickScroll}>
              <Image src={touch} alt="get" className={style.getInTouchImg}/>
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;