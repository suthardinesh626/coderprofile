import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import Techabout from './components/Techabout'
import ContactUs from "./components/ContactUs";
import SocialMedia from "./components/SocialMedia";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <AboutMe/>
     <ProjectList/>
     <Techabout/>
     <ContactUs/>
     <SocialMedia/>
    </div>
  );
}

export default App;
