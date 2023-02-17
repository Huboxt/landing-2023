import React from 'react';
import Image from 'next/image';
import thirdBlockIcon from '../../assets/img/thirdBlockIcon.svg';
import style from './thirdBlock.module.css';

const ThirdBlock = () => {
  return(
    <div className={style.thirdBlockWrapper}>
      <div className={style.title}>Early-stage<br/>startups without<br/>a tech team</div>
      <div><Image src={thirdBlockIcon} alt="thirdBlockIcon"/></div>
    </div>
  )
}

export default ThirdBlock;