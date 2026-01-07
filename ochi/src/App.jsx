import About from './components/About.jsx';
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
    </div>
  )
}

export default App;