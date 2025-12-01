import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, Database, Globe, Smartphone, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
  >
    
    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <div className="p-4 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm backdrop-blur-sm">
            {project.icon}
          </div>
        </div>
      )}

     
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white text-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0 transition-transform"
          title="View Code"
        >
          <Github size={20} />
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white text-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75"
            title="View Live Demo"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>

 
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${project.category === "Full Stack" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" :
              project.category === "Frontend" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                project.category === "Backend" ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" :
                  "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
            }`}>
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md border border-gray-200 dark:border-gray-600"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded-md border border-gray-200 dark:border-gray-700">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Features a responsive design and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Tailwind"],
      category: "Full Stack",
      github: "https://github.com/AbhishekDwivedi512/Shopper",
      live: "https://ecommerce-demo.com",
      icon: <Database className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking. Includes drag-and-drop functionality.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      category: "Frontend",
      github: "https://github.com/AbhishekDwivedi512/reqres-user-management",
      live: "https://taskmanager-demo.com",
      icon: <Code2 className="w-8 h-8 text-green-500" />
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using multiple weather APIs. Features location detection and interactive charts.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      category: "Frontend",
      github: "https://github.com/yourusername/weather-app",
      live: "https://weather-demo.com",
      icon: <Globe className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Mobile Fitness Tracker",
      description: "A React Native fitness tracking application with workout logging, progress charts, and goal setting. Syncs with health APIs.",
      technologies: ["React Native", "Expo", "AsyncStorage", "Chart.js"],
      category: "Mobile",
      github: "https://github.com/yourusername/fitness-tracker",
      live: null,
      icon: <Smartphone className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Quiz -Application",
      description: "A content management system for blogs with rich text editing, user roles, and SEO optimization. Built with performance in mind.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      category: "Full Stack",
      github: "https://github.com/AbhishekDwivedi512/Quiz-Application-",
      live: "https://blog-demo.com",
      icon: <Database className="w-8 h-8 text-purple-500" />
    },
    {
      title: "API Gateway Service",
      description: "A microservices API gateway built with Spring Boot for handling authentication, routing, and rate limiting. Scalable and secure.",
      technologies: ["Java", "Spring Boot", "Spring Security", "Redis", "Docker"],
      category: "Backend",
      github: "https://github.com/AbhishekDwivedi512/RegistorKaro",
      live: null,
      icon: <Code2 className="w-8 h-8 text-red-500" />
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-sm mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my passion for building robust and scalable applications.
          </p>
        </motion.div>

        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${filter === cat
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

       
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View All Projects on GitHub
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;