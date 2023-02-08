import React from "react";
import ourWorksIcon from '../../assets/img/ourWorksIcon.svg';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from './project';
import style from './ourWorks.module.css';

const OurWorks = () => {
  const settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 5,
    // slidesToScroll: 1
  };
  return(
    <div className={style.ourWorksWrapper}>
      <div>
        <Image src={ourWorksIcon} alt="ourWorksIcon"/>
      </div>
      <div>
      {/* <div>
        <Slider {...settings} className={style["slick-list"]}>
          {
            projects.map((e) => {
              return(
                <div className={style.project}>
                  <div>
                    <div className={style.projectTitle}>{e.title}</div>
                    <div className={style.projectDescription}>{e.description}</div>
                  </div>
                  <div>
                    <button>DESIGN</button>
                    <button>DEVELOPMENT</button>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div> */}
      </div>
    </div>
  )
}
export default OurWorks;