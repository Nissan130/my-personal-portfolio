
import AboutSection from '../Components/AboutSection/AboutSection'
import ContactSection from '../Components/ContactSection/ContactSection'
import FooterSection from '../Components/FooterSection/FooterSection'
import HomeSection from '../Components/HomeSection/HomeSection'
import ProjectSection from '../Components/ProjectSection/ProjectSection'

function Sections() {
  return (
    <div>
        <section id='home'>
          <HomeSection />
        </section>
        <section id='about'>
          <AboutSection />
        </section>
        <section id='project'>
          <ProjectSection /> 
        </section>
        <section id='contact'>
          <ContactSection /> 
        </section>

        <section id='footer'>
          <FooterSection /> 
        </section>
    </div>
  )
}

export default Sections