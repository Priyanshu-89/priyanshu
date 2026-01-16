import { Code2, Heart, ArrowUp, Mail, Github, Linkedin,  Coffee, Copyright } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set the current year
    setCurrentYear(new Date().getFullYear());
    
    // Show back-to-top button when scrolling
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-gray-800 border-t border-gray-800/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  PRIYANSHU
                </span>
                <p className="text-sm text-gray-400">Full Stack Developer</p>
              </div>
            </div>
           
            <div className="flex items-center space-x-4 pt-4">
              <a 
                href="https://github.com/Priyanshu-89"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/priyanshu-kumari93933/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 text-gray-400 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:priyanshukumari93933@gmail.com"
                className="p-2 bg-gray-800 text-gray-400 hover:text-white hover:bg-emerald-900/30 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-500/20">Next.js</span>
              <span className="px-3 py-1.5 bg-cyan-900/30 text-cyan-300 text-xs rounded-full border border-cyan-500/20">React</span>
              <span className="px-3 py-1.5 bg-emerald-900/30 text-emerald-300 text-xs rounded-full border border-emerald-500/20">MongoDB</span>
              <span className="px-3 py-1.5 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-500/20">Node.js</span>
              <span className="px-3 py-1.5 bg-amber-900/30 text-amber-300 text-xs rounded-full border border-amber-500/20">Tailwind CSS</span>
              <span className="px-3 py-1.5 bg-pink-900/30 text-pink-300 text-xs rounded-full border border-pink-500/20">HTML5/CSS3</span>
            </div>
            <div className="mt-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Available for opportunities</span>
                </div>
                <Coffee className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <Copyright className="h-4 w-4" />
            <span>{currentYear} Priyanshu. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Crafted with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>using</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            </div>
            <span className="font-medium">Personal Portfolio</span>
          </div>
          
         
        </div>

        {/* Back to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        )}

        {/* Floating Developer Tag */}
        <div className="absolute bottom-4 right-4 opacity-20 hover:opacity-40 transition-opacity">
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="w-8 h-8 border-2 border-gray-700 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">DEV</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600"></div>
    </footer>
  );
};

export default Footer;