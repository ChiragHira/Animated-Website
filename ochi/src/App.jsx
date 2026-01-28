import About from './components/About.jsx';
import Cards from './components/Cards.jsx';
import Eyes from './components/Eyes.jsx';
import Feature from './components/Feature.jsx';
import Footer from './components/Footer.jsx';
import Landingpage from './components/Landingpage.jsx';
import Marquee from './components/Marquee.jsx';
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;