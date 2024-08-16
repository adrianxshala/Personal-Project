
import React from "react";
import image1 from "../../assets/icon/brand1.png";
import image2 from "../../assets/icon/brand2.svg";
import image3 from "../../assets/icon/ap2.png";
import image4 from "../../assets/icon/brand3.svg";
import image5 from "../../assets/icon/brand 4.png";
import { motion } from "framer-motion";

const Brand = () => {
  return (
    <div className="bg-custom-vanilla w-full overflow-hidden">
      <div className="container mx-auto py-[50px]">
        <motion.div
          animate={{ x: [-800, 0, 800, 0] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
          className="flex gap-[220px] w-[calc(100% + 800px)]" 
        >
          <img src={image1} className="w-[100px]" alt="1" />
          <img src={image2} className="w-[100px]" alt="2" />
          <img src={image3} className="w-[100px]" alt="3" />
          <img src={image4} className="w-[100px]" alt="4" />
          <img src={image5} className="w-[100px]" alt="5" />
        </motion.div>
      </div>
    </div>
  );
};

export default Brand;
