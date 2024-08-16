import React, { useRef } from "react";
import "./banneri.scss";
import png from "../../assets/icon/rolexpng2.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="banner w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-screen">
      <div className="container mx-auto h-screen">
        <div className="md:flex justify-center items-center gap-[42%] pt-[18%]  ">
          <motion.div
            initial={{ opacity: 0, x: 0, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="page sm:mb-[100px] md:pl-[130px] pb-[55px]"
          >
            <div className="containeri">
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
              <button className="h3 text-white font-medium  font-montserrat cursor-pointer bg-black px-5 py-3 rounded-3xl border border-white">
                Buy now!
              </button>
            </div>
          </motion.div>
          <div className="sm:hidden md:block pr-9 ">
            <motion.img
              className="ml-[65%] w-[400px]"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              src={png}
              alt="imgpng"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
