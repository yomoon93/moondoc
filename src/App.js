import './App.css';
import NavBar from './Components/NavBar/navbar';

import Main from './Pages/home/main';
import Skills from './Components/Skills/skills';
import Flipskills from './Pages/Flip/flipskills';
import { Contact } from './Pages/Contact/contact';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
    
      <NavBar/>
      <Main/>
      <Skills/>
      <Flipskills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
