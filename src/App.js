import Navbar from './components/navbar/navbar';
import './App.css';
import Intro from './components/introduction/intro';
import Skills from './components/skills/skills';
import Contact from './components/contacts/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
