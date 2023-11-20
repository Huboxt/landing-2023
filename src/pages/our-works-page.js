import React from "react";
import Header from "@/components/Header/Header";
import GetTouch from "@/components/GetTouch/GetTouch";
import Footer from "@/components/Footer/Footer";
import { projects } from "@/components/OurWorks/project";
import Image from "next/image";
import ourWorksIcon from "../assets/img/ourWorksIcon.svg";
import style from "@/pages/our-works/ourWorksPage.module.css";
import touch from "../assets/img/getInTouch.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const OurWorksPage = () => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <Header showGetTouchBtn />
      <div>
        <Image
          src={ourWorksIcon}
          alt="ourWorksIcon"
          className={style.ourWorksIcon}
        />
      </div>
      <div className={style.ourWorksDesktop}>
        {projects.map((e, index) => {
          const isExcludedPage = [
            "segma",
            "fleetInsider",
            "carbookingservice",
            "datbi",
          ].includes(e.page);
          const tagsArray = e.tags.split(", ");
          return (
            <div key={e.id} className={style.Wrapper}>
              <div className={style.flipCardInner}>
                <div className={style.projectBack} key={e.name + index}>
                  <div className={style.flex}>
                    <div className={style.leftBlock}>
                      {tagsArray.map((tag, tagIndex) => (
                        <button
                          key={tagIndex}
                          className={style.projectButtonBack}
                        >
                          {tag}
                        </button>
                      ))}
                      <div className={style.projectTitleBack}>{e.title}</div>
                      <div className={style.projectDescriptionBack}>
                        {e.description}
                      </div>
                      {!isExcludedPage && (
                        <button
                          className={style.projectButtonBackDev}
                          onClick={() => router.push(`/${e.folder}/${e.page}`)}
                        >
                          <Image
                            src={touch}
                            alt="get"
                            className={style.getInTouchImg}
                          />
                          VIEW PROJECT
                        </button>
                      )}
                    </div>
                    <div className={style.projectImage}>
                      <Image
                        src={e.Image}
                        alt=" "
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>


      <div className={style.ourWorksMobile}>
        {projects.map((e, index) => {
          const isExcludedPage = [
            "segma",
            "fleetInsider",
            "carbookingservice",
            "datbi",
          ].includes(e.page);
          const tagsArray = e.tags.split(", ");
          return (
            <div key={e.id} className={style.Wrapper}>
              <div className={style.flipCardInner}>
                <div className={style.projectBack} key={e.name + index}>
                  <div>
                    <div className={style.leftBlock}>
                      {tagsArray.map((tag, tagIndex) => (
                        <button
                          key={tagIndex}
                          className={style.projectButtonBack}
                        >
                          {tag}
                        </button>
                      ))}
                      <div className={style.projectTitleBack}>{e.title}</div>
                      <div className={style.projectDescriptionBack}>
                        {e.description}
                      </div>
                    </div>
                    <div className={style.projectImage}>
                      <Image
                        src={e.Image}
                        alt=" "
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    {!isExcludedPage && (
                        <button
                          className={style.projectButtonBackDev}
                          onClick={() => router.push(`/${e.folder}/${e.page}`)}
                        >
                          <Image
                            src={touch}
                            alt="get"
                            className={style.getInTouchImg}
                          />
                          VIEW PROJECT
                        </button>
                      )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <GetTouch borderRadius="60px 60px 0px 0px" />
      <Footer />
    </div>
  );
};

export default OurWorksPage;
