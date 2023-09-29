import React from "react";
import Header from "@/components/Header/Header";
import GetTouch from "@/components/GetTouch/GetTouch";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import dataConceptCard from "../../assets/img/dataConceptCard.svg";
import aboutTitle from "../../assets/img/aboutTitle.svg";
import researchTitle from "../../assets/img/researchTitle.svg";
import golangIcon from "../../assets/img/stackIcons/golang-icon.svg";
import mysqlIcon from "../../assets/img/stackIcons/mysql-icon.svg";
import tsIcon from "../../assets/img/stackIcons/typescript.svg";
import nodeIcon from "../../assets/img/stackIcons/node-js.svg";
import style from "@/pages/projects/dataConceptPage.module.css";
import dataConceptTitle from "./dataConceptTitle.svg";
import dataConceptJobs1 from "./data-concept-jobs1.svg";
import dataConceptJobs2 from "./data-concept-jobs2.svg";
import dataConceptJobs3 from "./data-concept-jobs3.svg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const DataConceptPage = () => {
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
          src={dataConceptTitle}
          alt="dataConceptTitle"
          className={style.dataConceptTitle}
        />
      </div>
      <div className={style.dataConceptDescr}>
        <div>
          <div className={style.description}>
            The fast changing world of web development has <br />
            expanded our skill set and has made us experienced in <br />
            all major ui frameworks, which makes your application <br />
            look nice and modern while being and fast.
          </div>
          <button className={style.needSameButton} onClick={handleClickScroll}>
            I NEED THE SAME!
          </button>
        </div>
        <div  className={`${style.stackContainer} ${style.dataConceptStackContainer}`}>
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
        </div>
      </div>
      <ParallaxProvider>
        <Parallax style={{ display: "flex", justifyContent: "center" }}>
          <video autoPlay loop muted playsInline className={style.video}>
            <source src="/dataconcept-video.mp4" type="video/mp4" />
          </video>
        </Parallax>
        <Parallax
          startScroll={800}
          endScroll={1500}
          translateY={["50px", "-200px"]}
        >
          <div className={`${style.aboutContainer} ${style.dataConceptAboutMargin}`}>
          <div className={style.table}>
              <div>
                <div className={style.tableTitle}>CLIENT</div>
                <div className={style.tableDescr}>Uploadletters</div>
              </div>
              <div>
                <div className={style.tableTitle}>TEAM</div>
                <div className={style.tableDescr}>6</div>
              </div>
              <div>
                <div className={style.tableTitle}>TIMELINE</div>
                <div className={style.tableDescr}>14 months</div>
              </div>
              <div>
                <div className={style.tableTitle}>SERVICES</div>
                <div className={style.tableDescr}>Development</div>
              </div>
            </div>
            <Parallax
              startScroll={300}
              endScroll={1100}
              translateX={["-800px", "0px"]}
              className={style.staticParallax}
            >
              <Image
                src={aboutTitle}
                alt="aboutTitle"
                style={{ width: "40%", height: "40%" }}
              />
            </Parallax>
            <Parallax
              startScroll={100}
              endScroll={1400}
              translateX={["800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.aboutCard}>
                <div className={style.aboutBlockTitle}>UI/UX Design</div>
                <div className={style.aboutBlockDescr}>
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
              startScroll={200}
              endScroll={1500}
              translateX={["800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.aboutCard}>
                <div className={style.aboutBlockTitle}>Development</div>
                <div className={style.aboutBlockDescr}>
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
          </div>
        </Parallax>
        <Parallax
          startScroll={1300}
          endScroll={2000}
          translateY={["-100px", "-300px"]}
        >
          <div className={style.researchContainer}>
            <Parallax
              startScroll={1500}
              endScroll={2000}
              translateX={["-800px", "0px"]}
              className={style.staticParallax}
            >
              <Image
                src={researchTitle}
                alt="researchTitle"
                style={{ width: "70%", height: "70%" }}
              />
            </Parallax>
            <Parallax
              startScroll={300}
              endScroll={2000}
              translateX={["800px", "50px"]}
              className={style.staticParallax}
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
              startScroll={400}
              endScroll={2100}
              translateX={["800px", "50px"]}
              className={style.staticParallax}
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
          </div>
        </Parallax>
        <Parallax >
          <div className={style.dataConceptCardsMargin}>
            <Image
              src={dataConceptCard}
              id="dataConceptCard"
              className={style.dataConceptCard}
              alt="dataConceptCard"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div>
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
          </div>
        </Parallax>
      </ParallaxProvider>
      <div>
        <div className={style.getTouchWrapper}>
          <GetTouch borderRadius="60px 60px 0px 0px" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DataConceptPage;
