import React  from "react";
import Image from "next/image";
import logo from '../../assets/img/logo.svg';
import style from './header.module.css';

const Header  = () => {

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
        </div>
      </div>
    </div>
  )
}

export default Header;