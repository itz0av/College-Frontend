import React from 'react'
import Navbar from './Sections/Navbar'
import HeroSection from './Sections/HeroSection'
import NewsSection from './Sections/NewsSection'
// import Testing from ./Components/Example"
import Tap from "./Sections/TapSection"
import AboutUs from './Sections/AboutUs'
import Testimonials from './Sections/Testimonials'
import Programs from './Sections/Programs'
import Gallary from './Sections/Gallary'
import Footer from './Sections/Footer'
import Events from './Sections/Events'
const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center overflow-hidden'>
   <Navbar/>
   <HeroSection/>
   <Tap/>
   <AboutUs/>
   <NewsSection/>
   <Events/>
   <Programs/>
   <Testimonials/>
   <Gallary/>
   <Footer/>
    </div>
  )
}

export default HomePage
