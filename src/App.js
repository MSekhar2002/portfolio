import React, { useState, useEffect } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaDownload,
} from "react-icons/fa";

const PortfolioLandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setDarkMode(darkModeMediaQuery.matches);
    darkModeMediaQuery.addListener((e) => setDarkMode(e.matches));
    return () =>
      darkModeMediaQuery.removeListener((e) => setDarkMode(e.matches));
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      <FloatingParticles />
      <InteractiveBackground darkMode={darkMode} />

      <motion.div
        className="fixed top-0 left-0 right-0 h-3 bg-purple-600 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold"
        >
          Maddili Muni Sekhar
        </motion.h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${
            darkMode ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-white"
          }`}
        >
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </motion.button>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <HeroSection darkMode={darkMode} />
        <AboutSection darkMode={darkMode} />
        <SkillsSection darkMode={darkMode} />
        <ProjectsSection darkMode={darkMode} />
        <ContactSection
          darkMode={darkMode}
          formData={formData}
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
        />
      </main>

      <Footer darkMode={darkMode} />

      <svg
        className="fixed bottom-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <motion.path
          d="M 0 100 Q 250 50 500 100 Q 750 150 1000 100 L 1000 200 L 0 200 L 0 100"
          stroke={
            darkMode ? "rgba(124, 58, 237, 0.2)" : "rgba(124, 58, 237, 0.1)"
          }
          strokeWidth="2"
          fill="none"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};

const HeroSection = ({ darkMode }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="py-20 text-center"
  >
    <motion.h2
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-5xl font-bold mb-4"
    >
      Full Stack Developer
    </motion.h2>
    <motion.p
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="text-xl mb-8"
    >
      Crafting digital experiences with code and creativity
    </motion.p>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 200 }}
    >
      <a
        href="#contact"
        className={`px-8 py-3 rounded-full text-lg font-semibold ${
          darkMode
            ? "bg-purple-600 hover:bg-purple-700"
            : "bg-purple-500 hover:bg-purple-600"
        } text-white transition-colors duration-300`}
      >
        Get in Touch
      </a>
    </motion.div>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
      className="mt-6 flex justify-center items-center"
    >
      <a
        href="https://drive.google.com/file/d/1gDBsuRUudKp8avGzTdIzpZ42QaDfOS5b/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
      >
        <FaDownload className="mr-2" />
        Download Resume
      </a>
    </motion.div>
  </motion.section>
);

const AboutSection = ({ darkMode }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ root: true }}
    className="py-20"
  >
    <h3 className="text-3xl font-bold mb-8 text-center">About Me</h3>
    <motion.p
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      viewport={{ root: true }}
      className="text-lg mb-6 max-w-3xl mx-auto text-center"
    >
      Versatile Full Stack Developer with a strong foundation in front-end
      technologies like React.js, JavaScript, and modern web services such as
      RESTful APIs. Proven track record in delivering responsive,
      high-performance web applications.
    </motion.p>
    <motion.p
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      viewport={{ root: true }}
      className="text-lg max-w-3xl mx-auto text-center"
    >
      Skilled in collaborating with cross-functional teams, enhancing user
      experience, and delivering scalable, efficient software solutions.
      Dedicated to continuous learning and utilizing industry-leading tools like
      MongoDB, Node.js, and Tailwind CSS to drive product innovation.
    </motion.p>
  </motion.section>
);

const SkillsSection = ({ darkMode }) => {
  const skills = [
    "React.js",
    "Node.js",
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "MongoDB",
    "SQL",
    "HTML/CSS",
    "PowerBI",
    "Git/GitHub",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ root: true }}
      className="py-20"
    >
      <h3 className="text-3xl font-bold mb-8 text-center">Skills</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            viewport={{ root: true }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              darkMode
                ? "bg-purple-700 text-white"
                : "bg-purple-100 text-purple-800"
            }`}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const ProjectsSection = ({ darkMode }) => {
  const projects = [
    {
      title: "Nxt Watch",
      description:
        "YouTube-like application with user authentication and content exploration features.",
      link: "https://msekharnxtwatch.ccbp.tech",
    },
    {
      title: "Furrl's Mobile Website Clone",
      description:
        "Rebuilt the HomeHunts page of Furrl's mobile website, optimized for mobile view.",
      link: "https://sekhar-furrl-homehunts.vercel.app",
    },
    {
      title: "Jobby App",
      description:
        "All-in-one job searching platform with secure authentication and protected routes.",
      link: "https://sekharjobby.ccbp.tech",
    },
    {
      title:"NXT Assess",
      description:"Nxt Assess App shows React skills in data fetching, routing, and responsive design.",
      link:"https://msnxt.ccbp.tech"
    },
    {
      title:"Monthly Emojis",
      description:"Monthly Emojis React App tracks and displays user moods or activities using emojis.",
      link:"https://msmonthlyemoji.ccbp.tech/"
    },
    {
      title:"AI Chat Bot",
      description:"Riya, a dynamic AI assistant for queries and casual chats.",
      link:"https://sekharaichatbot.ccbp.tech/"
    },
    {
      title:"NXT Trendz",
      description:"A Website for Fashion that makes you stand out and express yourself.",
      link:"https://msekharnxttrend.ccbp.tech/"
    },
    {
      title:"Wikipedia Search App",
      description:"Wikipedia Search App for easy access to articles and information.",
      link:"https://munisekharwiki.ccbp.tech/"
    },
    {
      title:"Todo Manager",
      description:"A Todo Manager for organizing and tracking tasks efficiently.",
      link:"https://sekhartodolistw.ccbp.tech/"
    },
    {
      title:"Food Munch",
      description:"A Website for discovering and ordering delicious meals.",
      link:"https://foodmunchproj4.ccbp.tech/"
    },
    {
      title:"Guessing Game",
      description:"Guessing Number Game to identify a random number.",
      link:"https://sekhargusnggm.ccbp.tech/"
    },


  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ root: true }}
      className="py-20"
      wh
    >
      <h3 className="text-3xl font-bold mb-8 text-center">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ root: true }}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-lg shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-4 py-2 rounded ${
                darkMode
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-purple-500 hover:bg-purple-600"
              } text-white transition-colors duration-300`}
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const ContactSection = ({
  darkMode,
  formData,
  handleFormChange,
  handleFormSubmit,
}) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ root: true }}
    id="contact"
    className="py-20"
  >
    <h3 className="text-3xl font-bold mb-8 text-center">Get in Touch</h3>
    <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ root: true }}
        className="mb-4"
      >
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          required
          className={`w-full p-2 rounded ${
            darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
          }`}
        />
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ root: true }}
        className="mb-4"
      >
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          required
          className={`w-full p-2 rounded ${
            darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
          }`}
        />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ root: true }}
        className="mb-4"
      >
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleFormChange}
          required
          className={`w-full p-2 rounded ${
            darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
          }`}
          rows="4"
        ></textarea>
      </motion.div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-2 px-4 rounded ${
          darkMode
            ? "bg-purple-600 hover:bg-purple-700"
            : "bg-purple-500 hover:bg-purple-600"
        } text-white transition-colors duration-300`}
      >
        Send Message
      </motion.button>
    </form>
  </motion.section>
);

const Footer = ({ darkMode }) => (
  <motion.footer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className={`py-8 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <p>&copy; 2024 Maddili Muni Sekhar. All rights reserved.</p>
      <div className="flex space-x-4">
        <SocialIcon
          Icon={FaGithub}
          link="https://github.com/msekhar2002"
          darkMode={darkMode}
        />
        <SocialIcon
          Icon={FaLinkedin}
          link="https://www.linkedin.com/in/munisekharmaddili/"
          darkMode={darkMode}
        />
        <SocialIcon
          Icon={FaEnvelope}
          link="mailto:munisekhar654@gmail.com"
          darkMode={darkMode}
        />
      </div>
    </div>
  </motion.footer>
);

const SocialIcon = ({ Icon, link, darkMode }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className={`${
      darkMode
        ? "text-white hover:text-purple-400"
        : "text-gray-600 hover:text-purple-600"
    } transition-colors duration-300`}
  >
    <Icon size={24} />
  </motion.a>
);

const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-purple-500 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        transition={{
          duration: Math.random() * 10 + 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ opacity: 0.3 }}
      />
    ))}
  </div>
);

const InteractiveBackground = ({ darkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        className={`absolute w-96 h-96 rounded-full ${
          darkMode ? "bg-purple-900" : "bg-purple-200"
        } filter blur-3xl`}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        style={{ opacity: 0.2 }}
      />
    </div>
  );
};

export default PortfolioLandingPage;
