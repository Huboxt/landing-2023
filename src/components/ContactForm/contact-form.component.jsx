import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";
import Select from 'react-select';
import useContactForm from './use-contact-form';
import validate from './validate-contact-form';
import touch from '../../assets/img/getInTouch.svg';
import style from './contactForm.module.css';

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });

const RECAPTCHA_SITE_KEY = '6Ld9aAwtAAAAANK2w0dKm9029EHu9ahhnngd7xYw';

const ContactFormComponent = () => {
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useContactForm(validate);

  const services = [
    { value: 'product development from scratch', label: 'Product development from scratch' },
    { value: 'UI/UX design', label: 'UI/UX design' },
    { value: 'MVP development', label: 'MVP development' },
    { value: 'Product enchantment/modernisations', label: 'Product enchantment/modernisations' },
  ];
  const ProjectBudget = [
    { value: 'N/A', label: 'N/A' },
    { value: 'less than $10k', label: 'Less than $10k' },
    { value: '$10k to $50k', label: '$10k to $50k' },
    { value: '$50k to $200k', label: '$50k to $200k' },
    { value: '$200k+', label: '$200k+' },
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

  const cantBeSubmitted = errors.email || !captchaToken || isSubmitting;

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const resetCaptcha = () => {
    setCaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  const onFormSubmit = (ev) => {
    handleSubmit(ev, captchaToken, resetCaptcha);
  };

  return (
    <div className={style.formWrapper} id="contact-form">
        <form
          onSubmit={onFormSubmit}
          noValidate
        >
          <div className={style.inputContainer}>
            <input
              autoComplete="off"
              type="text"
              className={style.input}
              placeholder="Your name"
              name="name"
              onChange={handleChange}
              value={values.name || ''}
            />
          </div>
          <div className={style.inputContainer}>
            <input
              autoComplete="off"
              type="email"
              className={errors.email ? `${style.input} ${style.inputError}` : style.input}
              placeholder="Your email address *"
              name="email"
              onChange={handleChange}
              required
              value={values.email || ''}
            />
            <div className={style.errorMessage}>{!!errors.email && errors.email}</div>
          </div>
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
              {/* <div className={style.errorMessage}>{false && errors.name}</div> */}
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
              {/* <div className={style.errorMessage}>{false && errors.name}</div> */}
            </div>
          <div className={style.inputContainer}>
            <textarea
              className={style.input}
              style={{height: 'auto'}}
              placeholder="Message"
              name="message"
              rows="3"
              onChange={handleChange}
              value={values.message || ''}
            />
          </div>
          <div className={style.captchaWrapper}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              theme="dark"
              onChange={onCaptchaChange}
              onExpired={resetCaptcha}
            />
          </div>
          <div className={style.buttonWrapper}>
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
