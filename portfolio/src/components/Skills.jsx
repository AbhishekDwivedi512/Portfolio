
import React from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Database,
  Layout,
  Terminal
} from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
  >
    <div className="flex items-center mb-6">
      <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">{title}</h3>
    </div>

    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
            <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
          </div>
          <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}% ` }}
              transition={{ duration: 1, delay: delay + (index * 0.1) }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Java Spring Boot", level: 65 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "AWS", level: 60 },
        { name: "Docker", level: 70 }
      ]
    },
    {
      title: "Tools & Others",
      icon: Terminal,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Jest/Testing", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Agile/Scrum", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium text-sm mb-4">
            Technical Proficiency
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with daily.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              {...category}
              delay={index * 0.1}
            />
          ))}
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Rust', 'WebAssembly', 'GraphQL', 'System Design', 'AI/ML Integration'].map((item) => (
              <span
                key={item}
                className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;