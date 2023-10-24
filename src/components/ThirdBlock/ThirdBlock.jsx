import React from "react";
import Image from "next/image";
import thirdBlockIcon from "../../assets/img/thirdBlockIcon.svg";
import thirdBlockSecondIcon from "../../assets/img/thirdBlockSecondIcon.svg";
import style from "./thirdBlock.module.css";
import Link from "next/link";

const ThirdBlock = () => {
  return (
    <div className={style.thirdBlockWrapper}>
      <div className={style.thirdBlockCard}>
        <Link href="/services/startups">
          <div>
            <Image
              src={thirdBlockIcon}
              className={style.image}
              alt="thirdBlockIcon"
            />
          </div>
          <div className={style.title}>Early-stage and growing startups</div>
          <div className={`${style.description}`}>
            We develop MVP, prototypes, proofs of concept for early-stage.
            Mobile, web, SaaS apps for growing startups. Help fast-growing ones
            to scale.
          </div>
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
        <div className={style.title}>Small And Midsize Business</div>
        <div className={style.description}>
          Applications for your staff to optimize workflow. Applications for
          your customers to earn more, giving them extra value. All main
          platforms: mobile, web, desktop, cloud.
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
  );
};

export default ThirdBlock;
