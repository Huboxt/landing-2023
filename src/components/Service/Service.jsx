import React from "react";
import Image from "next/image";
import bgSpot from '../../assets/img/bgSpot.svg';
import servicesIcon from '../../assets/img/servicesIcon.svg';
import { cards } from './cards';
import style from './service.module.css';

const Service = () => {
  return(
    <div id="services" className={style.servicesWrapper}>
      <Image src={bgSpot} alt="spot" className={style.bgSpot}/>
      <div className={style.title}>
        <Image src={servicesIcon} alt="title"/>
        <div className={style.subtitle}>
        Our IT agency work is full cycle and tailored to your company’s goals. Benefit from a blend of experience, state-of-the-art technology, innovation, and code that is intelligent when having your product built for the everyday person
        </div>
      </div>
      <div className={style.service}>
        <div className={style.cardWrapper}>
          {
            cards.map((card, i) => {
              return(
                <div className={style.card} key={card.name + i}>
                  <div><Image src={card.image} alt="logo" style={{marginBottom: '32px'}}/></div>
                  <div className={style.cardName}>{card.name}</div>
                  <div className={style.cardDescription}>{card.description}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Service;