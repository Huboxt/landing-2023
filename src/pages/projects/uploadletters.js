import React, {useEffect, useState, useRef} from "react";
import Header from "@/components/Header/Header";
import GetTouch from "@/components/GetTouch/GetTouch";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import uploadLettersCard from "../../assets/img/uploadLettersCard.svg";
import aboutTitle from "../../assets/img/aboutTitle.svg";
import researchTitle from "../../assets/img/researchTitle.svg";
import reactIcon from "../../assets/img/stackIcons/react.svg";
import reduxIcon from "../../assets/img/stackIcons/redux.svg";
import tsIcon from "../../assets/img/stackIcons/typescript.svg";
import nodeIcon from "../../assets/img/stackIcons/node-js.svg";
import style from "@/pages/projects/dataConceptPage.module.css";
import uploadlettersTitle from "./uploadlettersTitle.svg";
import numberIcon1 from "../../assets/img/numberIcon1.svg";
import numberIcon2 from "../../assets/img/numberIcon2.svg";
import numberIcon3 from "../../assets/img/numberIcon3.svg";
import numberIcon4 from "../../assets/img/numberIcon4.svg";
import dataConceptJobs1 from "./dataConceptJobs1.svg";
import dataConceptJobs2 from "./dataConceptJobs2.svg";
import dataConceptJobs3 from "./dataConceptJobs3.svg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";


const UploadlettersPage = () => {

  const handleClickScroll = (e) => {
    e.preventDefault();
    var element = document.getElementById("getInTouch");
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset + 500;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  

  return (
    <div className={style.container}>
      <Header showGetTouchBtn />
      <div>
        <Image
          src={uploadlettersTitle}
          alt="uploadlettersTitle"
          className={style.dataConceptTitle}
        />
      </div>
      <div className={style.dataConceptDescr}>
        <div>
          UploadLetters is a Texas based startup that provides sending
          First-Class Mail®, Certified Mail® and Priority Mail® letters
          digitally.
        </div>
        <button className={style.needSameButton} onClick={handleClickScroll}>
          I NEED THE SAME!
        </button>
        <div className={style.stackContainer}>
          <div className={style.stackBlock}>
            <Image
              src={reactIcon}
              alt="reactIcon"
              style={{ width: "50px", height: "50px" }}
            />
            <div className={style.stackTitle}>React</div>
          </div>
          <div className={style.stackBlock}>
            <Image
              src={reduxIcon}
              alt="reduxIcon"
              style={{ width: "37px", height: "50px", marginLeft: "5px" }}
            />
            <div className={style.stackTitle}>Redux</div>
          </div>
          <div className={style.stackBlock}>
            <Image
              src={nodeIcon}
              alt="nodeIcon"
              style={{ width: "37px", height: "50px", marginLeft: "7px" }}
            />
            <div className={style.stackTitle}>Node.js</div>
          </div>
          <div className={style.stackBlock}>
            <Image
              src={tsIcon}
              alt="tsIcon"
              style={{ width: "37px", height: "50px", marginLeft: "20px" }}
            />
            <div className={style.stackTitle}>TypeScript</div>
          </div>
        </div>
      </div>
      <ParallaxProvider>
        <Parallax startScroll={0} endScroll={800}>
          <Image
            src={uploadLettersCard}
            id="uploadLettersCard"
            className={style.dataConceptCard}
            alt="dataConceptCard"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Parallax>
        <Parallax
          startScroll={0}
          endScroll={1800}
          translateY={["800px", "-500px"]}
        >
          <div className={style.aboutContainer}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th
                    className={style.tableTitle}
                    scope="col"
                    style={{ width: "20%" }}
                  >
                    CLIENT
                  </th>
                  {/* <th
                    className={style.tableTitle}
                    scope="col"
                    style={{ width: "10%" }}
                  >
                    TIMELINE
                  </th> */}
                  <th
                    className={style.tableTitle}
                    scope="col"
                    style={{ width: "25%" }}
                  >
                    SERVICES
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={style.tableDescr}>UploadLetters</td>
                  {/* <td className={style.tableDescr}>8 weeks</td> */}
                  <td className={style.tableDescr}>Development</td>
                </tr>
              </tbody>
            </table>
            <Parallax
              startScroll={300}
              endScroll={1800}
              translateX={["-800px", "0px"]}
            >
              <Image
                src={aboutTitle}
                alt="aboutTitle"
                style={{ width: "40%", height: "40%" }}
              />
            </Parallax>
            <Parallax
              startScroll={100}
              endScroll={1900}
              translateX={["800px", "0px"]}
            >
              <div className={style.aboutCard}>
                <div className={style.aboutBlockTitle}>Advantages</div>
                <div className={style.aboutBlockDescr}>
                  <Image
                    src={numberIcon1}
                    alt="numberIcon1"
                    style={{ width: "28px", height: "24px" }}
                  />
                  Schedule sendings of digital documents by USPS takes less than
                  minute
                </div>
                <div className={style.aboutBlockDescr}>
                  <Image
                    src={numberIcon2}
                    alt="numberIcon2"
                    style={{ width: "28px", height: "24px" }}
                  />
                  OCR recipient address scrapping
                </div>
                <div className={style.aboutBlockDescr}>
                  <Image
                    src={numberIcon3}
                    alt="numberIcon3"
                    style={{ width: "28px", height: "24px" }}
                  />
                  Fast tracking and access to digital post service documents
                </div>
                <div className={style.aboutBlockDescr}>
                  <Image
                    src={numberIcon4}
                    alt="numberIcon4"
                    style={{ width: "28px", height: "24px" }}
                  />
                  External letter sending API for enterprise customers
                </div>
              </div>
            </Parallax>
            <Parallax
              startScroll={200}
              endScroll={2000}
              translateX={["800px", "0px"]}
            >
              <div className={style.aboutCard}>
                <div className={style.aboutBlockTitle}>Customer goal</div>
                <div className={style.aboutBlockDescr}>
                  Partner with/Find a software development agency which:
                </div>
                <div className={style.aboutBlockDescr}>
                  <Image
                    src={numberIcon1}
                    alt="numberIcon1"
                    style={{ width: "28px", height: "24px" }}
                  />
                  Able to analyse and design prototype based on requirements
                </div>
                <div className={style.aboutBlockDescr}>
                  <Image
                    src={numberIcon2}
                    alt="numberIcon2"
                    style={{ width: "28px", height: "24px" }}
                  />
                  Create a branding, UI kit, logo. Build product website
                </div>
                <div className={style.aboutBlockDescr}>
                  <Image
                    src={numberIcon3}
                    alt="numberIcon3"
                    style={{ width: "28px", height: "24px" }}
                  />
                  Build a cost-efficient web application with enterprise ambitions
                </div>
                <div className={style.aboutBlockDescr}>
                  <Image
                    src={numberIcon4}
                    alt="numberIcon4"
                    style={{ width: "28px", height: "24px" }}
                  />
                  Apply post-production support and customers onboarding
                </div>
              </div>
            </Parallax>
          </div>
        </Parallax>
        <Parallax
          startScroll={1600}
          endScroll={2400}
          translateY={["-350px", "-900px"]}
        >
          <div className={style.researchContainer}>
            <Parallax
              startScroll={600}
              endScroll={2600}
              translateX={["-800px", "0px"]}
            >
              <Image
                src={researchTitle}
                alt="researchTitle"
                style={{ width: "70%", height: "70%" }}
              />
            </Parallax>
            <Parallax
              startScroll={700}
              endScroll={2800}
              translateX={["800px", "50px"]}
            >
              <div className={style.researchCard}>
                <div className={style.researchBlockTitle}>Problem</div>
                <div className={style.researchBlockDescr}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
            </Parallax>
            <Parallax
              startScroll={800}
              endScroll={2900}
              translateX={["800px", "50px"]}
            >
              <div className={style.researchCard}>
                <div className={style.researchBlockTitle}>Solution</div>
                <div className={style.researchBlockDescr}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
            </Parallax>
            {/* <div>
              <Image
                src={dataConceptJobs1}
                className={style.dataConceptJobs}
                alt="dataConceptJobs"
                style={{
                  width: "90%",
                  height: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "flex",
                  marginBottom: "32px",
                }}
              />
            </div>
            <div>
              <Image
                src={dataConceptJobs2}
                className={style.dataConceptJobs}
                alt="dataConceptJobs"
                style={{
                  width: "90%",
                  height: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "flex",
                  marginBottom: "32px",
                }}
              />
            </div>
            <div>
              <Image
                src={dataConceptJobs3}
                className={style.dataConceptJobs}
                alt="dataConceptJobs"
                style={{
                  width: "90%",
                  height: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "flex",
                }}
              />
            </div> */}
          </div>
        </Parallax>
        <Parallax translateY={["-700px", "0px"]}>
          <div className={style.getTouchWrapper}>
            <GetTouch borderRadius="60px 60px 0px 0px" />
          </div>
        </Parallax>
        <Footer />
      </ParallaxProvider>
    </div>
  );
};

export default UploadlettersPage;
