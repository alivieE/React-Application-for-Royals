import {Routes, Route} from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Team from "./components/Team";
import './App.css'

function App() {
  return (
    <>
    <Navbar />

    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/blog" element={ <Blog /> } />
      <Route path="/team" element={ <Team /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/services" element={ <Services /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
