import React from "react";
import image from "../../assets/icon/featured.png";
import { motion, useInView } from "framer-motion";
const Featured = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="bg-customBlue w-full h-screen ">
      <div className="container  mx-auto pt-9">
     <div className="block md:flex">
     <div className="hidden   md:block py-[200px]  w-[30%]">
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={isInView ? { opacity: 1, y: -50 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className=" text-[50px] text-white font-ubuntu"
          >
            Shop Featured <br /> Collection
          </motion.h1>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={isInView ? { opacity: 1, y: -50 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-gray-400 font-montserrat pt-9"
          >
            We are always striving to improve,and our most recognisable watches
            are uptaed with new desing and technologies. Offering a chanllenge
            to push limits and raise the bar .With the same assurance of
            superior quality as before,curtesy to the Luxury's entire mastery of
            wathcmaking knowledge
          </motion.p>
          <motion.li
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={isInView ? { opacity: 1, y: -50 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-white pt-9"
          >
            Explore all collections
          </motion.li>
        </div>
        <div className="pb-[35px] md:justify-center items-center flex">
          <motion.img
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={isInView ? { opacity: 2, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            src={image}
            className="w-[800px] brightness-50"
            alt="blue-rolex"
          />
        </div>
        <div className="flex flex-col gap-[50px] pl-[120px] px-[50px] justify-center md:flex-col md:gap-[95px] md:pl-0">
          <motion.button
            ref={ref}
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, x: -50 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-custom-gradient py-3 px-5  font-thin rounded-3xl text-white font-montserrat -ml-[50px] "
          >
            Water-Resistanc
          </motion.button>
          <motion.button
            ref={ref}
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, x: -50 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="bg-custom-gradient py-3 px-5  font-thin rounded-3xl text-white font-montserrat"
          >
            Chronometer
          </motion.button>
          <motion.button
            ref={ref}
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, x: -50 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
            className="bg-custom-gradient py-3 px-5 font-thin rounded-3xl text-white font-montserrat"
          >
            Anti-Magnetic
          </motion.button>
          <motion.button
            ref={ref}
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, x: -50 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
           
            className="bg-custom-gradient py-3 px-5  font-thin rounded-3xl text-white font-montserrat -ml-[50px]"
          >
            Self Winding
          </motion.button>
        </div>
     </div>
      </div>
    </div>
  );
};

export default Featured;


