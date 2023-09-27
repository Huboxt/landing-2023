import React from "react";
import Image from "next/image";
import bgSpot from "../../assets/img/bgSpot.svg";
import servicesIcon from "../../assets/img/servicesIcon.svg";
import { cards } from "./cards";
import style from "./service.module.css";
import Link from "next/link";
import thirdBlockIcon from "../../assets/img/thirdBlockIcon.svg";
import thirdBlockSecondIcon from "../../assets/img/thirdBlockSecondIcon.svg";

const Service = () => {
  return (
    <div id="services" className={style.servicesWrapper}>
      <Image src={bgSpot} alt="spot" className={style.bgSpot} />
      <div className={style.title}>
        <Image src={servicesIcon} alt="title" />
        <div className={style.subtitle}>
          Huboxt is A Software Development Team that get things done. Huboxt is
          A Software Development Team that get things done
        </div>
      </div>

      <div className={style.thirdBlockWrapper}>
        <div className={style.thirdBlockCard}>
          <div>
            <Image
              src={thirdBlockIcon}
              className={style.image}
              alt="thirdBlockIcon"
            />
          </div>
          <div className={style.cardTitle}>Development for startups</div>
          <div className={style.description}>
            Some small description <br /> As a part of customer requirements and
            our internal <br /> agreements we try to use best practices{" "}
          </div>
          <Link href="/services/startups">
            <div className={style.arrow}>
              <svg
                width="181"
                height="16"
                viewBox="0 0 181 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M180.707 8.70711C181.098 8.31658 181.098 7.68342 180.707 7.29289L174.343 0.928932C173.953 0.538408 173.319 0.538408 172.929 0.928932C172.538 1.31946 172.538 1.95262 172.929 2.34315L178.586 8L172.929 13.6569C172.538 14.0474 172.538 14.6805 172.929 15.0711C173.319 15.4616 173.953 15.4616 174.343 15.0711L180.707 8.70711ZM0 9H180V7H0V9Z"
                  fill="#4E76D1"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className={style.thirdBlockCard}>
          <div>
            <Image
              src={thirdBlockSecondIcon}
              className={style.image}
              alt="thirdBlockSecondIcon"
            />
          </div>
          <div className={style.cardTitle}>
            Cross-platform mobile
            <br />
            development
          </div>
          <div className={style.description}>
            Some small description <br /> As a part of customer requirements and
            our internal <br /> agreements we try to use best practices{" "}
          </div>
          <Link href="/services/startups">
            <div className={style.arrow}>
              <svg
                width="181"
                height="16"
                viewBox="0 0 181 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M180.707 8.70711C181.098 8.31658 181.098 7.68342 180.707 7.29289L174.343 0.928932C173.953 0.538408 173.319 0.538408 172.929 0.928932C172.538 1.31946 172.538 1.95262 172.929 2.34315L178.586 8L172.929 13.6569C172.538 14.0474 172.538 14.6805 172.929 15.0711C173.319 15.4616 173.953 15.4616 174.343 15.0711L180.707 8.70711ZM0 9H180V7H0V9Z"
                  fill="#4E76D1"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      
      <div className={style.service}>
      <div className={style.cardWrapperTitle}>More Services</div>
        <div className={style.cardWrapper}>
          {cards.map((card, i) => {
            return (
              <div className={style.card} key={card.name + i}>
                <div>
                  <Image
                    src={card.image}
                    alt="logo"
                    className={style.serviceCardImage}
                  />
                </div>
                <h3 className={style.cardName}>{card.name}</h3>
                {/* <div className={style.cardDescription}>{card.description}</div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
