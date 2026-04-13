import React from 'react'
import LandingPage from './component/LandingPage/LandingPage'
import SectionService from './component/NextSectionPage/SectionService'
import OurService from './component/OurService/OurService'
import IndustrySlider from './component/IndustriesServe/ServedIndus'
import Achievements from './component/Achievements/Achievements'
import WhyChooseUs from './component/WhyChooseUs/WhyChooseUs'
import WorkingProcess from './component/Process/Process'
import FooterPart from './component/Footer/Footer'
import Placements from './component/Placements/Placements'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AboutPage from './pages/About/AboutPage'
import { Link } from 'react-router-dom'
import ServicePage from './pages/ServicePage/ServicePage'
import Gallery from './pages/Gallery/Gallery'
import Refer from './pages/Referandearn/Refer'
import ContactUs from './pages/ContactUs/ContactUs'
import Jobs from './pages/Jobs/Jobs'
import JobDetails from './pages/Jobs/JobDeatails'
import ServiceDetail from './component/OurService/ServiceDetail'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element=
        {
          <>
      <LandingPage/>
      <SectionService/>
      <OurService/>
      <IndustrySlider/>
      <Achievements/>
      <WhyChooseUs/>
      <Placements/>
      <WorkingProcess/>
      </>
        }/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path="/servicepart" element={<ServicePage />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/refer-earn' element={<Refer/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path="/job" element={<Jobs />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
      <FooterPart/>
    </div>
    
  )
}

export default App