import React from "react";
import Header from "@/components/Header/Header";
import GetTouch from "@/components/GetTouch/GetTouch";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import DMSCard from '../../assets/img/DMSCard.svg';
import golangIcon from "../../assets/img/stackIcons/golang-icon.svg";
import mysqlIcon from "../../assets/img/stackIcons/mysql-icon.svg";
import reactIcon from "../../assets/img/stackIcons/react-icon.svg";
import style from "@/pages/projects/leads.module.css";
import mmsCard1 from "../../assets/img/mmsCard1.png";
import mmsCard2 from "../../assets/img/mmsCard2.png";
import mmsCard3 from "../../assets/img/mmsCard3.png";
import numberIcon1 from "../../assets/img/numberIcon1.svg";
import numberIcon2 from "../../assets/img/numberIcon2.svg";
import numberIcon3 from "../../assets/img/numberIcon3.svg";
import numberIcon4 from "../../assets/img/numberIcon4.svg";
import numberIcon5 from "../../assets/img/numberIcon5.svg";
import numberIcon6 from "../../assets/img/numberIcon6.svg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import arrowBack from "../../assets/img/arrow-back.svg";
import Link from "next/link";

const MmsPage = () => {
  const handleClickScroll = (e) => {
    e.preventDefault();
    var element = document.getElementById("getInTouch");
    var elementPosition = element.getBoundingClientRect().top;

    window.scrollTo({
      top: 6000,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.container}>
      <Header showGetTouchBtn />
      <div className={style.backBtn}>
        <Link href="/our-works-page">
          <div className={style.arrow}>
            <Image src={arrowBack} alt="arrowBack" />
          </div>
        </Link>
        <div>BACK</div>
      </div>
      <div>
        {/* <Image
          src={dataConceptTitle}
          alt="dataConceptTitle"
          className={style.dataConceptTitle}
        /> */}
        <div className={` ${style.whatCanDoTitle}`}>Mms</div>
      </div>
      <div className={style.dataConceptDescr}>
        <div>
          <div className={style.description}>
            We build a software application that allows to streamline and
            optimize maintenance-related operations. It serves as a centralized
            platform for managing maintenance activities, assets, and resources.
          </div>
          <button className={style.needSameButton} onClick={handleClickScroll}>
            I NEED THE SAME!
          </button>
        </div>
        <div className={`${style.stackContainer}`}>
          <div className={style.stackBlock}>
            <Image
              src={golangIcon}
              alt="golangIcon"
              className={style.stackIcon}
            />
            <div className={style.stackTitle}>Golang</div>
          </div>
          <div className={style.stackBlock}>
            <Image
              src={mysqlIcon}
              alt="mysqlIcon"
              className={style.stackIcon}
            />
            <div className={style.stackTitle}>MySQL</div>
          </div>
          <div className={style.stackBlock}>
            <Image
              src={reactIcon}
              alt="mysqlIcon"
              className={style.stackIcon}
            />
            <div className={style.stackTitle}>React</div>
          </div>
        </div>
      </div>
      <ParallaxProvider>
        <Parallax style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={DMSCard}
            id="dataConceptCard"
            className={style.dataConceptCard}
            alt="dataConceptCard"
            style={{
              width: "90%",
              height: "90%",
            }}
          />
        </Parallax>
        <Parallax
        // startScroll={800}
        // endScroll={1500}
        // translateY={["50px", "-200px"]}
        >
          <div
            className={`${style.aboutContainer} ${style.dataConceptAboutMargin}`}
          >
            <div className={style.table}>
              <div>
                <div className={style.tableTitle}>CLIENT</div>
                <div className={style.tableDescr}>Goes GmbH</div>
              </div>
              <div>
                <div className={style.tableTitle}>TEAM MEMBERS</div>
                <div className={style.tableDescr}>4</div>
              </div>
              <div>
                <div className={style.tableTitle}>TIMELINE</div>
                <div className={style.tableDescr}>2,5 year till now</div>
              </div>
              <div>
                <div className={style.tableTitle}>SERVICES</div>
                <div className={style.tableDescr}>Full-cycle Development</div>
              </div>
            </div>
            <Parallax
              startScroll={300}
              endScroll={1100}
              translateX={["-800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.whatCanDoTitle}>ABOUT</div>
            </Parallax>
            <Parallax
              startScroll={100}
              endScroll={1400}
              translateX={["800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.cardWithoutBorder}>
                <div className={style.aboutBlockDescr}>
                  GOES GmbH is one of the leading manufacturers of pumping and
                  stimulation equipment for the oil and gas industry. They offer
                  hydraulic fracturing, drilling, acidizing, sand control and
                  other well stimulation and pumping equipment and software.
                  <br />
                  <br />
                  GOES GmbH invited us to build a Maintenance Management System
                  that has to empower organizations to effectively manage
                  assets, monitor maintenance activities, and optimize resource
                  utilization.
                </div>
              </div>
            </Parallax>
          </div>
        </Parallax>

        <Parallax
        // startScroll={1300}
        // endScroll={2000}
        // translateY={["-200px", "-600px"]}
        >
          <div
            className={`${style.researchContainer} ${style.scopeMarginUpload}`}
          >
            <Parallax
              startScroll={600}
              endScroll={2600}
              translateX={["-800px", "0px"]}
              className={style.parallaxActive}
            >
              <div className={style.whatCanDoTitle}>SCOPE</div>
            </Parallax>
            <div className={style.scopeBlock}>
              <div className={style.scopeSubTitle}>
                We started with full-cycle web application development:
                requirements gathering, UX/UI prototyping, frontend and backend
                development, cloud infrastructure deployment, QA,
                post-production support.
              </div>
              <div className={style.scopeCards}>
                <div className={style.scopeCard}>
                  <Image
                    src={numberIcon1}
                    alt="numberIcon1"
                    className={style.numberIcon1}
                  />
                  <div
                    className={style.researchBlockDescr}
                    style={{ marginLeft: "10px" }}
                  >
                    Asset Management: enabling users to create assets and
                    associate them with subcomponents or parts, facilitating a
                    hierarchical structure for streamlined management.
                  </div>
                </div>
                <div className={style.scopeCard}>
                  <Image
                    src={numberIcon2}
                    alt="numberIcon2"
                    className={style.numberIcon}
                  />
                  <div className={style.researchBlockDescr}>
                    Activity Creation and Management: allows creation and
                    tracking of maintenance activities linked to each asset.
                  </div>
                </div>
                <div className={style.scopeCard}>
                  <Image
                    src={numberIcon3}
                    alt="numberIcon3"
                    className={style.numberIcon}
                  />
                  <div className={style.researchBlockDescr}>
                    Reporting Capabilities: the system generates detailed
                    reports about activities performed, including the status of
                    maintenance tasks, parts replaced, and overall asset
                    condition, facilitating informed decision-making.
                  </div>
                </div>
                <div className={style.scopeCard}>
                  <Image
                    src={numberIcon4}
                    alt="numberIcon4"
                    className={style.numberIcon}
                  />
                  <div className={style.researchBlockDescr}>
                    Work Hours Management: the system includes functionality to
                    manage work hours associated with maintenance activities,
                    aiding in resource allocation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
        // startScroll={1300}
        // endScroll={2000}
        // translateY={["-100px", "-300px"]}
        >
          <div className={style.aboutContainer}>
            <Parallax
              startScroll={1500}
              endScroll={2000}
              translateX={["-800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.whatCanDoTitle}>DEVELOPMENT</div>
            </Parallax>
            <Parallax
              startScroll={300}
              endScroll={2000}
              translateX={["800px", "50px"]}
              className={style.staticParallax}
            >
              <div className={style.cardWithoutBorder}>
                <div className={style.aboutBlockDescr}>
                  Our team conducted in-depth consultations to understand the
                  specific needs and workflows surrounding asset maintenance for
                  our client. Leveraging this insight, we designed a
                  customizable architecture, ensuring the system’s adaptability
                  to varying asset types. The development phase encompassed the
                  creation of an intuitive frontend interface and a robust
                  backend system to handle complex data and user interactions.
                  Rigorous testing was conducted to validate the system’s
                  functionality, data accuracy, and performance across various
                  scenarios.
                </div>
              </div>
            </Parallax>
            
          </div>
        </Parallax>

        <Parallax>
          <div className={`${style.researchContainer} ${style.padding45}`}>
            <div>
              <Image
                src={mmsCard1}
                className={style.dataConceptJobs}
                alt="dataConceptJobs"
                style={{
                  width: "90%",
                  height: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "flex",
                  marginBottom: "32px",
                  borderRadius: "20px",
                  border: "10px solid #f7f7f7"
                }}
              />
            </div>
            <div>
              <Image
                src={mmsCard2}
                className={style.dataConceptJobs}
                alt="dataConceptJobs"
                style={{
                  width: "90%",
                  height: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "flex",
                  marginBottom: "32px",
                  borderRadius: "20px",
                  border: "10px solid #f7f7f7"
                }}
              />
            </div>
            <div>
            <Image
              src={mmsCard3}
              className={style.dataConceptJobs}
              alt="dataConceptJobs"
              style={{
                width: "90%",
                height: "90%",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                borderRadius: "20px",
                border: "10px solid #f7f7f7"
              }}
            />
          </div>
          </div>
        </Parallax>
      </ParallaxProvider>
      <div>
        <div className={style.getTouchWrapper}>
          <GetTouch id="getInTouch" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MmsPage;
