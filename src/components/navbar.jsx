import { useEffect } from "react"

export const Navbar = ( {menuOpen, setMenuOpen} ) => {
  useEffect( () => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b border-black/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font bold ">
            dnl<span className="text-blue-700">.dev</span>
          </a>

          {/* mobile menu */}
          <div 
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={ () => setMenuOpen( ( prev ) => ( !prev ) ) }
          >
            &#9776;
          </div>

          {/* desktop menu */}
          <div className="hidden md:flex items-center space-x-8 ">
            <a href="#home" className="text-black-300 hover:text-black transition-colors">
              Home
            </a>
            <a href="#about" className="text-black-300 hover:text-black transition-colors">
              About
            </a>
            <a href="#projects" className="text-black-300 hover:text-black transition-colors"> 
              Projects
            </a>
            <a href="#contact" className="text-black-300 hover:text-black transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}