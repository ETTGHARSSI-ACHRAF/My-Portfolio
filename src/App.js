import './App.css';
import Intro from "./components/intro/intro";
import { Competance } from "./components/competances/Competance";
import ProjectList from "./components/listProject/ProjectList";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Intro/>
      
      <ProjectList/>
      <Competance/>
      <About/>
      
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
