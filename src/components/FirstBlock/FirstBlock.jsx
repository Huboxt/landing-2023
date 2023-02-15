import React from 'react';
import style from './firstBlock.module.css';
import Image from 'next/image';
import wrapperSkills from "../../assets/img/wrapperSkills.svg"

const FirstBlock = () => {
  return(
    <div className={style.firstBlockWrapper}>
      <div className={style.container}>
        <div className={style.titleWrapper}>
          <div className={style.title}>Straight-up<br/>software<br/>development</div>
          <div className={style.subTitle}>Let us code and problem-solve while you sleep,<br/>making your project quickly become a reality</div>
        </div>
        <div className={style.skillsWrapper}>
          <Image src={wrapperSkills}/>
        </div>
      </div>
    </div>
  )
}

export default FirstBlock;