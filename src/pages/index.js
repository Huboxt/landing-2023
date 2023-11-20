import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Parallax, ParallaxProvider} from 'react-scroll-parallax';
import Head from 'next/head';
import Header from '../components/Header/Header';
import FirstBlock from '../components/FirstBlock/FirstBlock';
import Service from '../components/Service/Service';
import OurWorks from '../components/OurWorks/OurWorks';
import Industries from '../components/Industries/Industries.jsx';
import Clutch from '../components/Clutch/Clutch';
import FAQ from '../components/FAQ/FAQ';
import GetTouch from '../components/GetTouch/GetTouch';
import Footer from '../components/Footer/Footer';
import Terms from './termspolicy/terms';
import Policy from './termspolicy/policy';
import SecondBlock from '../components/SecondBlock/SecondBlock';
import ThirdBlock from '../components/ThirdBlock/ThirdBlock';
import FourthBlock from '../components/FourthBlock/FourthBlock';
import FifthBlock from '../components/FifthBlock/FifthBlock';
import style from './index.module.css';
import OurWorksPage from './our-works-page';
import StartupsPage from './services/startups';
import DataConceptPage from './projects/data-concept';
import LeadsPage from './projects/leads';
import MmsPage from './projects/mms';
import UploadlettersPage from './projects/uploadletters';
import PetmateAI from './projects/petmate';
import FlutterPage from './services/flutter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const [allowHover, setAllowHover] = useState(false)

  const router = useRouter();

  const myEndFunction = () => {
    setAllowHover(true)
  }
  const handleScrollServices = (e) => {
    e.preventDefault();
    if(allowHover){
      var element = document.getElementById('services');
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset;      
      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
    }
  }
 
  useEffect(() => {
    if (process.browser){
      document.getElementById("whiteBackground")?.addEventListener('animationend', myEndFunction)
    }
    return() => {
      document.getElementById("whiteBackground")?.removeEventListener('animationend', myEndFunction)
    }
  },[])
  
  const darker = (percentage, id) => {
    // if(percentage > 0.08 && percentage < 0.5){
    //   document.getElementById(id).style.opacity = 0.3 - percentage
    // } 
    // else{
    //   if(percentage > 0.7){
    //     document.getElementById(id).style.opacity = 0.7
    //   } 
    //   else{
    //     document.getElementById(id).style.opacity = percentage - 0.2
    //   }
    // }
  }
  return (
    <>
      <Head>
        <title>Software Development Company - HUBOXT</title>
        <meta name="description" content="HUBOXT - custom software development company. Web Development ✔️ UI/UX ✔️ Mobile Development ✔️ API Integration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "HUBOXT",
              "url": "https://huboxt.com/",
              "logo": "https://huboxt.com/_next/static/media/oxt.0b4789e2.svg",
              "email": "sales@huboxt.com",
              "telephone": "[+351963770487]"
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Software Development Company",
              "url": "https://huboxt.com/",
              "description": "Straight-up software development",
              "startDate": "2023-06-29",
              "endDate": "2023-10-29",
              "image": "https://huboxt.com/_next/static/media/thirdBlockIcon.8348d987.svg",
              "performer": "HUBOXT",
              "location": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Tornimäe tn 3 // 5 // 7",
                  "addressLocality": "Tallinn",
                  "addressRegion": "Kesklinna linnaosa",
                  "postalCode": "10145",
                  "addressCountry": "Estonia"
                }
              },
              "offers": {
                "@type": "Offer",
                "description": "Straight-up software development",
                "url": "https://huboxt.com/",
                "price": 150,
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Head>
      <main>
        <div className={style.firstScreenWrapper}>
          <div className={style.container}>
            <div>
              <Header mainHeaderStyle offsetPosition={9200}/>
              <FirstBlock />
            </div>
            <div className={style.skillsWrapper}>
              <div className={`${style.block} ${allowHover ? style.blockHover3 : ""}`} onClick={handleScrollServices}>
                <span className={style.name}>
                  Management
                  <div className={style.whiteBackground}>
                  Management 
                  </div>
                </span>
                <span className={style.description}>Orchestrating efficiency  through proactive management solutions</span>
              </div>
              <div className={`${style.block} ${allowHover ? style.blockHover2 : ""}`} onClick={handleScrollServices}>
                <span className={style.name}>
                  Design
                <div className={style.whiteBackground}>
                  Design
                </div>
                </span>
                <span className={style.description}>Transforming vision into seamless user interfaces</span>
              </div>
              <div className={`${style.block} ${allowHover ? style.blockHover : ""}`} onClick={handleScrollServices}>
                <span className={style.name}>
                 Development
                 <div id="whiteBackground" className={style.whiteBackground}>
                 Development
                 </div>
                </span>
                <span className={style.description}>Empowering your growth through expert development services</span>
              </div>
            </div>
          </div>
          <div className={style.skillsWrapperMobile}>
              <div className={`${style.block} ${allowHover ? style.blockHover : ""}`} onClick={handleScrollServices}>
                <span className={style.name}>
                  Development
                  <div className={style.whiteBackground}>
                  Development
                  </div>
                </span>
              </div>
              <div className={`${style.block} ${allowHover ? style.blockHover : ""}`} onClick={handleScrollServices}>
                <span className={style.name}>
                  Design
                <div className={style.whiteBackground}>
                  Design
                </div>
                </span>
              </div>
              <div className={`${style.block} ${allowHover ? style.blockHover : ""}`} onClick={handleScrollServices}>
                <span className={style.name}>
                 Management
                 <div id="whiteBackground" className={style.whiteBackground}>
                 Management
                 </div>
                </span>
              </div>
            </div>
        </div>
          <ParallaxProvider>
            <Parallax startScroll={0} endScroll={700} translateY={['0px', '-200px']}>
                <SecondBlock />
                <div id="darkBg" className={style.background}></div>
            </Parallax>
            <Parallax startScroll={400} endScroll={1200} translateY={['-100px', '-450px']} onProgressChange={(percentage) => darker(percentage, "darkBg")}>
                <ThirdBlock />
                <div id="darkBg1" className={style.background}></div>
            </Parallax>
            {/* <Parallax startScroll={900} endScroll={1500} translateY={['-330px', '-600px']} onProgressChange={(percentage) => darker(percentage, "darkBg1")}>
              <FourthBlock />
              <div id="darkBg2" className={style.background}></div>
            </Parallax>
            <Parallax startScroll={1400} endScroll={2000} translateY={['-600px', '-800px']} onProgressChange={(percentage) => darker(percentage, "darkBg2")}>
              <FifthBlock />
              <div id="darkBg3" className={style.background}></div>
            </Parallax> */}
            <Parallax startScroll={900} endScroll={1500} translateY={['-130px', '-450px']} onProgressChange={(percentage) => darker(percentage, "darkBg1")}>
            <Service />
              <div id="darkBg2" className={style.background}></div>
            </Parallax>
            <Parallax startScroll={1400} endScroll={10000} translateY={['-800px', '0px']} onProgressChange={(percentage) => darker(percentage, "darkBg3")}>
              <OurWorks />
              <Industries />
              <Clutch />
              <FAQ />
              <GetTouch />
              <Footer />
            </Parallax>
          </ParallaxProvider>
          <ToastContainer />
          {router.pathname === '/our-works-page' && <OurWorksPage />}
          {router.pathname === '/data-concept' && <DataConceptPage />}
          {router.pathname === '/leads' && <LeadsPage />}
          {router.pathname === '/mms' && <MmsPage />}
          {router.pathname === '/uploadletters' && <UploadlettersPage />}
          {router.pathname === '/petmate' && <PetmateAI />}
          {router.pathname === '/startups' && <StartupsPage />}
          {router.pathname === '/flutter' && <FlutterPage />}
          {router.pathname === '/terms' && <Terms />}
          {router.pathname === '/policy' && <Policy />}
      </main>
    </>
  )
}
