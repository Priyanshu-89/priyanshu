import { Calendar, Building, Layout, Code2, Briefcase, Rocket, Zap, Shield} from 'lucide-react';
import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
//   {
//   company: "Bluestock Fintech",
//   role: "Software Development Engineer (SDE) Intern",
//   period: "Jan 2026 - Feb 2026",
//   duration: "1 month",
//   icon: <Code2 className="h-5 w-5" />,
//   color: "from-orange-500 to-yellow-500",
//   description: "Focused on backend API development and system optimization for live production applications",
//   responsibilities: [
//     "Assisted in backend API development, debugging, and testing for live projects",
//     "Supported feature implementation and participated in code reviews",
//     "Worked on deployment workflows and version control",
//     "Contributed to database design and optimization",
//     "Implemented RESTful APIs with proper error handling",
//     "Collaborated with cross-functional teams on product features"
//   ],
//   tech: ["Node.js", "REST APIs", "Git", "Testing", "Database Design"],
//   highlights: [
//     "Reduced API response time by 30% through optimization",
//     "Participated in deploying 3 major features to production",
//     "Improved code quality through rigorous testing"
//   ]
// },

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

        

          {/* Internship Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50">
              <div className="text-2xl font-bold text-amber-400 mb-1">4</div>
              <div className="text-sm text-gray-300">Internships</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50">
              <div className="text-2xl font-bold text-blue-400 mb-1">15+</div>
              <div className="text-sm text-gray-300">Months Experience</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50">
              <div className="text-2xl font-bold text-emerald-400 mb-1">15+</div>
              <div className="text-sm text-gray-300">Projects</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50">
              <div className="text-2xl font-bold text-purple-400 mb-1">4</div>
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

       
        </div>

     

    
      </div>
    </section>
  );
};

export default Experience;