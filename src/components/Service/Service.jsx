import React from "react";
import Image from "next/image";
import bgSpot from '../../assets/img/bgSpot.svg';
import { cards } from './cards';
import style from './service.module.css';

const Service = () => {
  return(
    <div className={style.servicesWrapper}>
      <Image src={bgSpot} alt="spot" className={style.bgSpot}/>
      <div className={style.service}>
        <div className={style.title}>Services</div>
        <div className={style.subtitle}>
          Huboxt is A Software Development Team that get things done. Huboxt is A Software Development Team that get things done
        </div>
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