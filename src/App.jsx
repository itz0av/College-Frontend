import './App.css'

import Navbar from './Sections/Navbar'
import HeroSection from './Sections/HeroSection'
import NewsSection from './Sections/NewsSection'
import Testing from "./Components/Example"
import Tap from "./Sections/TapSection"
import AboutUs from './Sections/AboutUs'
function App() {

  return (
    <div className='flex flex-col items-center justify-center overflow-hidden'>
   <Navbar/>
   <HeroSection/>
   <Tap/>
   <AboutUs/>
   <NewsSection></NewsSection>
    </div>
  )
}

export default App
