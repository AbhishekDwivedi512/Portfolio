import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, ArrowRight } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-900">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[10%] right-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-blue-300/20 to-pink-300/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-sm mb-2"
              >
                Available for hire
              </motion.div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Abhishek Dwivedi
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Full Stack Developer crafting exceptional digital experiences.
                Specializing in <span className="font-semibold text-blue-600 dark:text-blue-400">Java</span>, <span className="font-semibold text-green-600 dark:text-green-400">SpringBoot</span>, and modern web technologies.
              </p>
            </div>

        
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                Contact Me
              </button>
            </motion.div>

           
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-6 justify-center lg:justify-start pt-4"
            >
              {[
                { icon: Github, href: "https://github.com/AbhishekDwivedi512", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/abhishek-dwivedi-62a41a225/", label: "LinkedIn" },
                { icon: ExternalLink, href: "https://leetcode.com/u/ad8551321/", label: "LeetCode" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={28} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[500px] h-[500px] mx-auto">
             
              <div className="absolute inset-0 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-[10%] border border-gray-200 dark:border-gray-700 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

              
              <div className="absolute inset-[15%] rounded-full overflow-hidden shadow-2xl ring-8 ring-white/50 dark:ring-gray-800/50 backdrop-blur-sm">
                <img
                  src="/abhiimg.jpg"
                  alt="Abhishek Dwivedi"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

           
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] right-[10%] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] left-[5%] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[40%] -right-[5%] p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
