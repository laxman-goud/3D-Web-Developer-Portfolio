/**
 * App.jsx
 * ---------------------------------------
 * Root component of the portfolio application.
 * Sets up routing with BrowserRouter and composes
 * all major sections of the site.
 *
 * Sections included:
 * - Navbar & Hero (header)
 * - About
 * - Tech (skills/technologies)
 * - Works (projects showcase)
 * - Contact + StarsCanvas (footer with 3D background)
 *
 * Note:
 * - Experience & Feedbacks are present but currently commented out.
 */

import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Header section with navbar & hero background */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Main content sections */}
        <About />
        {/* <Experience />  Uncomment to show work experience */}
        <Tech />
        <Works />
        {/* <Feedbacks /> Uncomment when ready */}

        {/* Footer with contact form & animated star background */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
