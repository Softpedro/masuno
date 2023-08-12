import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Stacks from './components/Stacks/Stacks'
import Steps from './components/Steps/Steps'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <Steps/>
        <Stacks/>
      </main>
      <Footer/>
    </>
  )
}

export default App
