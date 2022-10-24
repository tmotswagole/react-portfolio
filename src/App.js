// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

function App() {{
  return (
    <>
      <Header />

      <div className='bubbles'>
        <span style={{ '--i': "11" }}></span>
        <span style={{ '--i': "12" }}></span>
        <span style={{ '--i': "24" }}></span>
        <span style={{ '--i': "10" }}></span>
        <span style={{ '--i': "14" }}></span>
        <span style={{ '--i': "23" }}></span>
        <span style={{ '--i': "18" }}></span>
        <span style={{ '--i': "16" }}></span>
        <span style={{ '--i': "19" }}></span>
        <span style={{ '--i': "20" }}></span>
        <span style={{ '--i': "22" }}></span>
        <span style={{ '--i': "25" }}></span>
        <span style={{ '--i': "18" }}></span>
        <span style={{ '--i': "21" }}></span>
        <span style={{ '--i': "15" }}></span>
        <span style={{ '--i': "13" }}></span>
        <span style={{ '--i': "26" }}></span>
        <span style={{ '--i': "17" }}></span>
        <span style={{ '--i': "13" }}></span>
        <span style={{ '--i': "28" }}></span>
        <span style={{ '--i': "11" }}></span>
        <span style={{ '--i': "12" }}></span>
        <span style={{ '--i': "24" }}></span>
        <span style={{ '--i': "10" }}></span>
        <span style={{ '--i': "14" }}></span>
        <span style={{ '--i': "23" }}></span>
        <span style={{ '--i': "18" }}></span>
        <span style={{ '--i': "16" }}></span>
        <span style={{ '--i': "19" }}></span>
        <span style={{ '--i': "20" }}></span>
        <span style={{ '--i': "22" }}></span>
        <span style={{ '--i': "25" }}></span>
        <span style={{ '--i': "18" }}></span>
        <span style={{ '--i': "21" }}></span>
        <span style={{ '--i': "15" }}></span>
        <span style={{ '--i': "13" }}></span>
        <span style={{ '--i': "26" }}></span>
        <span style={{ '--i': "17" }}></span>
        <span style={{ '--i': "13" }}></span>
        <span style={{ '--i': "28" }}></span>
        <span style={{ '--i': "11" }}></span>
        <span style={{ '--i': "12" }}></span>
        <span style={{ '--i': "24" }}></span>
        <span style={{ '--i': "10" }}></span>
        <span style={{ '--i': "14" }}></span>
        <span style={{ '--i': "23" }}></span>
        <span style={{ '--i': "18" }}></span>
        <span style={{ '--i': "16" }}></span>
        <span style={{ '--i': "19" }}></span>
        <span style={{ '--i': "20" }}></span>
        <span style={{ '--i': "22" }}></span>
        <span style={{ '--i': "25" }}></span>
        <span style={{ '--i': "18" }}></span>
        <span style={{ '--i': "21" }}></span>
        <span style={{ '--i': "15" }}></span>
        <span style={{ '--i': "13" }}></span>
        <span style={{ '--i': "26" }}></span>
        <span style={{ '--i': "17" }}></span>
        <span style={{ '--i': "13" }}></span>
        <span style={{ '--i': "28" }}></span>
      </div>

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <Scrollup />

    </>
  );
}}

export default App;
