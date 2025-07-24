
import AboutSection from '../Components/AboutSection/AboutSection'
import HomeSection from '../Components/HomeSection/HomeSection'

function Sections() {
  return (
    <div>
        <section id='home'>
          <HomeSection />
        </section>
        <section id='about'>
          <AboutSection />
        </section>
    </div>
  )
}

export default Sections