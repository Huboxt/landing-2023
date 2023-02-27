import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from './project';
import ourWorksIcon from '../../assets/img/ourWorksIcon.svg';
import touch from '../../assets/img/getInTouch.svg';
import style from './ourWorks.module.css';

const OurWorks = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
      className={`${className} ${style.nextArrow}`}
        onClick={onClick}
      >
        <svg width="181" height="16" viewBox="0 0 181 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M180.707 8.70711C181.098 8.31658 181.098 7.68342 180.707 7.29289L174.343 0.928932C173.953 0.538408 173.319 0.538408 172.929 0.928932C172.538 1.31946 172.538 1.95262 172.929 2.34315L178.586 8L172.929 13.6569C172.538 14.0474 172.538 14.6805 172.929 15.0711C173.319 15.4616 173.953 15.4616 174.343 15.0711L180.707 8.70711ZM0 9H180V7H0V9Z" fill="#4E76D1"/>
        </svg>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} ${style.prevArrow}`}
        onClick={onClick}
      >
        <svg width="181" height="16" viewBox="0 0 181 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.292892 8.70711C-0.0976257 8.31658 -0.0976257 7.68342 0.292892 7.29289L6.65686 0.928932C7.04738 0.538408 7.68054 0.538408 8.07108 0.928932C8.46159 1.31946 8.46159 1.95262 8.07108 2.34315L2.41422 8L8.07108 13.6569C8.46159 14.0474 8.46159 14.6805 8.07108 15.0711C7.68054 15.4616 7.04738 15.4616 6.65686 15.0711L0.292892 8.70711ZM181 9H1V7H181V9Z" fill="#4E76D1"/>
        </svg>
      </div>
    );
  }

  const settings = {
    dots: false,
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: `${style.slider} sliderOurWork`,
    rows: 1,
    useTransform: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1265,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return(
    <div id="ourwork" className={`${style.ourWorksWrapper} ourWorksWrap`}>
      <div>
        <Image src={ourWorksIcon} alt="ourWorksIcon" className={style.ourWorksIcon}/>
      </div>
      <div>
      <div>
        <Slider {...settings}>
          {
            projects.map((e, index) => {
              return(
                <div key={e.id} className={style.Wrapper}>
                  <div className={style.flipCardInner}>
                    <div className={style.project} >
                      <div>
                        <div className={style.projectTitle}>{e.title}</div>
                        <div className={style.projectDescription}>{e.description}</div>
                      </div>
                      <div className={style.projectButtons}>
                        <button className={style.projectButton}>DESIGN</button>
                        <button className={style.projectButton}>DEVELOPMENT</button>
                      </div>
                    </div>
                    <div className={style.projectBack} key={e.name+index}>
                      <div>
                        <div className={style.projectTitleBack}>{e.title}</div>
                        <div className={style.projectDescriptionBack}>{e.description}</div>
                      </div>
                      <div className={style.projectImage}>
                        <Image src={e.Image} alt=" " style={{width: "100%", height: "100%"}}/>
                      </div>
                      <div className={style.projectButtons}>
                        <button className={style.projectButtonBack}>
                          <Image src={touch} alt="get" className={style.getInTouchImg}/>
                          DESIGN
                        </button>
                        <button className={style.projectButtonBack}>
                          <Image src={touch} alt="get" className={style.getInTouchImg}/>
                          DEVELOPMENT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
      </div>
    </div>
  )
}
export default OurWorks;