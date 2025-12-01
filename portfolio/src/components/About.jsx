import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-white dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate Full Stack Developer who loves creating innovative web solutions
            and continuously learning new technologies to stay ahead in this ever-evolving field.
          </p>
        </motion.div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Who I Am
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a dedicated developer with a strong foundation in modern web technologies.
              My journey in software development started with a curiosity to build things that
              make a difference in people's lives.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and creating user experiences that
              are both beautiful and functional. Every project I work on is an opportunity to
              learn something new and push the boundaries of what's possible.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently, I'm expanding my expertise by learning Java and Spring Boot,
              which will allow me to build more robust backend systems and microservices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <img
                  src="/abhiimg.jpg"
                  alt="Shashvat Yadav"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 dark:bg-blue-900/50 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 dark:bg-purple-900/50 rounded-full opacity-30"></div>
            </div>
          </motion.div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">User-Centric</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I focus on creating experiences that users love and find intuitive to use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200"
          >
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Clean Code</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I write maintainable, well-documented code that's easy to understand and extend.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200"
          >
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quality First</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I prioritize quality in every aspect of development, from design to deployment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors duration-200"
          >
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Always Learning</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm constantly learning new technologies and best practices to stay current.
            </p>
          </motion.div>
        </div>

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Currently Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">Java</h4>
              <p className="text-gray-600 dark:text-gray-300">Core Java concepts and OOP principles</p>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">Spring Boot</h4>
              <p className="text-gray-600 dark:text-gray-300">Building RESTful APIs and microservices</p>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">Advanced Backend</h4>
              <p className="text-gray-600 dark:text-gray-300">Database design and system architecture</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 