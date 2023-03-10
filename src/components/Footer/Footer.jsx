import React from 'react';
import Image from "next/image";
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dot from '../../assets/img/o.svg';
import logocur from '../../assets/img/logocur.svg';
import clutchImg from '../../assets/img/clutch.svg';
import badgeImg from '../../assets/img/badge.svg';
import style from './footer.module.css';

const Footer = () => {

  const handleScrollServices = (e) => {
    e.preventDefault();
    var element = document.getElementById('services');
      var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - 300;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
  }

  const handleScrollTouch = (e) => {
    e.preventDefault();
    const element = document.getElementById('getInTouch');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleScrollOurWork = (e) => {
    e.preventDefault();
    var element = document.getElementById('ourwork');
    var headerOffset = 45;
      var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - 300;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    className: 'footer',
    slidesToShow: 3.5,
    centerMode: true,
    autoplay: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    swipeToSlide: true,
    useTransform: true,
  }

  return(
    <div className={style.footerWrapper}>
      <Slider {...settings}>
        <Image src={dot} alt="clutchIcon" className={style.imageDot}/>
        <Image src={logocur} alt="clutchIcon" className={style.image}/>
        <Image src={dot} alt="clutchIcon" className={style.imageDot}/>
        <Image src={logocur} alt="clutchIcon" className={style.image}/>
        <Image src={dot} alt="clutchIcon" className={style.imageDot}/>
        <Image src={logocur} alt="clutchIcon" className={style.image}/>
        <Image src={dot} alt="clutchIcon" className={style.imageDot}/>
        <Image src={logocur} alt="clutchIcon" className={style.image}/>
      </Slider>
      <div className={style.container}>
        <div className={style.linksWrapper}>
          <div className={style.links}>
            <Link href="/" onClick={handleScrollServices} className={style.link}>SERVICES</Link>
            <Link href="/" className={style.link} onClick={handleScrollOurWork}>OUR WORK</Link>
            <Link href="/" onClick={handleScrollTouch} className={style.link}>GET IN TOUCH</Link>
            <div className={`${style.gmail} ${style.gmailDesktop}`}>sales@huboxt.com</div>
          </div>
          <div className={style.gmailMobile}>
            <div className={style.gmail}>sales@huboxt.com</div>
          </div>
        </div>
        <div className={style.gmailWrapper}>
          <div className={style.imagesWrapper}>
            <a href="https://www.designrush.com/agency/profile/huboxt" rel="noreferrer" target="_blank"><Image src={badgeImg} alt="badge"/></a>
            <a href="https://clutch.co/profile/huboxt?_gl=1*1dgykuk*_ga*MTgzNjY4MjMxMS4xNjc1MjY2Njgy*_[…]NFJxMUFtT0tXbFJQYTlMQVRpOE5TNDZSNVFFanpYV0E1VHdORXZKOEh3JTNEJTNE" rel="noreferrer" target="_blank"><Image src={clutchImg} className={style.clutchImage} alt="clutch"/></a>
          </div>
        </div>
      </div>
      <div className={style.rights}>
        Huboxt 2023. All rights reserved
      </div>
    </div>
  )
}

export default Footer;