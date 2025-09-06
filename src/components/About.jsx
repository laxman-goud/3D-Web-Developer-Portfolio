import React from 'react';
import Tilit from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';

/**
 * ServiceCard Component
 * Displays a single service with a tilt effect and animation.
 *
 * @param {number} index - Index of the service for staggered animation.
 * @param {string} title - Title of the service.
 * @param {string} icon - Icon URL representing the service.
 */
const ServiceCard = ({ index, title, icon }) => (
  <Tilit className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilit>
);

/**
 * About Component
 * Shows an overview section about the developer along with service cards.
 */
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m an engineering student 🧑‍💻 passionate about web development and creating real-world applications.
        Currently exploring the MERN stack, APIs, and deployment while leveling up in JavaScript, React, and Node.js.
        I enjoy building personal projects 💡 that solve small but meaningful problems with modern tools and frameworks.
        My tech stack includes JavaScript, Python, HTML, CSS, React, Node.js, Express, Next.js, Tailwind CSS, and MongoDB.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
