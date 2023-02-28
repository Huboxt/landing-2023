import React, { useState } from 'react';
import Image from "next/image";
import Select from 'react-select';
import useContactForm from './use-contact-form';
import validate from './validate-contact-form';
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

  const services = [
    { value: 'design', label: 'DESIGN' },
    { value: 'development', label: 'DEVELOPMENT' },
    { value: 'management', label: 'MANAGEMENT' },
  ];
  const ProjectBudget = [
    { value: 'more $10k', label: 'more $10k' },
    { value: 'less $50k', label: 'less $50k' },
    { value: 'more $50k', label: 'more $50k' },
  ];
  const handleChangeServices = (e) => {
    const event = {
      target: {
        name: "services",
        value: e.value
      },
      persist: () => {}
    }
    handleChange(event)
  }
  const handleChangeProjectBudget = (e) => {
    const event = {
      target: {
        name: "ProjectBudget",
        value: e.value
      },
      persist: () => {}
    }
    handleChange(event)
  }

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
          <div className={style.selectsWrapper}>
            <div className={style.inputContainer}>
              <Select
                className={"react-select-container"}
                classNamePrefix="react-select"
                components={{ IndicatorSeparator:() => null }}
                isSearchable={false}
                placeholder="Service"
                name="service"
                onChange={handleChangeServices}
                options={services}
              />
              <div className={style.errorMessage}>{false && errors.name}</div>
            </div>
            <div className={style.inputContainer}>
            <Select
                className={"react-select-container"}
                classNamePrefix="react-select"
                components={{ IndicatorSeparator:() => null }}
                isSearchable={false}
                placeholder="Project Budget"
                name="projectBudget"
                onChange={handleChangeProjectBudget}
                options={ProjectBudget}
              />
              <div className={style.errorMessage}>{false && errors.name}</div>
            </div>
          </div>
          <div className={style.inputContainer}>
            <textarea
              className={errors.message ? `${style.input} ${style.inputError}` : style.input}
              style={{height: 'auto'}}
              placeholder="Message"
              name="message"
              rows="3"
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
