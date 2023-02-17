import React from "react";
import Image from "next/image";
import secondBlockText from '../../assets/img/secondBlockText.svg';
import style from './secondBlock.module.css';

const SecondBlock = () => {
  return(
    <div className={style.secondBlockWrapper}>
      <Image src={secondBlockText} alt="SecondBlockText" className={style.secondBlockText}/>
    </div>
  )
}

export default SecondBlock;