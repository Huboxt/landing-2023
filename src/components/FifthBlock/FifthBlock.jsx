import React from "react";
import Image from 'next/image';
import fifthBlockIcon from '../../assets/img/fifthBlockIcon.svg';
import style from './fifthBlock.module.css'

const FifthBlock = () => {
  return(
    <div className={style.fifthBlockWrapper}>
      <div className={style.title}>Organization<br/>that want to<br/>digitalize</div>
      <div><Image src={fifthBlockIcon} alt="fifthBlockIcon"/></div>
    </div>
  )
}

export default FifthBlock;