import { GraduationCap, Award,  Code,  Zap, BookOpen, Rocket, Globe, Users, Brain } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "SGT University, Haryana",
      period: "Sep 2024 - May 2026",
      details: "CGPA: 8.34",
      icon: <Rocket className="h-5 w-5" />
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "LN Mishra College of Business Management, Bihar",
      period: "Sep 2021 - May 2024",
      details: "PERCENTAGE: 8.80",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      degree: "Higher Secondary Education (PCM)",
      institution: "Langanj Inter College",
      period: "2020",
      details: "PERCENTAGE: 69",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Shri Heman Singh High School",
      period: "2018",
      details: "PERCENTAGE: 62.2",
      icon: <Globe className="h-5 w-5" />
    }
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Java", "Python"],
    "Frontend Technologies": ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    "Backend Technologies": ["Node.js", "REST APIs", "JWT", "NextAuth"],
    "Databases & Tools": ["MongoDB", "MySQL", "Git", "GitHub", "Postman"],
    "Platforms": ["Vercel", "Netlify", "VS Code", "Figma"],
    "Core Concepts": ["Data Structures & Algorithms", "OOP", "Operating Systems", "DBMS"],
    "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Agile Development"]
  };

  const skillCategories = Object.keys(skills);

  const achievements = [
    {
      title: "Next.js Full Stack",
      description: "Mastered full-stack development with Next.js",
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "Front-End Domination",
      description: "Modern animations and advanced frontend techniques",
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: "30 Days JavaScript Challenge",
      description: "With Hitesh Choudhary",
      icon: <Brain className="h-5 w-5" />
    },
    {
      title: "Real-World Projects",
      description: "Successfully deployed two live projects",
      icon: <Users className="h-5 w-5" />
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-900/30 text-blue-400 text-sm font-semibold rounded-full mb-4 border border-blue-500/20">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mind</span> Behind the Code
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with expertise in modern web technologies,
            dedicated to creating innovative digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Education */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-blue-900/30 rounded-xl border border-blue-500/20">
                  <GraduationCap className="h-7 w-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Education & Training</h3>
                  <p className="text-gray-400">Academic journey and qualifications</p>
                </div>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="group relative bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                          <div className="text-blue-400">
                            {edu.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg mb-1">{edu.degree}</h4>
                          <p className="text-gray-300">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-gray-800 text-blue-400 text-sm font-medium rounded-full">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 pl-16">
                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/20">
                        <span className="text-white font-semibold">{edu.details}</span>
                      </div>
                    </div>
                    {/* Timeline dot */}
                    <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-purple-900/30 rounded-xl border border-purple-500/20">
                  <Award className="h-7 w-7 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Achievements & Awards</h3>
                  <p className="text-gray-400">Recognitions and accomplishments</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg">
                        <div className="text-purple-400">
                          {achievement.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">{achievement.title}</h4>
                        <p className="text-gray-400 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span>Completed</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="lg:col-span-1 space-y-8">
            {/* Skills Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl h-full">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-emerald-900/30 rounded-xl border border-emerald-500/20">
                  <Brain className="h-7 w-7 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Skills & Expertise</h3>
                  <p className="text-gray-400">Technical proficiency areas</p>
                </div>
              </div>

              {/* Skill Categories Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === 'all'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-gray-900 text-gray-400 hover:bg-gray-700'
                    }`}
                >
                  All
                </button>
                {skillCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === category
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white'
                        : 'bg-gray-900 text-gray-400 hover:bg-gray-700'
                      }`}
                  >
                    {category.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Skills Display */}
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className={`transition-all duration-300 ${activeCategory === 'all' || activeCategory === category ? 'opacity-100' : 'opacity-40'
                    }`}>
                    <h4 className="font-semibold text-white mb-4 flex items-center">
                      <span className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3"></span>
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-emerald-500/50 hover:scale-105 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    
                  </div>
                ))}

               
              </div>


              {/* Skill Level Indicator */}
              <div className="mt-10 pt-8 border-t border-gray-700/50">
                <h4 className="font-semibold text-white mb-4">Expertise Level</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Frontend Development</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Backend Development</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Database Design</span>
                      <span>80%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>


          </div>
        </div>


      </div>
    </section>
  );
};

export default About;