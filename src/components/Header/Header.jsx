import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logoMobileWhite from "../../assets/img/headerLogo/headerLogoMobileWhite.svg";
import hub from "../../assets/img/headerLogo/hub.svg";
import hubMob from "../../assets/img/headerLogo/hubMob.svg";
import oxt from "../../assets/img/headerLogo/oxt.svg";
import oxtMob from "../../assets/img/headerLogo/oxtMob.svg";
import style from "./header.module.css";
import Link from "next/link";
import touch from "../../assets/img/getInTouch.svg";
import pc from "../../assets/img/pc-icon.svg";
import phone from "../../assets/img/phone-icon.svg";
import monitor from "../../assets/img/monitor-icon.svg";
import pcMobile from "../../assets/img/pc-mobile-icon.svg";
import phoneMobile from "../../assets/img/phone-mobile-icon.svg";
import monitorMobile from "../../assets/img/monitor-mobile-icon.svg";
import arrowUp from "../../assets/img/arrow-up.svg";
import arrowUpWhite from "../../assets/img/arrow-up-white.svg";
import arrowDown from "../../assets/img/arrow-down.svg";
import arrowDownWhite from "../../assets/img/arrow-down-white.svg";
import facebook from "../../assets/img/facebook-mobile.svg";
import instagram from "../../assets/img/instagram-mobile.svg";
import linkedin from "../../assets/img/linkedin-mobile.svg";
import { CSSTransition } from "react-transition-group";

const Header = ({ showGetTouchBtn }) => {
  const [firstAnimation, setFirstAnimation] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    if (!showGetTouchBtn) {
      setAnimationComplete(true);
    }
  }, [showGetTouchBtn]);

  useEffect(() => {
    setTimeout(() => {
      setFirstAnimation(false);
    }, 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickScroll = (e) => {
    e.preventDefault();
    var element = document.getElementById("getInTouch");
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset + 1000;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.headerWrapper}>
      <div
        className={`${style.header} ${
          showGetTouchBtn ? style.headerWithPadding : ""
        }`}
      >
        <div className={style.headerContainer}>
          {/* <Link href="/">
            <div className={style.logo}>
              <Image src={hub} alt="hub" />
              <div className={style.oBgWrapper}>
                <Image src={oxt} alt="oxt" />
                <div
                  className={`${firstAnimation ? `${style.firstO}` : style.o}`}
                >
                  <div className={style.inner} />
                </div>
              </div>
            </div>
          </Link> */}
          {isMenuOpen ? (
            <Link href="/">
            <Image
              src={logoMobileWhite}
              alt="logoMobileWhite"
              className={style.logoMobileWhite}
            />
            </Link>
          ) : (
            <Link href="/">
            <div className={style.logoMobile}>
              <Image src={hubMob} alt="hub" className={style.logoMobileFirst}/>
              <div className={style.oBgWrapper}>
                <Image src={oxtMob} alt="oxt" className={style.logoMobileSecond}/>
                <div
                  className={`${firstAnimation ? `${style.firstO}` : style.o}`}
                >
                  <div className={style.inner} />
                </div>
              </div>
            </div>
            </Link>
          )}
          <div
            className={`${style.headerButtons} ${
              showGetTouchBtn ? style.marginAuto : ""
            }`}
          >
            <button
              className={`${style.headerButton} ${
                animationComplete ? style.animatedButton : ""
              }`}
            >
              ABOUT
            </button>
            <Link href="/our-works/our-works-page">
              <button
                className={`${style.headerButton} ${
                  animationComplete ? style.animatedButton : ""
                }`}
              >
                OUR WORKS
              </button>
            </Link>
            <div className={style.dropdownContainer}>
              <div
                ref={dropdownRef}
                onClick={toggleDropdown}
                style={{ display: "flex" }}
                className={`${animationComplete ? style.animatedButton : ""}`}
              >
                <button className={style.headerButton}>SERVICES</button>
                <Image
                  src={isDropdownVisible ? arrowUp : arrowDown}
                  alt="arrow"
                />
              </div>
              <CSSTransition
                in={isDropdownVisible}
                timeout={330}
                classNames={{
                  enter: style.animatedEntering,
                  exit: style.animatedExiting,
                }}
                unmountOnExit
              >
                <div className={`${style.dropdown}`}>
                  <Link href="/services/startups">
                    <div className={style.dropdownBlock}>
                      <Image src={pc} alt="pc" className={style.dropdownIcon} />
                      <div>Software development for startups</div>
                    </div>
                  </Link>
                  <div className={style.dropdownBlock}>
                    <Image
                      src={phone}
                      alt="phone"
                      className={style.dropdownIcon}
                    />
                    <div>Mobile development</div>
                  </div>
                  <div className={style.dropdownBlock}>
                    <Image
                      src={monitor}
                      alt="monitor"
                      className={style.dropdownIcon}
                    />
                    <div>Web development</div>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </div>
          <button
            className={
              isMenuOpen ? style.headerMenuCloseBtn : style.headerMenuBtn
            }
            onClick={toggleMenu}
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>
          {/* Mobile menu */}
          <CSSTransition
            in={isMenuOpen}
            timeout={300}
            classNames="mobileMenu"
            unmountOnExit
          >
            <div className={style.mobileMenu}>
              <ul>
                <li>ABOUT</li>
                <li
                  ref={dropdownRef}
                  onClick={toggleDropdown}
                >
                  <div style={{ display: "flex"}}>
                  <div>SERVICES</div>
                  <Image
                    src={isDropdownVisible ? arrowUpWhite : arrowDownWhite}
                    alt="arrow"
                    className={style.mobileMenuArrow}
                  />
                  </div>
                    {isDropdownVisible ? 
                    <div className={style.mobileMenudropdown}>
                    <Link href="/services/startups">
                      <div className={style.mobileDropdownBlock}>
                        <Image
                          src={pcMobile}
                          alt="pc"
                          className={style.mobileDropdownIcon}
                        />
                        <div className={style.mobileDropdownText}>Software development for startups</div>
                      </div>
                    </Link>
                    <div className={style.mobileDropdownBlock}>
                      <Image
                        src={phoneMobile}
                        alt="phone"
                        className={style.mobileDropdownIcon}
                      />
                      <div className={style.mobileDropdownText}>Mobile development</div>
                    </div>
                    <div className={style.mobileDropdownBlock}>
                      <Image
                        src={monitorMobile}
                        alt="monitor"
                        className={style.mobileDropdownIcon}
                      />
                      <div className={style.mobileDropdownText}>Web development</div>
                    </div>
                  </div> : ""}
                </li>
                <li>OUR WORK</li>
                <li>GET IN TOUCH</li>
                <li>TERMS</li>
                <li>PRIVACY POLICY</li>
              </ul>
              <div className={style.mobileSocialBlock}>
                <Link href="https://www.facebook.com"><Image src={facebook} alt="facebook" className={style.mobileSocialIcon}/></Link>
                <Link href="https://www.instagram.com"><Image src={instagram} alt="instagram" className={style.mobileSocialIcon}/></Link>
                <Link href="https://www.linkedin.com"><Image src={linkedin} alt="linkedin" className={style.mobileSocialIcon}/></Link>
              </div>
            </div>
          </CSSTransition>
          {showGetTouchBtn && (
            <button className={style.getButton} onClick={handleClickScroll}>
              <Image src={touch} alt="get" className={style.getInTouchImg} />
              GET IN TOUCH
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
