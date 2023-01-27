import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  AOS.init();
  return (
    <div>
      <Navbar/>
      <Social />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
