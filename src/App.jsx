import { useState } from "react";
import { LoadingScreen } from "./components/loading-screen";
import { Navbar } from "./components/navbar";
import { MobileMenu } from "./components/mobile-menu";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Project } from "./pages/project";
import { Contact } from "./pages/contact";

import "./App.css";
import "./index.css";


function App() {
  const [isLoaded, setIsLoaded] = useState( false );
  const [menuOpen, setMenuOpen] = useState( false );

  return (
    <>
      { !isLoaded && <LoadingScreen onComplete={ () => setIsLoaded(true) } /> }
      <div 
        className={`min-h-screen transition-opacity duration-700 
          ${
            isLoaded 
              ? "opacity-100" 
              : "opacity-0"
          }
        `}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  )
}


export default App;