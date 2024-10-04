import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Works2 from "./components/Works2";
import Works3 from "./components/Works3";

const App = () => {
  return (
    <BrowserRouter>
      {/* <div className="relative z-0 bg-primary"> */}
      <div className="relative z-0 bg-hero-palmtree">
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        <div className="bg-hero-digital bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <div className="bg-primary ">
          <Tech />
          <Works />
          <Works2 />
          <Works3 />

          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
