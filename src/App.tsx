import ContactContainer from './components/ContactContainer'
import ContentsContainer from './components/ContentsContainer'
import EducationalContainer from './components/EducationalContainer'
import Footer from './components/Footer'
import HomeContainer from './components/HomeContainer'
import ResponsiveNavBar from './components/ResposiveNavBar'


function App() {
  return (
    <div className="bg-[#131313] max-w-full flex flex-col gap-10">
      <ResponsiveNavBar />
      <HomeContainer />
      <ContentsContainer />
      <EducationalContainer />
      <ContactContainer />
      <Footer />
    </div>
  )
}

export default App
