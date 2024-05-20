import React from "react";

const Navbar = () => {
  const handleNavClick = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute("href").substring(1);
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <nav className="text-white py-4 bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg">
          <a href="/" className="font-bold hover:text-gray-300">
            Janith Madhushan
          </a>
        </div>
        <ul className="flex">
          <li>
            <a
              href="#about"
              className="p-4 hover:text-gray-300"
              onClick={handleNavClick}
            >
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="p-4 hover:text-gray-300" onClick={handleNavClick}>
              Experience
              
            </a>
          </li>

          <li>
            <a href="/contact" className="p-4 hover:text-gray-300">
              Contact
            </a>
          </li>
          <li>
            <a href="/blog" className="p-4 hover:text-gray-300">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
