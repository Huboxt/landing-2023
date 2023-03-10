import React from 'react';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { array, array2 } from './industriesArr';
import industrialBg from '../../assets/img/industrialBg.svg';
import industrialBgMobile from '../../assets/img/industrialBgMobile.svg';
import style from './industries.module.css';

const Industries = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    rtl: true,
    initialSlide: 0,
    arrows: false,
    speed: 4000,
    autoplaySpeed: 0,
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
    useTransform: true,
    responsive: [
      {
        breakpoint: 1015,
        settings:{
          vertical: false,
          slidesToShow: 1,
          variableWidth: true
        }
      }
    ]
  }
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    initialSlide: 4,
    arrows: false,
    speed: 4000,
    autoplaySpeed: 0,
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
    useTransform: true,
    responsive: [
      {
        breakpoint: 1015,
        settings:{
          vertical: false,
          slidesToShow: 1,
          variableWidth: true
        }
      }
    ]
  }
  return(
    <div className={style.industriesWrapper}>
      <Image src={industrialBg} alt="bg" className={style.background}/>
      <Image src={industrialBgMobile} alt="bg" className={style.backgroundMobile}/>
      <div className={style.container}>
       <div className={`${style.titleContainer} ${style.mobile}`}>
          <div className={style.title}>
          Trusted by <br/>
          innovators <br/>
          across industries
          </div>
          <div className={style.subtitle}>
            Cutting edge software development to compliment the boldness of your business
          </div>
        </div>
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
              {array2.map((e, i) => {
                return(
                  <div key={i} className={style.industries}>
                    <Image src={e.image} alt=" "/>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
        <div className={`${style.titleContainer} ${style.desktop}`}>
          <div className={style.title}>
          Trusted by <br/>
          innovators <br/>
          across industries
          </div>
          <div className={style.subtitle}>
            Cutting edge software development to compliment the boldness of your business
          </div>
        </div>
      </div>
    </div>
  )
}

export default Industries;