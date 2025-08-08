import Hero from "../../components/Homepagehero/Hero"
import ServiceCards from "../../components/HomepageServiceCards/Servicecards"
import WhyChooseUs from "../../components/whychooseus/Whychooseus"
import '../../styles/mathvariable.css'

function Home() {
  return (
    <div className="homepage">
        <Hero/>
        <ServiceCards />
        <WhyChooseUs/>
        
    </div>
  )
}

export default Home