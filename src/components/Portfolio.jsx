import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJs,
  FaPython,
  FaReact
} from 'react-icons/fa';
import {
  SiApache,
  SiCisco,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiMaterialdesign,
  SiMysql,
  SiNodemon,
  SiOpenai,
  SiPostgresql,
  SiRender,
  SiTensorflow,
  SiVercel
} from 'react-icons/si';


const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const tabList = ['projects', 'internships', 'certificates', 'tech'];

  const certificates = [
    {
      title: 'Relational Database - IBM',
      link: 'https://drive.google.com/file/d/1FC6BjHPNdE8bvi15SYx5Ksl5UFwsAoV6/view?usp=sharing'
    },
    {
      title: 'CCNA 3 Networking - Cisco',
      link: 'https://drive.google.com/file/d/1qwBVdI8ph7aOonBysjB-6ezB18jpQVTp/view?usp=sharing'
    },
    {
      title: 'Python Essentials 1 & 2 - Cisco',
      link: 'https://drive.google.com/file/d/1MbdIOyBTHOQEUp98twGPHYpkOCIHuZ4I/view?usp=sharing'
    },
    {
      title: 'Java Programming - Udemy',
      link: 'https://drive.google.com/file/d/1MDZQaqx8cLH2z09HE2064q6tUemMIdc4/view?usp=sharing'
    },
    {
      title: 'Leading With Effective Communication',
      link: 'https://drive.google.com/file/d/1mVsvXVkpLMqLP9XrtuH5YTpUnl_1J282/view?usp=sharing'
    },
    {
      title: 'Deloitte Forage Internship',
      link: 'https://drive.google.com/file/d/10DL7P-8B-TnpXTt4uhz2laVHxYfaA3-F/view?usp=sharing'
    }
  ];
  
  const internships = [
    {
      title: 'Machine Learning Intern - HMI',
      date: 'Dec 2022 – May 2023',
      location: 'Visakhapatnam, AP',
      description: 'Built a Fake News Detection System using ML to identify misinformation.',
      link: 'https://drive.google.com/file/d/1aE8ghzN1MzQW7NtukkDWgLLcMpb3Urz8/view?usp=sharing'
    },
    {
      title: 'Web Developer Intern - Internpe',
      date: 'April 2024 – May 2024',
      location: 'Hyderabad, TS',
      description: 'Front-end design & optimization for seamless user experience.',
      link: 'https://drive.google.com/file/d/1sf3-xz_sSB_j5YglT93C_eWHQdQ_Ct2j/view?usp=sharing'
    },
    {
      title: 'Cyber Security Intern - Vodafone Idea Foundation',
      date: 'May 2024 – June 2024',
      location: 'Hyderabad, TS',
      description: 'Worked on steganography to hide information within digital media.',
      link: 'https://drive.google.com/file/d/1dhDYXZtKRxmS-eowykYCwI8J0mFBg_3y/view?usp=sharing'
    }
  ];
  
  const projects = [
    {
      title: 'Pet Shop Website',
      description: 'An e-commerce website for pets allowing users to browse, add to cart, and purchase pet products.',
      image: 'images/petshop.png',
      link: 'http://PetSales.infinityfreeapp.com',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'XAMPP']
    },
    {
      title: 'Heart Disease Prediction',
      description: 'A Machine Learning project that predicts the risk of heart disease based on medical attributes like blood pressure, cholesterol, and age.',
      image: 'images/heartdisease.jpg',
      link: '#',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter']
    },
    {
      title: 'Inventory Management System',
      description: 'A web-based inventory management system to handle product tracking, sales, and stock management.',
      image: 'images/Inventory.png',
      link: 'https://inventoryinvoice.infinityfreeapp.com/',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'XAMPP']
    }
  ];

  const techStack = [
    { 
      name: 'Programming Languages', 
      skills: [
        { name: 'Java', icon: <FaJava className="text-orange-500" /> },
        { name: 'Python', icon: <FaPython className="text-blue-400" /> },
        { name: 'C/C++', icon: <SiCplusplus className="text-blue-600" /> }
      ]
    },
    { 
      name: 'Web Development', 
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'React', icon: <FaReact className="text-blue-400" /> },
        { name: 'Django-Rest', icon: <SiDjango className="text-green-700" /> }
      ]
    },
    { 
      name: 'Database', 
      skills: [
        { name: 'SQL', icon: <SiMysql className="text-blue-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
      ]
    },
    { 
      name: 'UI Frameworks', 
      skills: [
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
        { name: 'Material UI', icon: <SiMaterialdesign className="text-blue-500" /> },
      ]
    },
    { 
      name: 'Other Skills', 
      skills: [
        { name: 'Cisco Packet Tracer', icon: <SiCisco className="text-blue-500" /> },
        { name: 'Machine Learning', icon: <SiTensorflow className="text-orange-500" /> },
        { name: 'Artificial Intelligence', icon: <SiOpenai className="text-purple-400" /> },
        { name: 'N8N automation', icon: <SiNodemon className="text-purple-400" /> },
        { name: 'Xampp', icon: <SiApache className="text-purple-400" /> },
        { name: 'Docker', icon: <SiDocker className="text-purple-400" /> },
        { name: 'Vercel', icon: <SiVercel className="text-purple-400" /> },
        { name: 'Render', icon: <SiRender className="text-purple-400" /> }
      ]
    }
  ];

  return (
    <section
      id="portfolio"
      className="min-h-screen py-20 text-white w-full overflow-hidden"
    >
      {/* Dark background with subtle gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[300px] h-[300px] -top-1/4 -right-1/4 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute w-[300px] h-[300px] -bottom-1/4 -left-1/4 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Make container full width */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              My Portfolio
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex rounded-full bg-gray-900/50 p-1.5 backdrop-blur-sm border border-gray-700/50 shadow-lg"
          >
            {tabList.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-highlight"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 relative">
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[120px] inline-flex items-center justify-center text-sm px-3 py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                        </svg>
                        View Project
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'internships' && (
            <motion.div
              key="internships"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {internships.map((intern, index) => (
                <motion.a
                  key={index}
                  href={intern.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md border border-gray-700/40 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 mb-2">
                      {intern.title}
                    </h3>
                    <p className="text-sm text-gray-400">{intern.date} — {intern.location}</p>
                    <p className="text-sm text-gray-300 mt-2">{intern.description}</p>
                    <p className="text-xs text-purple-300 mt-2 underline">View Certificate</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}

          {activeTab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {certificates.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md border border-gray-700/40 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-400">Click to view certificate</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}

          {activeTab === 'tech' && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {techStack.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-4 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex flex-col items-center text-center">
                          <div className="text-2xl mb-2">
                            {skill.icon}
                          </div>
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;