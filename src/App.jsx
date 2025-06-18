import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLoadComplete = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleLoadComplete} />}

      <div
        className={`
          min-h-screen 
          bg-black text-gray-100 
          transition-opacity duration-700 
          ${isLoaded ? "opacity-100" : "opacity-0"}
        `}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        {/* التعديل الرئيسي هنا:
          لقد قمت بوضع كل قسم داخل وسم <section> وأعطيته id فريد.
          هذا الـ id هو الذي ستستخدمه في روابط الـ Navbar.
        */}
        
        <section id="home">
          <Home />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
      </div>
    </>
  );
}

export default App;