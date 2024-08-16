import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../assets/icon/sass.png"
import image2 from "../../assets/icon/tailwind-css-1.svg"
import image3 from "../../assets/icon/js.png"
import image4 from "../../assets/icon/mui.png"
import image5 from "../../assets/icon/Framer-Motion-1200x900.webp"
import image6 from "../../assets/icon/html.png"
import image7 from "../../assets/icon/css.png"
import iamge8 from "../../assets/icon//Bootstrap_logo.svg.png"



const InfiniteScroll = () => {
  return (
    <div className="scroll-container">
      <motion.div
        className="scroll-content"
        animate={{ x: [-800, 0, 800, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 15, 
          ease: 'linear' 
        }}
      >
         <img src={image6} alt="Image 1" className="scroll-image" />
         <img src={image7} alt="Image 1" className="scroll-image" />
        <img src={image1} alt="Image 1" className="scroll-image" />
        <img src={image2}alt="Image 2" className="scroll-image" />
        <img src={image3} alt="Image 3" className="scroll-image" />
        <img src={image4} alt="Image 3" className="scroll-image" />
        <img src={image5} alt="Image 3" className="scroll-image" />
        <img src={iamge8} alt="Image 3" className="scroll-image" />
        {/* Add more images as needed */}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;