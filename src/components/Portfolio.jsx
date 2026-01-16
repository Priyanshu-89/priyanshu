import { ExternalLink, Github, ShoppingCart, BookOpen, Pizza, Stethoscope, Eye, FlaskRound, Play, Code2, FolderOpen, GitBranch, Zap, Cpu, Server } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "SwiftHarvest 🌾",
      subtitle: "Grocery Admin Dashboard",
      description: "Developed a grocery admin dashboard using Next.js, React, and MongoDB. Admin can perform CRUD operations, track sales (daily, weekly, monthly), and view analytics with charts.",
      tech: ["Next.js", "React", "MongoDB", "NextAuth", "ChartJS"],
      role: "Full Stack Developer",
      icon: <ShoppingCart className="h-5 w-5" />,
      type: "fullstack",
      links: {
        github: "https://github.com/Priyanshu-89/Grocery",
        live: "grocery.webm"
      }
    },
    {
      title: "BookHeaven 📚",
      subtitle: "Book E-commerce Platform",
      description: "Built a book e-commerce platform with admin panel for inventory management, role-based authentication, JWT security, and form handling.",
      tech: ["Next.js", "React", "MongoDB", "JWT", "Axios"],
      role: "Full Stack Developer",
      icon: <BookOpen className="h-5 w-5" />,
      type: "fullstack",
      links: {
        github: "https://github.com/Priyanshu-89/bookheaven",
        live: null
      }
    },
    {
      title: "Tasty Wheels 🍔",
      subtitle: "Food Delivery Web App",
      description: "Designed and developed a food delivery web app with authentication, order management, REST APIs, and a responsive UI.",
      tech: ["Next.js", "React", "Node.js", "MongoDB"],
      role: "Full Stack Developer",
      icon: <Pizza className="h-5 w-5" />,
      type: "fullstack",
      links: {
        github: "https://github.com/Priyanshu-89/food",
        live: "next.gif"
      }
    },
    {
      title: "Novocardia",
      subtitle: "Healthcare Website",
      description: "Developed a real-world medical e-commerce website using Next.js with secure email validation and responsive UI.",
      tech: ["Next.js", "Frontend", "Responsive Design"],
      role: "Frontend Developer",
      icon: <Stethoscope className="h-5 w-5" />,
      type: "frontend",
      links: {
        github: null,
        live: "https://www.novocardia.in/"
      }
    },
    {
      title: "Eagleye",
      subtitle: "Marketing Platform",
      description: "Built a marketing platform using Next.js focusing on user engagement, email validation, and clean UI/UX.",
      tech: ["Next.js", "UI/UX", "Email Validation"],
      role: "Frontend Developer",
      icon: <Eye className="h-5 w-5" />,
      type: "frontend",
      links: {
        github: null,
        live: "https://eagleye.vercel.app/"
      }
    },
    {
      title: "E-Juice World",
      subtitle: "Django E-commerce Platform",
      description: "Created an e-commerce platform for e-juice products with authentication, cart system, reviews, and vendor management.",
      tech: ["Django", "Python", "E-commerce"],
      role: "Full Stack Developer",
      icon: <FlaskRound className="h-5 w-5" />,
      type: "backend",
      links: {
        github: "https://github.com/Priyanshu-89/Ejucie_django_project",
        live: "ejuice.webm"
      }
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-400 text-sm font-semibold rounded-full mb-4 border border-blue-500/20">
            <FolderOpen className="h-4 w-4" />
            <span>PORTFOLIO</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise through real-world applications and innovative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeFilter === "all" 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <Code2 className="h-5 w-5 inline mr-2" />
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter("fullstack")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeFilter === "fullstack" 
                ? "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg" 
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <GitBranch className="h-5 w-5 inline mr-2" />
            Full Stack
          </button>
          <button
            onClick={() => setActiveFilter("frontend")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeFilter === "frontend" 
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg" 
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <Zap className="h-5 w-5 inline mr-2" />
            Frontend
          </button>
          <button
            onClick={() => setActiveFilter("backend")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeFilter === "backend" 
                ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg" 
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <Server className="h-5 w-5 inline mr-2" />
            Backend
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>
              
              {/* Project Header */}
              <div className="relative p-6 border-b border-gray-700/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${
                      project.type === 'fullstack' ? 'bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 text-emerald-400' :
                      project.type === 'frontend' ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 text-purple-400' :
                      'bg-gradient-to-br from-orange-900/30 to-red-900/30 text-orange-400'
                    } border ${
                      project.type === 'fullstack' ? 'border-emerald-500/20' :
                      project.type === 'frontend' ? 'border-purple-500/20' :
                      'border-orange-500/20'
                    }`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{project.title}</h3>
                      <p className="text-sm text-gray-400">{project.subtitle}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.role.includes('Full Stack') 
                      ? 'bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 text-emerald-400 border border-emerald-500/20'
                      : 'bg-gradient-to-r from-purple-900/30 to-pink-900/30 text-purple-400 border border-purple-500/20'
                  }`}>
                    {project.role}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="relative p-6 pt-4">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gray-800 text-gray-300 text-xs font-medium rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <div className="flex items-center space-x-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors group/link"
                      >
                        <div className="p-2 bg-gray-800 rounded-lg group-hover/link:bg-gradient-to-r group-hover/link:from-emerald-900/30 group-hover/link:to-cyan-900/30">
                          <Github className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors group/link"
                      >
                        <div className="p-2 bg-gray-800 rounded-lg group-hover/link:bg-gradient-to-r group-hover/link:from-blue-900/30 group-hover/link:to-purple-900/30">
                          {project.links.live.endsWith('.gif') || project.links.live.endsWith('.webm') ? (
                            <Play className="h-4 w-4" />
                          ) : (
                            <ExternalLink className="h-4 w-4" />
                          )}
                        </div>
                        <span className="text-sm font-medium">
                          {project.links.live.endsWith('.gif') || project.links.live.endsWith('.webm') 
                            ? 'Demo' 
                            : 'Live'}
                        </span>
                      </a>
                    )}
                  </div>
                  
                  {/* Project Number */}
                  <span className="text-3xl font-bold text-gray-800 group-hover:text-gray-700">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Hover Effect Corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                project.type === 'fullstack' ? 'bg-gradient-to-bl from-emerald-500/20 to-cyan-500/20' :
                project.type === 'frontend' ? 'bg-gradient-to-bl from-purple-500/20 to-pink-500/20' :
                'bg-gradient-to-bl from-orange-500/20 to-red-500/20'
              } rounded-bl-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">15+</div>
            <div className="text-gray-300 font-medium">Projects</div>
            <div className="text-xs text-gray-500 mt-2">Completed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-2">8</div>
            <div className="text-gray-300 font-medium">Full Stack</div>
            <div className="text-xs text-gray-500 mt-2">Applications</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">6</div>
            <div className="text-gray-300 font-medium">Frameworks</div>
            <div className="text-xs text-gray-500 mt-2">Mastered</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">Real World</div>
            <div className="text-gray-300 font-medium">Brand Projects</div>
            <div className="text-xs text-gray-500 mt-2">Live Sites</div>
          </div>
        </div>

        {/* Tech Stack Visualization */}
        <div className="mt-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 p-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20">
              <Cpu className="h-7 w-7 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Technology Stack</h3>
              <p className="text-gray-400">Frameworks and tools used across projects</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-3 bg-gradient-to-r from-blue-900/30 to-blue-900/10 rounded-xl border border-blue-500/20">
              <span className="text-blue-400 font-medium">Next.js</span>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-cyan-900/30 to-cyan-900/10 rounded-xl border border-cyan-500/20">
              <span className="text-cyan-400 font-medium">React</span>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-emerald-900/30 to-emerald-900/10 rounded-xl border border-emerald-500/20">
              <span className="text-emerald-400 font-medium">MongoDB</span>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-purple-900/30 to-purple-900/10 rounded-xl border border-purple-500/20">
              <span className="text-purple-400 font-medium">Tailwind CSS</span>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-yellow-900/30 to-yellow-900/10 rounded-xl border border-yellow-500/20">
              <span className="text-yellow-400 font-medium">Python</span>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-pink-900/30 to-pink-900/10 rounded-xl border border-pink-500/20">
              <span className="text-pink-400 font-medium">NEXTAUTH</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center space-y-6 max-w-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 p-12">
            <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20">
              <Github className="h-12 w-12 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Explore More Projects</h3>
            <p className="text-gray-400">Discover my complete portfolio, open-source contributions, and latest experiments on GitHub</p>
            <a
              href="https://github.com/Priyanshu-89"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <Github className="h-5 w-5 mr-3" />
              View GitHub Profile
              <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;