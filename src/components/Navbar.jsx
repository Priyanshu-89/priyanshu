import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles, Home, User, Briefcase, FolderOpen, Mail, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'portfolio', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', icon: <Home className="h-4 w-4" /> },
    { label: 'About', href: '#about', icon: <User className="h-4 w-4" /> },
    { label: 'Portfolio', href: '#portfolio', icon: <FolderOpen className="h-4 w-4" /> },
    { label: 'Experience', href: '#experience', icon: <Briefcase className="h-4 w-4" /> },
    { label: 'Contact', href: '#contact', icon: <Mail className="h-4 w-4" /> },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-gray-950/95 backdrop-blur-xl shadow-2xl shadow-blue-900/10 border-b border-gray-800/50 py-2'
        : 'bg-transparent backdrop-blur-md border-b border-gray-800/30 py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo with animation */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <Code2 className="relative h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-wide">
                PRIY<span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">ANSHU</span>
              </span>
              <div className="flex items-center space-x-1">
                <Sparkles className="h-3 w-3 text-yellow-400" />
                <span className="text-xs text-gray-400">Full Stack Developer</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-gray-900/50 backdrop-blur-sm rounded-full p-1 border border-gray-800/50">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`relative px-5 py-2.5 rounded-full flex items-center space-x-2 transition-all duration-300 ${activeSection === item.href.substring(1)
                    ? 'text-white bg-gradient-to-r from-blue-900/30 to-purple-900/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
              >
                <span className="relative z-10">{item.icon}</span>
                <span className="font-medium text-sm">{item.label}</span>

                {/* Active indicator */}
                {activeSection === item.href.substring(1) && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full"></div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  </>
                )}
              </a>
            ))}

           
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen
                ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-white'
                : 'bg-gray-900/50 text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${isOpen ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' : ''
              }`}></div>
            {isOpen ? (
              <X className="h-6 w-6 relative z-10 transform rotate-180 transition-transform duration-300" />
            ) : (
              <Menu className="h-6 w-6 relative z-10" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl border border-gray-800/50 p-2 shadow-2xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl mb-1 transition-all duration-300 ${activeSection === item.href.substring(1)
                    ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                      : 'bg-gray-800/50'
                    }`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
                {activeSection === item.href.substring(1) && (
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                )}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
                setIsOpen(false);
              }}
              className="mt-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg flex items-center justify-center space-x-2 group/cta"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="h-4 w-4 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Indicator */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
      )}

      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </nav>
  );
};

export default Navbar;