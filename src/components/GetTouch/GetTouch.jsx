import React from 'react';
import Image from 'next/image';
import getInTouchBg from '../../assets/img/getInTouchBg.svg';
import ContactFormComponent from '../ContactForm/contact-form.component';
import style from './getTouch.module.css';

const GetTouch = () => {
  return(
    <div className={style.getTouchWrapper} id="getInTouch">
      <Image src={getInTouchBg} alt=" " className={style.getTouchIcon}/>
      <div className={style.container}>
        <div className={style.title}>Contact us if you have any projects in mind</div>
        <ContactFormComponent />
      </div>
    </div>
  )
}

export default GetTouch;