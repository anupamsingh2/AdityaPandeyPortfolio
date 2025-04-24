import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";

import Portfolio from "./components/Portfolio";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        
      <Portfolio/>
        
        <Achievements/>
        {/* <Feedbacks /> */}
      <Education/>
      <Hobbies/>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;