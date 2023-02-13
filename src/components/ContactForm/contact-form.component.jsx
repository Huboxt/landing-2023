import React, { useState } from 'react';
import useContactForm from './use-contact-form';
import validate from './validate-contact-form';
import Image from "next/image";
import touch from '../../assets/img/getInTouch.svg';
import style from './contactForm.module.css';

const ContactFormComponent = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useContactForm(validate);

  const cantBeSubmitted = errors.name || errors.email || errors.message;

  return (
    <div className={style.formWrapper} id="contact-form">
        <form
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={style.inputContainer}>
            <input
              autoComplete="off"
              type="text"
              className={errors.name ? `${style.input} ${style.inputError}` : style.input}
              placeholder="Your name"
              name="name"
              onChange={handleChange}
              required
              value={values.name || ''}
            />
            <div className={style.errorMessage}>{!!errors.name && errors.name}</div>
          </div>
          <div className={style.inputContainer}>
            <input
              autoComplete="off"
              type="email"
              className={errors.email ? `${style.input} ${style.inputError}` : style.input}
              placeholder="Your email address"
              name="email"
              onChange={handleChange}
              required
              value={values.email || ''}
            />
            <div className={style.errorMessage}>{!!errors.email && errors.email}</div>
          </div>
          <div className={style.inputContainer}>
            <input
              className={errors.message ? `${style.input} ${style.inputError}` : style.input}
              placeholder="Message"
              name="message"
              onChange={handleChange}
              required
              value={values.message || ''}
            />
            <div className={style.errorMessage}>{!!errors.message && errors.message}</div>
          </div>
          <div>
            <button type="submit" className={style.button} disabled={cantBeSubmitted}>
            <Image src={touch} alt=" " className={style.getInTouchImg}/>
              Submit
            </button>
          </div>
        </form>
    </div>
  );
};

export default ContactFormComponent;
