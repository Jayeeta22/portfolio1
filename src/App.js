import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
import "./style/style.css"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
    
   }, [])
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
