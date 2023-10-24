import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dot from "../../assets/img/o.svg";
import logocur from "../../assets/img/logocur.svg";
import clutchImg from "../../assets/img/clutch.svg";
import badgeImg from "../../assets/img/badge.svg";
import style from "./footer.module.css";
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import linkedin from "../../assets/img/linkedin-footer.svg";

const Footer = () => {
  const handleScrollServices = (e) => {
    e.preventDefault();
    var element = document.getElementById("services");
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - 300;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleScrollTouch = (e) => {
    e.preventDefault();
    const element = document.getElementById("getInTouch");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollOurWork = (e) => {
    e.preventDefault();
    var element = document.getElementById("ourwork");
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - 300;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    initialSlide: 0,
    currentSlide: 0,
    arrows: false,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    className: "footer",
    slidesToShow: 3.5,
    centerMode: true,
    autoplay: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    swipeToSlide: true,
    useTransform: false,
    responsive: [
      {
        breakpoint: 1015,
        settings: {
          speed: 7000,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={style.footerWrapper}>
      <Slider {...settings}>
        <Image src={dot} alt="clutchIcon" className={style.imageDot} />
        <Image src={logocur} alt="clutchIcon" className={style.image} />
        <Image src={dot} alt="clutchIcon" className={style.imageDot} />
        <Image src={logocur} alt="clutchIcon" className={style.image} />
        <Image src={dot} alt="clutchIcon" className={style.imageDot} />
        <Image src={logocur} alt="clutchIcon" className={style.image} />
        <Image src={dot} alt="clutchIcon" className={style.imageDot} />
        <Image src={logocur} alt="clutchIcon" className={style.image} />
        <Image src={dot} alt="clutchIcon" className={style.imageDot} />
        <Image src={logocur} alt="clutchIcon" className={style.image} />
        <Image src={dot} alt="clutchIcon" className={style.imageDot} />
        <Image src={logocur} alt="clutchIcon" className={style.image} />
      </Slider>
      <div className={style.container}>
        <div className={style.linksBlock}>
          <div className={style.linksWrapper}>
            <div className={style.links}>
              <Link
                href="/services/startups"
                className={style.link}
              >
                Development for startups
              </Link>
              <Link href="/services/flutter" className={style.link}>
                Mobile development
              </Link>
              <Link href="/our-works/our-works-page" className={style.link}>
                <Image src={linkedin} alt="linkedin" />
              </Link>
            </div>
          </div>
          <div className={style.infoBlock}>
            <div className={style.infoBlockLinks}>
              <div className={style.aboutLink}>
                {/* <Link
                  href="/"
                  onClick={handleScrollServices}
                  className={style.link}
                >
                  ABOUT
                </Link> */}
                <Link href="/our-works/our-works-page" className={style.link}>
                  OUR WORKS
                </Link>
                <Link
                  href="/"
                  onClick={handleScrollTouch}
                  className={style.link}
                >
                  GET IN TOUCH
                </Link>
                <div
                  className={`${style.gmail} ${style.gmailDesktop}`}
                  onClick={() => {
                    window.location.href = "mailto:sales@huboxt.com";
                  }}
                >
                  sales@huboxt.com
                </div>
              </div>
              <div className={style.termsLink}>
                <Link
                  href="/termspolicy/terms"
                  className={style.link}
                >
                  TERMS
                </Link>
                <Link href="/termspolicy/policy" className={style.link}>
                  PRIVACY POLICY
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.linksWrapper}>
          <div className={style.contactsBlock}>
            {/* <div
              className={`${style.gmail} ${style.gmailDesktop}`}
              onClick={() => {
                window.location.href = "mailto:sales@huboxt.com";
              }}
            >
              sales@huboxt.com
            </div> */}
            <div className={style.socialBlock}>
              {/* <Link href="/our-works/our-works-page" className={style.link}>
                <Image src={facebook} alt="facebook" />
              </Link>
              <Link href="/our-works/our-works-page" className={style.link}>
                <Image src={instagram} alt="instagram" />
              </Link> */}
              {/* <Link href="/our-works/our-works-page" className={style.link}>
                <Image src={linkedin} alt="linkedin" />
              </Link> */}
            </div>
          </div>
          <div className={style.imagesWrapper}>
          <a
              href="https://clutch.co/profile/huboxt?_gl=1*1dgykuk*_ga*MTgzNjY4MjMxMS4xNjc1MjY2Njgy*_[…]NFJxMUFtT0tXbFJQYTlMQVRpOE5TNDZSNVFFanpYV0E1VHdORXZKOEh3JTNEJTNE"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src={badgeImg}
                className={style.badgeImage}
                alt="badge"
              />
            </a>
            <a
              href="https://clutch.co/profile/huboxt?_gl=1*1dgykuk*_ga*MTgzNjY4MjMxMS4xNjc1MjY2Njgy*_[…]NFJxMUFtT0tXbFJQYTlMQVRpOE5TNDZSNVFFanpYV0E1VHdORXZKOEh3JTNEJTNE"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src={clutchImg}
                className={style.clutchImage}
                alt="clutch"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={style.rightsContainer}>
      <div className={style.rights}>Huboxt 2023. All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
