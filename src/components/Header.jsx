import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Ramkumar.R</div>

          <ul className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ram-kumar-r-02a7562b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-primary"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/Ram-kumar-R7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-primary"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.304 3.438 9.801 8.207 11.387.6.111.793-.261.793-.577 0-.287-.011-1.243-.018-2.247-3.338.724-4.042-1.607-4.042-1.607-.546-1.387-1.333-1.757-1.333-1.757-1.087-.743.083-.728.083-.728 1.204.085 1.836 1.237 1.836 1.237 1.067 1.827 2.805 1.297 3.487.992.108-.772.418-1.297.762-1.597-2.665-.303-5.467-1.333-5.467-5.933 0-1.312.469-2.386 1.235-3.227-.124-.303-.537-1.52.117-3.164 0 0 1.008-.323 3.303 1.231.957-.266 1.987-.399 3.007-.404 1.02.005 2.05.138 3.007.404 2.295-1.554 3.303-1.231 3.303-1.231.654 1.644.241 2.861.118 3.164.766.841 1.235 1.915 1.235 3.227 0 4.607-2.805 5.63-5.467 5.933.429.371.815 1.102.815 2.221 0 1.604-.014 2.898-.014 3.287 0 .319.192.693.798.577 4.769-1.586 8.207-6.083 8.207-11.387 0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href="#contact" className="hidden btn-primary md:block">
              Let's Talk
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
