import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Globe, Award, ArrowRight, Download, Star, Zap, Heart, Coffee } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Smart Finance Manager",
      description: "A comprehensive web application for personal finance management featuring real-time balance tracking, transaction categorization, and intuitive expense analysis.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/Aaka0790/Smart-Finance",
      live: "https://smartfinancebyak.netlify.app/",
      category: "Web Application",
      featured: true
    },
    {
      title: "Epic Task Manager",
      description: "Advanced productivity platform featuring task categorization, priority management, Pomodoro timer, and analytics dashboard with dark/light themes.",
      tech: ["React", "Firebase", "Tailwind CSS", "PWA"],
      github: "#",
      live: "https://epic-to-do-list-by-ak.netlify.app/",
      category: "React Application",
      featured: true
    },
    {
      title: "AI-Powered Script Writer",
      description: "Full-stack application integrating AI for automated script generation and editing with collaborative writing tools and version control.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "AI/ML"],
      github: "#",
      live: "#",
      category: "MERN Stack",
      status: "In Development"
    }
  ];

  const skills = [
    { 
      name: "Frontend Development", 
      icon: <Code className="w-7 h-7" />, 
      techs: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      level: 90,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Backend Development", 
      icon: <Database className="w-7 h-7" />, 
      techs: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"],
      level: 85,
      color: "from-green-500 to-emerald-500"
    },
    { 
      name: "UI/UX Design", 
      icon: <Palette className="w-7 h-7" />, 
      techs: ["Figma", "Adobe XD", "Responsive Design", "User Research", "Prototyping"],
      level: 80,
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "DevOps & Tools", 
      icon: <Globe className="w-7 h-7" />, 
      techs: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Firebase"],
      level: 75,
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    { number: "3+", label: "Projects Completed", icon: <Star className="w-5 h-5" /> },
    { number: "100%", label: "Success Rate", icon: <Zap className="w-5 h-5" /> },
    { number: "24/7", label: "Availability", icon: <Coffee className="w-5 h-5" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      content: "Aakash delivered exceptional work with attention to detail and creativity. Highly recommended!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Startup Founder",
      content: "Professional, reliable, and produces high-quality code. Great communication throughout the project.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/90 backdrop-blur-md'
      } border-b border-gray-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900 animate-pulse">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Aakash</span> Chauhan
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} 
                   className={`transition-all duration-300 font-medium relative group ${
                     activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                   }`}>
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium hover:scale-105">
                Hire Me
              </button>
            </div>

            <button className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-lg animate-slideDown">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} 
                   className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <div className="mb-6">
                <span className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-bounce">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for New Projects
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Full Stack Developer & 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 block animate-gradient">
                    UI/UX Designer
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Passionate engineer crafting exceptional digital experiences with modern technologies. 
                  I transform complex problems into elegant, user-centric solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-105">
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105">
                  Download Resume
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 group">
                    <div className="flex justify-center mb-2 text-blue-600 group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{achievement.number}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-fadeInUp animation-delay-500">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 p-2 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-700 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-bold text-white">AK</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Aakash Chauhan</h3>
                      <p className="text-gray-600">Software Engineer</p>
                      <div className="flex justify-center mt-3 space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInLeft">
              <div className="mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-lg mb-2 block">About Me</span>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Building Digital Solutions with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Precision & Creativity</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  I'm <strong className="text-gray-900">Aakash Chauhan</strong>, a dedicated Full Stack Developer and UI/UX Designer 
                  currently pursuing my engineering degree at <em className="text-blue-600">Terna Engineering College, Navi Mumbai</em>. 
                  With a strong foundation in both technical development and design principles, I create applications 
                  that seamlessly blend functionality with exceptional user experience.
                </p>
                
                <p>
                  My approach combines analytical thinking with creative problem-solving, ensuring every project 
                  meets both technical requirements and user expectations. I'm passionate about 
                  staying current with emerging technologies and implementing best practices.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-700 font-medium">Engineering Student</span>
                </div>
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
                  <Zap className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700 font-medium">Fresh Talent</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 rounded-2xl p-8 animate-fadeInRight">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} mr-3 group-hover:scale-110 transition-transform`}>
                          <div className="text-white">{skill.icon}</div>
                        </div>
                        <span className="font-semibold text-gray-900">{skill.name}</span>
                      </div>
                      <span className="text-blue-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-lg mb-2 block">Skills & Expertise</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Master</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive skill set covering modern web development and design, from concept to deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-blue-200 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className={`text-white mr-4 group-hover:scale-110 transition-transform p-3 rounded-xl bg-gradient-to-r ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{skill.name}</h3>
                </div>
                <div className="space-y-3">
                  {skill.techs.map((tech, i) => (
                    <div key={i} className="flex items-center group/tech">
                      <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${skill.color} group-hover/tech:scale-150 transition-transform`}></div>
                      <span className="text-gray-700 group-hover/tech:text-gray-900 transition-colors">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-lg mb-2 block">Portfolio</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise across different technologies and problem-solving approaches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-3">
                <div className={`h-48 bg-gradient-to-br ${
                  project.featured ? 'from-blue-500 via-cyan-500 to-indigo-600' : 'from-gray-500 to-gray-600'
                } relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  {project.status && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                        {project.status}
                      </span>
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-16 right-4">
                      <Star className="w-6 h-6 text-yellow-300 fill-current animate-pulse" />
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
                    <Code className="w-12 h-12 text-white/80 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <a href={project.github} className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110">
                        <Github className="w-4 h-4 mr-2" />
                        <span className="font-medium">Code</span>
                      </a>
                      <a href={project.live} className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <span className="font-medium">Demo</span>
                      </a>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
{/* Enhanced Contact Me */}
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-gray-800 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <span className="text-blue-300 font-medium text-lg mb-3 block uppercase tracking-wide">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Connect for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400">Professional Opportunities</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              I’m open to discussing freelance projects, full-time roles, or strategic collaborations. Let’s explore how we can work together to achieve your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Mail className="w-6 h-6" />, title: "Email", info: "aakashchauhan@gmail.com", color: "from-blue-500 to-indigo-600" },
              { icon: <Github className="w-6 h-6" />, title: "GitHub", info: "github.com/aakash", color: "from-gray-600 to-gray-800" },
              { icon: <Linkedin className="w-6 h-6" />, title: "LinkedIn", info: "linkedin.com/in/aakash", color: "from-blue-600 to-blue-800" }
            ].map((contact, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-md flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform`}>
                  {contact.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{contact.title}</h3>
                <p className="text-gray-300 text-sm">{contact.info}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:aakash@example.com" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Send a Message
            </a>
            <a href="https://calendly.com/aakash" target="_blank" rel="noopener noreferrer" className="border-2 border-blue-300 text-blue-300 px-8 py-3 rounded-lg font-medium hover:bg-blue-300 hover:text-gray-900 transition-all duration-300">
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
      {/* Enhance Footer Section */}
<footer className="py-16 px-6 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400">Aakash</span> Chauhan
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Experienced Full Stack Developer and UI/UX Designer dedicated to crafting innovative and user-centric digital solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4 text-blue-200 uppercase tracking-wide">Navigation</h4>
              <div className="space-y-3">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <a 
                    key={link} 
                    href={`#${link.toLowerCase()}`} 
                    className="block text-gray-300 hover:text-blue-300 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4 text-blue-200 uppercase tracking-wide">Connect</h4>
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/Aaka0790" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-blue-300 transition-all duration-200 hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/aakash" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-blue-300 transition-all duration-200 hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:aakash@example.com" 
                  className="text-gray-300 hover:text-blue-300 transition-all duration-200 hover:scale-105"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Aakash Chauhan. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#home" className="text-gray-300 hover:text-blue-300 text-sm transition-colors duration-200">
                Back to Top
              </a>
              <a href="/privacy" className="text-gray-300 hover:text-blue-300 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-300 hover:text-blue-300 text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}