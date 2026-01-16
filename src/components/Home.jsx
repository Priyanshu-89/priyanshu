import { Sparkles, Download, Github, Linkedin, ChevronRight, MousePointer } from 'lucide-react';
import { useEffect, useState } from 'react';
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandNextjs } from 'react-icons/tb';

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ["Full Stack Developer", "Frontend Developer", "Problem Solver", "Tech Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
     
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 text-gray-100 pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950/40 to-black">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">

            {/* Role Badge */}
            <div className="inline-flex items-center space-x-3 animate-fade-in">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {roles[textIndex]}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="block text-gray-200 mb-4">Turning Ideas</span>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Into Scalable Web Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl text-justify">
              Hello, I'm <span className="font-bold text-indigo-400">Priyanshu</span> — a Full Stack Developer
              specializing in React.js, Next.js, and scalable backend systems using Node.js, MongoDB,
              and modern authentication strategies. I build fast, SEO-optimized, production-ready applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition"
              >
                <MousePointer className="h-5 w-5 mr-2" />
                View My Work
              </a>

              <a
                href="/priyanshu.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-gray-200 rounded-xl hover:border-indigo-400 transition"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
                <ChevronRight className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 transition" />
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center space-x-6 pt-8">
              <span className="text-sm text-gray-500">Follow me:</span>
              <a
                href="https://github.com/Priyanshu-89"
                target="_blank"
                className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshu-kumari93933/"
                target="_blank"
                className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl hover:bg-indigo-500/20 transition"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

   {/* Right Visual */}
<div className="relative hidden lg:block">

  {/* Floating Tech Cards */}
  <div className="absolute inset-0 pointer-events-none z-10">
    <div className="absolute top-6 left-8 animate-float-slow">
      <div className="tech-card neon-js">
        <span><IoLogoJavascript /></span>
      </div>
    </div>

    <div className="absolute top-1/2 -right-6 animate-float-medium">
      <div className="tech-card neon-ts">TS</div>
    </div>

    <div className="absolute bottom-10 left-6 animate-float-fast">
      <div className="tech-card neon-react">⚛</div>
    </div>

    <div className="absolute -top-6 right-20 animate-float-delayed">
      <div className="tech-card neon-node">
        <span><TbBrandNextjs /></span>
      </div>
    </div>
  </div>

  {/* Main Code Card */}
  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl rotate-3">
    <div className="flex space-x-2 mb-6">
      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    </div>

    <div className="font-mono text-sm space-y-2">
      <div>
        <span className="text-indigo-400">const</span>{' '}
        <span className="text-blue-400">developer</span> = {'{'}
      </div>
      <div className="pl-4 text-gray-300">
        name: <span className="text-emerald-400">'Priyanshu'</span>,
      </div>
      <div className="pl-4 text-gray-300">
        role: <span className="text-emerald-400">'Full Stack Developer'</span>,
      </div>
      <div className="pl-4 text-gray-300">
        stack: ['Next.js', 'React', 'Node', 'MongoDB']
      </div>
      <div>{'};'}</div>
    </div>
  </div>

</div>


        </div>
      </div>
    </section>
  );
};

export default Home;
