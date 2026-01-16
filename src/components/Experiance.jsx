import { Calendar, Building, Layout, Code2, Briefcase, Rocket, Zap, Cpu, Users, Target, TrendingUp, Award, Sparkles, Globe, Shield, Server } from 'lucide-react';
import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Aditya Technology",
      role: "UI Designer & Frontend Developer",
      period: "Jan 2024 - Aug 2024",
      duration: "8 months",
      icon: <Layout className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
      description: "Specialized in creating responsive web applications with modern animations and SEO optimization",
      responsibilities: [
        "Developed and maintained web applications using Next.js and React.js",
        "Implemented responsive UI using Tailwind CSS and optimized performance for SEO",
        "Integrated animations using GSAP, AOS, and Locomotive.js",
        "Ensured cross-browser compatibility and accessibility",
        "Collaborated with designers to implement pixel-perfect interfaces",
        "Participated in agile development cycles and sprint planning"
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "GSAP", "SEO", "Git"],
      highlights: [
        "Improved website performance by 40% through optimization",
        "Implemented complex animations for enhanced user experience",
        "Worked on 5+ client projects simultaneously"
      ]
    },
    {
      company: "CepiaLabs",
      role: "Programmer Analyst Intern",
      period: "Oct 2025 - Jan 2026",
      duration: "4 months",
      icon: <Code2 className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
      description: "Focused on backend API development and system optimization for live production applications",
      responsibilities: [
        "Assisted in backend API development, debugging, and testing for live projects",
        "Supported feature implementation and participated in code reviews",
        "Worked on deployment workflows and version control",
        "Contributed to database design and optimization",
        "Implemented RESTful APIs with proper error handling",
        "Collaborated with cross-functional teams on product features"
      ],
      tech: ["Node.js", "REST APIs", "Git", "Testing", "Database Design"],
      highlights: [
        "Reduced API response time by 30% through optimization",
        "Participated in deploying 3 major features to production",
        "Improved code quality through rigorous testing"
      ]
    },
    {
      company: "Froyo Technologies",
      role: "Web Development Intern (Python)",
      period: "Jun 2025 - Aug 2025",
      duration: "3 months",
      icon: <Briefcase className="h-5 w-5" />,
      color: "from-emerald-500 to-teal-500",
      description: "Built Python-based web applications with Django, focusing on full-stack development and deployment",
      responsibilities: [
        "Developed Python-based web applications using Django",
        "Integrated frontend components with backend logic",
        "Worked on deployment workflows and version control",
        "Implemented user authentication and authorization systems",
        "Created REST APIs for data communication",
        "Optimized database queries for performance"
      ],
      tech: ["Python", "Django", "REST APIs", "Authentication", "PostgreSQL"],
      highlights: [
        "Built 2 complete web applications from scratch",
        "Implemented secure authentication systems",
        "Deployed applications to production servers"
      ]
    }
  ];

  const internships = [
    {
      name: "Aditya Technology Internship",
      description: "Frontend Development & UI/UX Design",
      duration: "8 Months",
      focus: "Next.js, React, Modern Animations",
      outcome: "Enhanced 5+ client websites with modern animations and responsive designs",
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      name: "CepiaLabs Internship",
      description: "Backend Development & System Architecture",
      duration: "4 Months",
      focus: "Node.js, API Development, Database Design",
      outcome: "Optimized backend systems and contributed to live production code",
      icon: <Server className="h-5 w-5" />
    },
    {
      name: "Froyo Technologies Internship",
      description: "Full-Stack Python Development",
      duration: "3 Months",
      focus: "Django, Python, Full-Stack Applications",
      outcome: "Built complete web applications with Django framework",
      icon: <Globe className="h-5 w-5" />
    }
  ];

  const skills = {
    "Frontend": ["Next.js", "React", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    "Backend": ["Node.js", "Python", "Django", "REST APIs", "Authentication"],
    "Tools": ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel"],
    "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Agile Development"]
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-400 text-sm font-semibold rounded-full mb-4 border border-blue-500/20">
            <Rocket className="h-4 w-4" />
            <span>EXPERIENCE & INTERNSHIPS</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My career path through various roles, internships, and companies showcasing growth and expertise development
          </p>
        </div>

        {/* Internships Overview */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl border border-amber-500/20">
              <Shield className="h-7 w-7 text-amber-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Internships</h3>
              <p className="text-gray-400">Professional training and real-world experience</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {internships.map((internship, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 p-6 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl">
                    {internship.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{internship.name}</h4>
                    <span className="text-sm text-gray-400">{internship.duration}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-300 text-sm">{internship.description}</p>
                  </div>
                  
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-xs text-amber-400 font-semibold mb-1">Focus Area</div>
                    <div className="text-white text-sm">{internship.focus}</div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="text-xs text-gray-400 mb-1">Key Outcome</div>
                    <p className="text-gray-300 text-sm">{internship.outcome}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Completed</span>
                    <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded text-xs">Successfully</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Internship Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50">
              <div className="text-2xl font-bold text-amber-400 mb-1">3</div>
              <div className="text-sm text-gray-300">Internships</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50">
              <div className="text-2xl font-bold text-blue-400 mb-1">15+</div>
              <div className="text-sm text-gray-300">Months Experience</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50">
              <div className="text-2xl font-bold text-emerald-400 mb-1">10+</div>
              <div className="text-sm text-gray-300">Projects</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50">
              <div className="text-2xl font-bold text-purple-400 mb-1">3</div>
              <div className="text-sm text-gray-300">Tech Stacks</div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/20">
                <Briefcase className="h-7 w-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
                <p className="text-gray-400">Roles and responsibilities across companies</p>
              </div>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    activeTab === index ? 'scale-[1.02]' : ''
                  }`}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 ${
                    activeTab === index ? 'opacity-10' : ''
                  } transition-opacity`}></div>
                  
                  <div className={`relative p-6 rounded-2xl border ${
                    activeTab === index 
                      ? 'border-blue-500/50 bg-gray-800/80 backdrop-blur-sm' 
                      : 'border-gray-700/50 bg-gray-800/50 hover:border-gray-600'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color}`}>
                          <div className="text-white">
                            {exp.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-xl mb-1">{exp.role}</h3>
                          <div className="flex items-center space-x-2 text-gray-300 mb-2">
                            <Building className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">{exp.description}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-300">{exp.period}</span>
                        </div>
                        <span className="inline-block mt-2 px-3 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    
                    {/* Tech Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Active indicator */}
                    {activeTab === index && (
                      <div className="absolute -top-2 -right-2">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Timeline connector */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-0.5 h-6 bg-gradient-to-b from-gray-700 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20">
                  <Target className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Key Responsibilities</h3>
                  <p className="text-sm text-gray-400">At {experiences[activeTab].company}</p>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <p className="text-gray-300 text-sm italic">"{experiences[activeTab].description}"</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {experiences[activeTab].responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full group-hover:scale-125 transition-transform"></div>
                    </div>
                    <span className="ml-4 text-gray-300 group-hover:text-white transition-colors text-sm">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Highlights */}
              <div className="mb-8 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/20">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {experiences[activeTab].highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-8 border-t border-gray-700/50">
                <h4 className="text-white font-semibold mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 text-sm rounded-lg border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 rounded-xl border border-emerald-500/20">
              <Zap className="h-7 w-7 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Skills & Expertise</h3>
              <p className="text-gray-400">Technical and professional capabilities developed through internships</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div 
                key={category}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <h4 className="font-bold text-white mb-4 flex items-center">
                  <span className={`w-3 h-3 rounded-full mr-3 ${
                    index === 0 ? 'bg-blue-500' :
                    index === 1 ? 'bg-purple-500' :
                    index === 2 ? 'bg-emerald-500' :
                    'bg-amber-500'
                  }`}></span>
                  {category}
                </h4>
                <div className="space-y-3">
                  {items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Growth Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center space-y-6 max-w-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 p-12">
            <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20">
              <TrendingUp className="h-12 w-12 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Continuous Learning & Growth</h3>
            <p className="text-gray-400">
              Through my internships and professional experiences, I've developed a strong foundation in 
              modern web technologies, problem-solving, and collaborative development. Each opportunity 
              has contributed to my growth as a versatile full-stack developer.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;