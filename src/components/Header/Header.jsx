import React, { useState, useEffect }  from "react";
import Image from "next/image";
import b from '../../assets/img/headerLogo/b.svg';
import h from '../../assets/img/headerLogo/h.svg';
import o from '../../assets/img/headerLogo/o.svg';
import oBg from '../../assets/img/headerLogo/oBg.svg';
import t from '../../assets/img/headerLogo/t.svg';
import u from '../../assets/img/headerLogo/u.svg';
import x from '../../assets/img/headerLogo/x.svg';
import style from './header.module.css';

const Header  = () => {
  const [firstAnimation, setFirstAnimation] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setFirstAnimation(false)
    },1000)
  },[])

  return(
    <div className={style.headerWrapper}>
      <div className={style.header}>
        <div className={style.headerContainer}>
          <div className={style.logo}>
            <Image src={h} alt="h"/>
            <Image src={u} alt="u"/>
            <Image src={b} alt="b"/>
            <div className={style.oBgWrapper}>
              <Image className={`${firstAnimation ?  `${style.firstO}` : style.o}`} src={o} alt="o"/>
            </div>
            <Image src={x} alt="x"/>
            <Image src={t} alt="t"/>
          </div>
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