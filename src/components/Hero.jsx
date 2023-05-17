import HeroLeft from "./HeroLeft"
import HeroRight from "./HeroRight"
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
        <div className="container-hero">

          <HeroLeft />
      
          <HeroRight/>

        </div>
    </section>
  )
}

export default Hero