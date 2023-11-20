import DataConceptCard from '../../assets/img/dataConceptCard.svg';
import SegmaCard from '../../assets/img/segmaCard.svg';
import LeadsCard from '../../assets/img/leadsCard.png';
import uploadLettersCard from '../../assets/img/uploadLettersCard.svg';
import petmateCard from '../../assets/img/petmateCard.svg';
import fleetInsiderCard from '../../assets/img/fleetInsiderCard.svg';
import cardBookingCard from '../../assets/img/cardBookingCard.svg';
import DMSCard from '../../assets/img/DMSCard.svg';
import DatBiCard from '../../assets/img/DatBiCard.svg';


export const projects = [
  {
    id: '1',
    title: "PetmateAI", 
    description: "It is how we helped to hit the market fast. It took 2 months from just an idea of the app to App Store and Google Play publication. Petmate.ai is a chat-like mobile application that answers any question about keeping, training and treating your pet.",
    folder: 'projects',
    Image: petmateCard,
    page: "petmate",
    tags: "design, development, GPTChat integration"
  },
  {
    id: '2',
    title: "UploadLetters", 
    description: "This is how we launched an early version of a SaaS product and made it comply with the United States Postal Service regulations. UploadLetters is an app where you submit your PDF document online in a few clicks and your partner receives physical mail in an envelope delivered by USPS.",
    folder: 'projects',
    Image: uploadLettersCard,
    page: "uploadletters",
    tags: "design, development, USPS integration, OCR"
  },
  {
    id: '3',
    title: "DataConcept", 
    description: "Here is an example of how we scaled an application that unpredictably grew much faster than expected. Dataconcept is a middle-layer data aggregation service for a marketing agency that handles more than 2 million requests per day.",
    Image: DataConceptCard,
    folder: 'projects',
    page: "data-concept",
    tags: "design, development, management"
  },
  {
    id: '4',
    title: "Leads", 
    description: "We created an SMS & Email marketing platform that enables businesses to create, manage, and execute marketing campaigns through text messages.",
    Image: LeadsCard,
    folder: 'projects',
    page: "leads",
    tags: "design, twilio integration, sms/email sending"
  },
  {
    id: '5',
    title: "DMS/MMS", 
    description: "Introducing our all-in-one Asset Maintenance App, meticulously crafted by our IT agency. We’ve combined cutting-edge development and elegant design to simplify asset management like never before. From maintenance schedules to sending scheduled reports, our app has got you covered.",
    Image: DMSCard,
    folder: 'projects',
    page: "mms",
    tags: "design, development, management"
  },
  {
    id: '6',
    title: "Segma", 
    description: "Our IT agency has given the SMS Marketing application a stunning makeover. We’ve redesigned the user interface to make every action smoother, faster and easier. The interface has become sleek and user-friendly, and navigating through campaigns, analyzing data, and managing contacts has never been so effortless.",
    Image: SegmaCard,
    page: "segma",
    tags: "design, development, management"
  },
  {
    id: '7',
    title: "FleetInsider", 
    description: "The fast changing world of web development has expanded our skill set and has made us experienced in all major ui frameworks, which makes your application look nice and modern while being and fast.",
    Image: fleetInsiderCard,
    page: "fleetInsider",
    tags: "design, development, management"
  },
  {
    id: '8',
    title: "Car Booking service", 
    description: "Our IT agency has unleashed its creative prowess to craft a captivating design for a Car Booking service mobile app. We specialize in a seamless, visually stunning interface that makes booking a car a breeze.",
    Image: cardBookingCard,
    page: "carbookingservice",
    tags: "design, development, management"
  },
  {
    id: '9',
    title: "Datbi", 
    description: "Our IT agency crafted a stunning landing page for a Data Analytics company. We specialize in creating engaging, user-centric web solutions that make data come alive. Explore how we turn complex data into an inviting, informative experience.",
    Image: DatBiCard,
    page: "datbi",
    tags: "design, development, management"
  }
]