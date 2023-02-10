import React from 'react';
import Image from 'next/image';
import getInTouchBg from '../../assets/img/getInTouchBg.svg';
import style from './getTouch.module.css';

const GetTouch = () => {
  return(
    <div className={style.getTouchWrapper}>
      <Image src={getInTouchBg} alt=" " className={style.getTouchIcon}/>
      <div>

      </div>
    </div>
  )
}

export default GetTouch;