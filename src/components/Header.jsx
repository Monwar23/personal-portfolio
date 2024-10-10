import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 font-poppins">
        <img src="/public/logo.png" alt="Mumair Logo" className="h-10" />
        
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-orange-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8 items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent px-6 lg:px-0 py-4 lg:py-0 space-y-1 lg:space-y-0 transition-all duration-300 ease-in-out font-normal `}
        >
          <a href="#home" className="block lg:inline hover:text-orange-500 text-xl">
            Home
          </a>
          <a href="#about" className="block lg:inline hover:text-orange-500 text-xl">
            About Me
          </a>
          <a href="#services" className="block lg:inline hover:text-orange-500 text-xl">
            Services
          </a>
          <a href="#projects" className="block lg:inline hover:text-orange-500 text-xl">
            Projects
          </a>
          <a href="#testimonials" className="block lg:inline hover:text-orange-500 text-xl">
            Testimonials
          </a>
          <a href="#contact" className="block lg:inline hover:text-orange-500 text-xl">
            Contact
          </a>

          <button className="block lg:hidden bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 text-xl">
            Download CV
          </button>
        </nav>

        <button className="hidden text-xl lg:inline bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          Download CV
        </button>
      </div>
    </header>
  );
};

export default Header;
