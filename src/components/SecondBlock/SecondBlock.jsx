import React from "react";
import Image from "next/image";
import secondBlockText from '../../assets/img/secondBlockText.svg';
import secondBlockTextMobile from '../../assets/img/secondBlockTextMobile.svg';
import style from './secondBlock.module.css';

const SecondBlock = () => {
  return(
    <div className={style.secondBlockWrapper}>
      <Image src={secondBlockText} alt="SecondBlockText" className={style.secondBlockText}/>
      <Image src={secondBlockTextMobile} alt="SecondBlockText" className={style.secondBlockTextMobile}/>
    </div>
  )
}

export default SecondBlock;