import React from "react";
import { Link } from "react-router-dom";
import aboutimg from "../../assets/icon/Adrian Portratit-Photoroom.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="md:flex  pt-9">
      <div className="sm:pt-9 md:pt-[200px]">
        <motion.h1
          initial={{ opacity: 0, y: +50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          className="font-ubuntu  font-bold text-[100px] "
        >
          Hi, I'm Adrian
        </motion.h1>
        <motion.h6
          initial={{ opacity: 0, y: +50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="font-small font-montserrat text-gray-500 text-[20px] -tracking-tighter pb-9"
        >
          Designer,developer, and behaviorial researcher <br />
          fascinated by the social product space.
        </motion.h6>
        <motion.h6
          initial={{ opacity: 0, y: +50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-small font-montserrat text-gray-500 text-[20px] -tracking-tighter pb-9 pt-5"
        >
          Currently based in Prishtina,researching the intersetion <br />
          between technology and mental illness
        </motion.h6>
        <Link
          to="/"
          className="font-bold text-[20px] py-3 font-montserrat border-b-4 border-b-black"
        >
          Check out my work
        </Link>
      </div>
      <motion.img
       initial={{ opacity: 0, x: +50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.6, delay: 1.1 }}
        src={aboutimg}
        className="sm:w-[80%] md:w-[60%] lg:w-[42%] pl-[90px] rounded-[60%]"
        alt="aboutimage"
      />
    </div>
  );
};

export default About;
