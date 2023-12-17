import ContactContainer from './components/ContactContainer'
import ContentsContainer from './components/ContentsContainer'
import EducationalContainer from './components/EducationalContainer'
import Footer from './components/Footer'
import HomeContainer from './components/HomeContainer'
import ResponsiveNavBar from './components/ResponsiveNavBar'
import ScrollAnimation from './styles/ScrollAnimation'


function App() {
  return (
    <div className="bg-[#131313] max-w-full flex flex-col gap-20">
      <ResponsiveNavBar />
      <ScrollAnimation>
        <HomeContainer />
      </ScrollAnimation>
      <ScrollAnimation>
        <ContentsContainer />
      </ScrollAnimation>
      <ScrollAnimation>
        <EducationalContainer />
      </ScrollAnimation>
      <ScrollAnimation>
        <ContactContainer />
      </ScrollAnimation>
      <Footer />
    </div>
  )
}

export default App
