
import HeroSection from './heroSection/hero'

import AboutUsBanner from './AboutUsBanner'
import AgroFeatures from './AgroFeatures'
import AgroStrategicDashboard from './AgroStrategicDashboard'
import AgroProjectsGrid from './AgroProjectsGrid'
import NaharAgroDashboard from './NaharAgroDashboard'
import FeaturedPractices from './FeaturedPractices'
import WhyChooseUs from './WhyChooseUs'
import WorldClassProducts from './WorldClassProducts'
import InnovatingAgriculture from './InnovatingAgriculture'
import AgroExcellence from './AgroExcellence'
import FaqAndContact from './FaqAndContact'

const Home = () => {
  return (
    <div>
        <HeroSection />
        
        <AboutUsBanner/>
        <AgroFeatures/>
        <AgroStrategicDashboard/>
        <AgroProjectsGrid/>
        <NaharAgroDashboard/>
        <FeaturedPractices/>
       < WhyChooseUs />
       <WorldClassProducts/>
       <InnovatingAgriculture/>
       <AgroExcellence/>
       <FaqAndContact/>

       <img class="w-full h-full object-cover" src="/img/lalala.PNG" alt="" />
    </div>
  )
}

export default Home