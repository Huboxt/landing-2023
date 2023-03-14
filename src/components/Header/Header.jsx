import React, { useState, useEffect }  from "react";
import Image from "next/image";
import hub from '../../assets/img/headerLogo/hub.svg';
import hubMob from '../../assets/img/headerLogo/hubMob.svg';
import oxt from '../../assets/img/headerLogo/oxt.svg';
import oxtMob from '../../assets/img/headerLogo/oxtMob.svg';
import style from './header.module.css';

const Header  = () => {
  const [firstAnimation, setFirstAnimation] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setFirstAnimation(false)
    },0)
  },[])

  return(
    <div className={style.headerWrapper}>
      <div className={style.header}>
        <div className={style.headerContainer}>
          <div className={style.logo}>
            <Image src={hub} alt="hub"/>
              <div className={style.oBgWrapper}>
                <Image src={oxt} alt="oxt" />
                <div className={`${firstAnimation ?  `${style.firstO}` : style.o}`}>
                  <div className={style.inner}/>
                </div>
              </div>
          </div>
          <div className={style.logoMobile}>
            <Image src={hubMob} alt="hub"/>
              <div className={style.oBgWrapper}>
                <Image src={oxtMob} alt="oxt" />
                <div className={`${firstAnimation ?  `${style.firstO}` : style.o}`}>
                  <div className={style.inner}/>
                </div>
              </div>
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