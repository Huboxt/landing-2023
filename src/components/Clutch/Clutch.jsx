import React from "react";
import Image from "next/image";
import clutchIcon from '../../assets/img/clutchIcon.svg';
import style from './clutch.module.css';

const Clutch = () => {
  return( 
    <div className={style.clutchWrapper}>
      <Image src={clutchIcon} alt="clutchIcon" className={style.clutchIcon}/>
      <div className={style.container}>

      </div>
    </div>
  )
}

export default Clutch;