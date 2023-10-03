import React from 'react';
import Image from 'next/image';
import touch from '../../assets/img/getInTouch.svg';
import style from './firstBlock.module.css';
import clutchDesigh from '../../assets/img/design-clutch-icon.svg'

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
        <Image src={clutchDesigh} alt="clutch" className={style.clutchIcon}/>
          <h1 className={style.title}>Straight-up<br/>software<br/>development</h1>
          <div className={style.subTitle}>Quality apps developed by an experienced<br/>offshore team in time within your budget</div>
          <button className={style.getButton} onClick={handleClickScroll}>
              <Image src={touch} alt="get" className={style.getInTouchImg}/>
              GET IN TOUCH
          </button>
          <div className={style.skillsBlock}>
            <div className={style.skillsName}>Development</div>
            <div className={style.skillsName}>Design</div>
            <div className={style.skillsName}>Management</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstBlock;