import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import bgImage from '../assets/blubkg.jpg';
import logo from '../assets/whitelogo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Pages', href: '#pages' }
  ];

  return (
    <nav className="relative text-white shadow-lg bg-cover bg-center bg-no-repeat" 
         style={{backgroundImage: `url(${bgImage})`}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
                <img 
                    src={logo} 
                    alt="YourBrand Logo" 
                    className="h-8 w-auto md:h-10 lg:h-12"
                />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gray-200 transition-colors duration-200 font-medium whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-2 border-white text-white placeholder-white rounded-full px-4 py-2 pl-12 focus:outline-none focus:bg-white focus:bg-opacity-10 transition-all w-64"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 hover:bg-opacity-50 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800 bg-opacity-95">
          {/* Mobile Search Bar */}
          <div className="px-3 py-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent border-2 border-white text-white placeholder-white rounded-full px-4 py-2 pl-12 focus:outline-none focus:bg-white focus:bg-opacity-10"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
            </div>
          </div>
          
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name} 
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}