import React, { useState, useEffect }  from "react";
import Image from "next/image";
import hub from '../../assets/img/headerLogo/hub.svg';
import hubMob from '../../assets/img/headerLogo/hubMob.svg';
import oxt from '../../assets/img/headerLogo/oxt.svg';
import oxtMob from '../../assets/img/headerLogo/oxtMob.svg';
import style from './header.module.css';
import Link from "next/link";
import touch from '../../assets/img/getInTouch.svg';

const Header  = ({ showGetTouchBtn }) => {
  const [firstAnimation, setFirstAnimation] = useState(true)
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    if (!showGetTouchBtn) {
      setAnimationComplete(true);
    }
  }, [showGetTouchBtn]);

  useEffect(() => {
    setTimeout(() => {
      setFirstAnimation(false)
    },0)
  },[])

  const handleClickScroll = (e) => {
    e.preventDefault();
    var element = document.getElementById('getInTouch');
      var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset + 1000;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
  };

  return (
    <div className={style.headerWrapper}>
      <div className={`${style.header} ${showGetTouchBtn ? style.headerWithPadding : ''}`}>
        <div className={style.headerContainer}>
          <Link href="/">
            <div className={style.logo}>
              <Image src={hub} alt="hub" />
              <div className={style.oBgWrapper}>
                <Image src={oxt} alt="oxt" />
                <div
                  className={`${firstAnimation ? `${style.firstO}` : style.o}`}
                >
                  <div className={style.inner} />
                </div>
              </div>
            </div>
          </Link>
          <div className={style.logoMobile}>
            <Image src={hubMob} alt="hub" />
            <div className={style.oBgWrapper}>
              <Image src={oxtMob} alt="oxt" />
              <div
                className={`${firstAnimation ? `${style.firstO}` : style.o}`}
              >
                <div className={style.inner} />
              </div>
            </div>
          </div>
          <div className={`${style.headerButtons} ${
              showGetTouchBtn ? style.marginAuto : ""
              }`}>
            <button className={`${style.headerButton} ${animationComplete ? style.animatedButton : ''}`}>ABOUT</button>
            <Link href="/our-works/our-works-page">
              <button className={`${style.headerButton} ${animationComplete ? style.animatedButton : ''}`}>OUR WORKS</button>
            </Link>
            <button className={`${style.headerButton} ${animationComplete ? style.animatedButton : ''}`}>SERVICES</button>
          </div>
          {showGetTouchBtn && (
            <button className={style.getButton} onClick={handleClickScroll}>
              <Image src={touch} alt="get" className={style.getInTouchImg} />
              GET IN TOUCH
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
