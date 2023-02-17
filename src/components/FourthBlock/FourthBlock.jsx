import React from "react";
import Image from 'next/image';
import fourthBlockIcon from '../../assets/img/fourthBlockIcon.svg';
import style from './fourthBlock.module.css';

const FourthBlock = () => {
  return(
    <div className={style.fourthBlockWrapper}>
      <div className={style.title}>Companies launching<br/>their own product<br/>on the market</div>
      <Image src={fourthBlockIcon} alt="fourthBlockIcon" className={style.fourthBlockImage}/>
    </div>
  )
}

export default FourthBlock;