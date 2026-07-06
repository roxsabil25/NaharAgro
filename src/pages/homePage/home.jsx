
import HeroSection from './heroSection/hero'
import AgroBanner from './AgroBanner'
import AgroDashboard from './AgroDashboard'
import AboutUsBanner from './AboutUsBanner'
import AgroFeatures from './AgroFeatures'
import AgroStrategicDashboard from './AgroStrategicDashboard'
import AgroProjectsGrid from './AgroProjectsGrid'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <AgroBanner />
        <AgroDashboard/>
        <AboutUsBanner/>
        <AgroFeatures/>
        <AgroStrategicDashboard/>
        <AgroProjectsGrid/>
    </div>
  )
}

export default Home