import React from "react";
import Header from "@/components/Header/Header";
import GetTouch from "@/components/GetTouch/GetTouch";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import style from "@/pages/services/flutter.module.css";
import flutterHeroIcon from "../../assets/img/flutter-hero-icon.svg";
import webIcon from "../../assets/img/websapp-icon.svg";
import uiIcon from "../../assets/img/uiux-icon.svg";
import mvpIcon from "../../assets/img/mvp-icon.svg";
import marketIcon from "../../assets/img/market-icon.svg";
import qualityIcon from "../../assets/img/quality-icon.svg";
import titleBG from "../../assets/img/title-background.svg";
import numberIcon1 from "../../assets/img/numberIcon1.svg";
import numberIcon2 from "../../assets/img/numberIcon2.svg";
import numberIcon3 from "../../assets/img/numberIcon3.svg";
import OurWorks from "@/components/OurWorks/OurWorks";
import FAQ from "@/components/FAQ/FAQ";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const FlutterPage = () => {
  const handleClickScroll = (e) => {
    e.preventDefault();
    var element = document.getElementById("getInTouch");
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset + 1500;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.container}>
      <Header showGetTouchBtn />
      <div className={style.startupsTitleContainer}>
        <div className={style.startupsTitleBlock}>
          <div>
            <div className={style.startupsTitle}>
            Flutter cross- <br /> platform <br /> mobile apps <br /> development
            </div>
            <div className={style.startupsDescr}>
              <div>
              We develop powerful, native-like mobile apps for iOS and Android faster and cheaper taking a cross-platform advantage.
              </div>
            </div>
          </div>
          <div className={style.cardContainer}>
            <div className={style.cardBlock}>
              <div className={style.card1}>
                <Image src={flutterHeroIcon} alt="flutterHeroIcon" className={style.heroImage} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ParallaxProvider>
        <Parallax
          startScroll={0}
          endScroll={700}
          translateY={["0px", "-200px"]}
          className={style.staticParallax}
        >
          <div className={style.whatCanDoContainer}>
            <Parallax
              startScroll={0}
              endScroll={500}
              translateX={["-800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.whatCanDoTitle}>
                Flutter<br /> benefits
              </div>
            </Parallax>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={200}
                  endScroll={800}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.cardWithoutBorder}>
                    <div className={style.whatCanDoBlockDescr}>
                      Proof of Concept is an experimental software designed to
                      test whether your idea is technically feasible. It is
                      mainly used to prove investors that your idea is not just
                      a dream, but something real that can be done. You can also
                      use it for your own experiments to make things work.
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  startScroll={400}
                  endScroll={1000}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoCard}>
                  <Image
                    src={numberIcon1}
                    alt="numberIcon1"
                    className={style.numberIcon1}
                  />
                    <div className={style.whatCanDoBlockTitle}>Faster time to <br /> market</div>
                  </div>
                </Parallax>
                <Parallax
                  startScroll={700}
                  endScroll={1300}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoCard}>
                  <Image
                    src={numberIcon2}
                    alt="numberIcon2"
                    className={style.numberIcon}
                  />
                    <div className={style.whatCanDoBlockTitle}>Cheaper <br /> development</div>
                  </div>
                </Parallax>
                <Parallax
                  startScroll={1000}
                  endScroll={1600}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoCard}>
                  <Image
                    src={numberIcon3}
                    alt="numberIcon3"
                    className={style.numberIcon}
                  />
                    <div className={style.whatCanDoBlockTitle}>Native speed and <br /> functionality</div>
                  </div>
                </Parallax>
                <Parallax
                  startScroll={1300}
                  endScroll={1900}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoCard}>
                  <div className={style.whatCanDoBlockTitle}>Cross-platform <br />  development</div>
                    <div className={style.whatCanDoBlockDescr}>
                    You write code one time and then build iOS and Android apps. No need to write code two times for each platform, no need to hire two developers. This is how Flutter saves time and budget.
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  startScroll={1600}
                  endScroll={2200}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoCard}>
                  <div className={style.whatCanDoBlockTitle}>Native performance and features</div>
                    <div className={style.whatCanDoBlockDescr}>
                    Flutter apps work as fast as native ones. They also have access to hardware features such as camera, microphone, GPS, compass, accelerometer etc. It makes Flutter a viable alternative to native development.
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  startScroll={1900}
                  endScroll={2500}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoCard}>
                  <div className={style.whatCanDoBlockTitle}>MVP</div>
                    <div className={style.whatCanDoBlockDescr}>
                    Minimal Viable Product has a minimum set of core features enough for your real customers to try it. It helps to get feedback from your target audience to find out if there is demand and what to do next. If you have an MVP and a positive market feedback your chance to get investors money skyrockets 🚀
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          startScroll={1200}
          endScroll={1900}
          translateY={["-100px", "-450px"]}
          className={style.staticParallax}
        >
          <div className={style.researchContainer}>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={1300}
                  endScroll={1800}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.researchSubTitle}>
                    Growing <br /> startups
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={1300}
                  endScroll={1900}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.researchCard}>
                    <div className={style.whatCanDoBlockTitle}>Web apps</div>
                    <div className={style.whatCanDoBlockDescr}>
                      Full-cycle development from scratch. Frontend, backend,
                      user interface/experience, QA, post-release support. We
                      gather your requirements, decide on optimal architecture,
                      technology and frameworks, develop, test, and release.
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  startScroll={1500}
                  endScroll={2100}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.researchCard}>
                    <div className={style.whatCanDoBlockTitle}>Mobile apps</div>
                    <div className={style.whatCanDoBlockDescr}>
                      Multiplatform and native mobile apps (iOS, Android).
                      Full-cycle development from requirement gathering to App
                      Store & Google Play Approval.
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  startScroll={1750}
                  endScroll={2400}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.researchCard}>
                    <div className={style.whatCanDoBlockTitle}>SaaS</div>
                    <div className={style.whatCanDoBlockDescr}>
                      Software as a service is a multi-platform ecosystem
                      (mobile, web, desktop) based on cloud infrastructure. It
                      is designed to give value to users, earn money for
                      subscriptions and gain better data-based understanding to
                      make grounded marketing decisions.
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  startScroll={2100}
                  endScroll={2800}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.researchCard}>
                    <div className={style.whatCanDoBlockTitle}>UI/UX</div>
                    <div className={style.whatCanDoBlockDescr}>
                      Intuitive modern up-to-trend design for your app. Made
                      from scratch or by updating an existing one. We start with
                      a UX (user experience) audit to make your app simple to
                      use, fast to learn and fun to interact with.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          startScroll={2500}
          endScroll={3400}
          translateY={["200px", "-650px"]}
          className={style.staticParallax}
        >
          <div className={style.whatCanDoContainer}>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={2800}
                  endScroll={3400}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoSubTitle}>
                    Fast- <br /> growing <br /> startups
                  </div>
                  <div className={style.whatCanDoSubTitleDesktop}>
                    Fast- <br /> growing <br /> startups
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={2800}
                  endScroll={3400}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoCard}>
                    <div className={style.whatCanDoBlockTitle}>Scaling</div>
                    <div className={style.whatCanDoBlockDescr}>
                      When your product starts growing fast it is important to
                      handle the load properly to avoid downtimes and bad user
                      experience. Many businesses failed here! Let us upgrade
                      your architecture and infrastructure and help to scale
                      smoothly, providing a great user experience for your
                      customers.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          startScroll={3200}
          endScroll={3900}
          translateY={["-500px", "-850px"]}
          className={style.staticParallax}
        >
          <div className={style.researchContainer}>
            <Parallax
              startScroll={3300}
              endScroll={3900}
              translateX={["-800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.valueTitle}>
                The value <br /> we give
              </div>
            </Parallax>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={3900}
                  endScroll={4400}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.subTitleFlex}>
                    <Image
                      src={marketIcon}
                      alt="market"
                      className={style.valueSubTitleIcon}
                    />
                    <div className={style.valueSubTitle}>
                      Go to <br /> market <br /> faster
                    </div>
                    <div className={style.valueSubTitleDesktop}>
                      Go to market faster
                    </div>
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={3900}
                  endScroll={4400}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.valueCard}>
                    <div className={style.whatCanDoBlockDescr}>
                      It is vital for startups to launch and update apps faster
                      than competitors. It takes up to several months to build
                      an in-house team: hiring, onboarding, setting up
                      workflows. Your competitors won’t wait for you to do it.
                      They already released their applications and attracted new
                      users.
                      <br />
                      <br />
                      Having an outsourced development partner is like steroids
                      that make you faster and stronger. Our experienced,
                      well-cohesive (like Navy Seals) team is ready to start
                      immediately. Minimum bureaucracy combined with our own
                      best practices gives you enough speed to win a competitive
                      race.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
            <div className={style.line}></div>

            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={4200}
                  endScroll={4700}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.subTitleFlex}>
                    <Image
                      src={qualityIcon}
                      alt="market"
                      className={style.valueSubTitleIcon}
                    />
                    <div className={style.valueSubTitle}>
                      Decent <br /> quality, <br /> less costs
                    </div>
                    <div className={style.valueSubTitleDesktop}>
                      Decent quality, less costs
                    </div>
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={4200}
                  endScroll={4700}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.valueCard}>
                    <div className={style.whatCanDoBlockDescr}>
                      Every startup has to deal with budget limitations and
                      spend wisely. The more you pay for development the less
                      money remains for marketing and sales. Local dev’s
                      salaries are high and you have to pay for perks and an
                      office.
                      <br />
                      <br />
                      Our team is located in Eastern Europe where salaries are
                      not as high as in your region. You get a team of
                      experienced developers for reasonable offshore prices. Our
                      expertise, best practices and senior developers assure
                      quality work and smooth delivery.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
            <div className={style.line}></div>

            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={4600}
                  endScroll={5100}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.subTitleFlex}>
                    <div className={style.valueSubTitle}>Flexibility</div>
                    <div className={style.valueSubTitleDesktop}>
                      Flexibility
                    </div>
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={4600}
                  endScroll={5100}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.valueCard}>
                    <div className={style.whatCanDoBlockDescr}>
                      Launching a startup, you have to change fast. It is common
                      to experiment with features, design and positioning.
                      Sometimes you have to pivot or scale really fast. It is
                      important to have a partner who understands it and gives
                      you enough support and options.
                      <br />
                      <br />
                      Working with us you can easily start, stop and pause a
                      partnership any time and change scope of work, team
                      structure, technologies, and frameworks easily. Due to the
                      time & material model you pay for a 1-2 weeks sprint. It
                      gives flexibility and saves your budget.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
            <div className={style.line}></div>
          </div>
        </Parallax>

        <Parallax
          startScroll={5100}
          endScroll={5800}
          translateY={["-100px", "-850px"]}
          className={style.staticParallax}
        >
          <div className={style.getTouchContainer}>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={5700}
                  endScroll={6200}
                  //   translateX={["-800px", "0px"]}
                  // opacity={[0,1]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoSubTitle}>
                    Have a startup? <br /> Share your thoughts <br /> with us
                  </div>
                  <div className={style.whatCanDoSubTitleDesktop}>
                    Have a startup? <br /> Share your thoughts <br /> with us
                  </div>
                </Parallax>
                <button
                  className={style.getTouchButton}
                  onClick={handleClickScroll}
                >
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          startScroll={5300}
          endScroll={6500}
          translateY={["-100px", "-950px"]}
          className={style.staticParallax}
        >
          <div className={style.whatCanDoContainer}>
            <Parallax
              startScroll={2600}
              endScroll={3600}
              translateX={["-800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.whatCanDoTitle}>
                Our main <br /> strengths
              </div>
            </Parallax>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={3000}
                  endScroll={3800}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.subTitleFlex}>
                    <div className={style.strengthsSubTitleDesktop}>
                      Elite enterprise <br /> training + startup <br /> mindset
                    </div>
                    <div className={style.strengthsSubTitle}>
                      Elite enterprise training + startup mindset
                    </div>
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={3200}
                  endScroll={3800}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.strengthsCard}>
                    <div className={style.strengthsDescription}>
                      Most of our developers combine work experience in top
                      software development enterprises and startups. We hunt for
                      this kind of devs.
                      <br />
                      <br />
                      Previous work in top enterprises gives the best training
                      and mentorship, experience in expensive complex projects,
                      and access to top-notch expertise and connections.
                      <br />
                      <br />
                      Startup experience teaches to work under budget and time
                      limits in a highly competitive environment, making you
                      creative in finding optimal solutions.
                      <br />
                      <br />
                      As a result, our developers understand startups’
                      challenges, feel their unique vibe and apply their elite
                      enterprise-level skills to give maximum value.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
            <div className={style.line}></div>

            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax>
                  <div className={style.subTitleFlex}>
                    <div className={style.strengthsSubTitleDesktop}>
                      Minimum bureaucracy <br /> and quick communication
                    </div>
                    <div className={style.strengthsSubTitle}>
                      Minimum bureaucracy and quick communication
                    </div>
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={3600}
                  endScroll={4100}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.strengthsCard}>
                    <div className={style.strengthsDescription}>
                      It is important to communicate and make decisions quickly
                      doing projects for startups. It assures a proper speed and
                      quality of work. We built our teams and processes in a way
                      to get it.
                      <br />
                      <br />
                      The hierarchical structure of a superior core team and
                      inferior support teams helps to scale projects almost
                      infinitely preserving speed and flexibility of small
                      companies.
                      <br />
                      <br />
                      You mainly communicate with our core team of senior
                      developers and architects who lead, supervise and make key
                      decisions for every project. They are highly available to
                      discuss things at any time.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
            <div className={style.line}></div>

            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={4100}
                  endScroll={4600}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.subTitleFlex}>
                    <div className={style.strengthsSubTitleDesktop}>
                      Our own frameworks <br /> and best practices
                    </div>
                    <div className={style.strengthsSubTitle}>
                      Our own frameworks and best practices
                    </div>
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={4100}
                  endScroll={4600}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.strengthsCard}>
                    <div className={style.strengthsDescription}>
                      Experience and knowledge is the main thing in software
                      development that assures quality work. We treat it
                      seriously and accumulate knowledge, experience and
                      insights doing every new project to create our own best
                      practices, frameworks and ready-made solutions. It helps
                      to deliver projects easier, faster and less expensively.
                      This is a way we give you a competitive advantage.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
            <div className={style.line}></div>
          </div>
        </Parallax>
        <Parallax
          startScroll={8000}
          endScroll={12900}
          translateY={["-1300px", "0px"]}
          className={style.staticParallax}
        >
          <OurWorks className={style.ourWorksContainer} />
          <FAQ />
          <div className={style.getTouchWrapper}>
            <GetTouch borderRadius="60px 60px 0px 0px" />
            <Footer />
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default FlutterPage;