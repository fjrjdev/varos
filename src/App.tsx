import ContentsContainer from './components/ContentsContainer'
import EducationalContainer from './components/EducationalContainer'
import HomeContainer from './components/HomeContainer'
import ResponsiveNavBar from './components/ResposiveNavBar'


function App() {
  return (
    <div className="bg-[#131313] max-w-full">
      <ResponsiveNavBar />
      <HomeContainer />
      <ContentsContainer />
      <EducationalContainer />
    </div>
  )
}

export default App
