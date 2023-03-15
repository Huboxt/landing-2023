import React from 'react';
import Image from 'next/image';
import touch from '../../assets/img/getInTouch.svg';
import style from './firstBlock.module.css';

const FirstBlock = () => {

  const handleClickScroll = (e) => {
    e.preventDefault();
    var element = document.getElementById('getInTouch');
      var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset + 1000;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
    // const element = document.getElementById('getInTouch');
    // if (element) {
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
  };

  return(
    <div className={style.firstBlockWrapper}>
      <div className={style.container}>
        <div className={style.titleWrapper}>
          <div className={style.title}>Straight-up<br/>software<br/>development</div>
          <div className={style.subTitle}>Let us code and problem-solve while you sleep,<br/>making your project quickly become a reality</div>
          <button className={style.getButton} onClick={handleClickScroll}>
              <Image src={touch} alt="get" className={style.getInTouchImg}/>
              GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
  )
}

export default FirstBlock;