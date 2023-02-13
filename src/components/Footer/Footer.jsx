import React from 'react';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dot from '../../assets/img/o.svg';
import logocur from '../../assets/img/logocur.svg';
import style from './footer.module.css';
const Footer = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    className: 'footer',
    slidesToShow: 3.5,
    centerMode: true,
    autoplay: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    swipeToSlide: true,
    useTransform: false,
  }
  return(
    <div className={style.footerWrapper}>
      <Slider {...settings}>
        <Image src={dot} alt="clutchIcon" />
        <Image src={logocur} alt="clutchIcon" className={style.image}/>
        <Image src={dot} alt="clutchIcon"/>
        <Image src={logocur} alt="clutchIcon" className={style.image}/>
      </Slider>
    </div>
  )
}

export default Footer;