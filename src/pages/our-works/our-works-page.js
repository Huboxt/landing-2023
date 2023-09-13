import React from 'react';
import Header from '@/components/Header/Header';
import GetTouch from '@/components/GetTouch/GetTouch';
import Footer from '@/components/Footer/Footer';
import { projects } from '@/components/OurWorks/project';
import Image from "next/image";
import ourWorksIcon from '../../assets/img/ourWorksIcon.svg';
import style from "@/pages/our-works/ourWorksPage.module.css"
import touch from '../../assets/img/getInTouch.svg';
import Link from "next/link";
import { useRouter } from 'next/router';


const OurWorksPage = () => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <Header showGetTouchBtn/>  
      <div>
        <Image src={ourWorksIcon} alt="ourWorksIcon" className={style.ourWorksIcon}/>
      </div>
      <div>
      {
            projects.map((e, index) => {
              return (
                <div key={e.id} className={style.Wrapper}>
                  <div className={style.flipCardInner}>
                    <div className={style.projectBack} key={e.name + index}>
                      <div className={style.flex}>
                        <div className={style.leftBlock}>
                          <button className={style.projectButtonBack}>
                            DESIGN
                          </button>
                          <div className={style.projectTitleBack}>
                            {e.title}
                          </div>
                          <div className={style.projectDescriptionBack}>
                            {e.description}
                          </div>
                          <button className={style.projectButtonBackDev} onClick={() => router.push(`/${e.folder}/${e.page}`)}>
                            <Image
                              src={touch}
                              alt="get"
                              className={style.getInTouchImg}
                            />
                            VIEW PROJECT
                          </button>
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

                  <div className={style.flipCardInnerMobile}>
                    <div className={style.projectBack} key={e.name + index}>
                      <div>
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
                      <div className={style.projectButtons}>
                        <button className={style.projectButtonBack}>
                          <Image
                            src={touch}
                            alt="get"
                            className={style.getInTouchImg}
                          />
                          DESIGN
                        </button>
                        <button className={style.projectButtonBack}>
                          <Image
                            src={touch}
                            alt="get"
                            className={style.getInTouchImg}
                          />
                          VIEW PROJECT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }
      </div>
      <GetTouch borderRadius="60px 60px 0px 0px" />
      <Footer />
    </div>
  );
};

export default OurWorksPage;