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
import { useUser } from "./contexts/UserContext";
import { useEffect } from "react";

const App = () => {
  const { getUser } = useUser();
  // console.log(import.meta.env.VITE_USER_ID);
  useEffect(() => {
    getUser(import.meta.env.VITE_USER_ID);

    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="makingSticky">
          <div className="stickyItems">
            <About />
          </div>
          <div className="stickyItems">
            <Experience />
          </div>

          <div className="stickyItems">
            <Tech />
          </div>

          <div className="stickyItems">
            <Works />
          </div>

          <div className="stickyItems">
            <Feedbacks />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
