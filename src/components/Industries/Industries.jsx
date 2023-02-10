import React from 'react';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { array } from './industriesArr';
import industrialBg from '../../assets/img/industrialBg.svg';
import style from './industries.module.css';

const Industries = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    rtl: true,
    initialSlide: 0,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 2.5,
    centerMode: true,
    className: "industriesSlider",
    autoplay: true,
    vertical: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    swipeToSlide: true,
    useTransform: false
  }
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 2.5,
    centerMode: true,
    className: "industriesSlider",
    autoplay: true,
    vertical: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    swipeToSlide: true,
    useTransform: false
  }
  return(
    <div className={style.industriesWrapper}>
      <Image src={industrialBg} alt="bg" className={style.background}/>
      <div className={style.container}>
        <div className={style.sliders}>
          <div className={style.sliderContainer}>
            <div className={style.shadowTop}/>
            <div className={style.shadowBottom}/>
            <Slider {...settings}>
              {array.map((e, i) => {
                return(
                  <div key={i} className={style.industries}>
                    <Image src={e.image} alt=" "/>
                  </div>
                )
              })}
            </Slider>
          </div>
          <div className={style.sliderContainer}>
            <div className={style.shadowTop}/>
            <div className={style.shadowBottom}/>
            <Slider {...settings2}>
              {array.map((e, i) => {
                return(
                  <div key={i} className={style.industries}>
                    <Image src={e.image} alt=" "/>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
        <div className={style.titleContainer}>
          <div className={style.title}>
          Trusted by <br/>
          innovators <br/>
          across industries
          </div>
          <div className={style.subtitle}>
          Huboxt is A Software Development Team that get things done. Huboxt is A Software Development Team that get things done. Huboxt is A Software Development Team that get things done. Huboxt is A Software Development Team that get things done
          </div>
        </div>
      </div>
    </div>
  )
}

export default Industries;