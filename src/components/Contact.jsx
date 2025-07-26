import { motion } from 'framer-motion';
import { FaEnvelope, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    {
      label: 'Email Me',
      icon: <FaEnvelope size={28} />,
      link: 'mailto:devisricm011@gmail.com',
      description: 'Let’s talk about your ideas.',
    },
    {
      label: 'LinkedIn',
      icon: <FaLinkedin size={28} />,
      link: 'https://linkedin.com/in/devisri-dadi-303272294',
      description: 'Let’s connect professionally.',
    },
    {
      label: 'GitHub',
      icon: <FaGithub size={28} />,
      link: 'https://github.com/Devisridadi',
      description: 'Browse my open source work.',
    },
    {
      label: 'Download CV',
      icon: <FaFileDownload size={28} />,
      link: 'https://drive.google.com/file/d/your-resume-id/view?usp=sharing', // Replace with your actual file ID
      description: 'Grab my latest resume.',
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-24 text-white relative overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Let’s Connect
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
                     Whether it’s a project, idea, internship, or just a “Hi!”, I’d love to hear from you.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl border border-gray-700 bg-[#1b1b1b]/80 backdrop-blur-xl shadow-lg transition-all hover:shadow-purple-500/10"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-2xl blur-sm"></div>

              <div className="relative flex flex-col items-center text-center space-y-4 z-10">
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-600/10 to-blue-500/10 text-purple-400 group-hover:text-white transition duration-300 animate-pulse">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-300">
                  {contact.label}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300">
                  {contact.description}
                </p>
                <span className="w-10 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 group-hover:scale-110 transition-transform mt-2"></span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
