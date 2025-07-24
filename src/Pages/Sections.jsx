
import AboutSection from '../Components/AboutSection/AboutSection'
import ContactSection from '../Components/ContactSection/ContactSection'
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
    </div>
  )
}

export default Sections