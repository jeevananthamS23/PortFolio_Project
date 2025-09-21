import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';
function App() {
  return (
    <div className="App">
      <ThemeProvider>
     <Header></Header>
     <Home></Home>
     <About></About>
     <Skills></Skills>
     <Certifications></Certifications>
     <Projects></Projects>
     <Contact></Contact>
     <Footer></Footer>
    </ThemeProvider>
      
    </div>
  );
}

export default App;
