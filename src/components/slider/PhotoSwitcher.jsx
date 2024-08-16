// import React, { useState } from "react";
// import image1 from "../../assets/icon/roli.png";
// import image2 from "../../assets/icon/roli2.webp";
// import image3 from "../../assets/icon/roli3.webp";
// import { MdOutlineNavigateNext } from "react-icons/md";
// import { GrFormPrevious } from "react-icons/gr";
// import { motion, useInView } from "framer-motion";

// const PhotoSwitcher = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const photos = [image1, image2, image3];
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
//     );
//   };

//   return (
//     <div className="w-full h-screen  flex flex-col justify-center items-center">
//       <motion.img
//       ref={ref}
//         initial={{ opacity: 0, x: 5, scale: 0.8 }}
//         animate={isInView ? { opacity: 1, x: 5, scale: 1 } : {}}
//         transition={{ duration: 1.5, delay: 0.5 }}
//         className="w-[1000px] h-[700px]"
//         src={photos[currentIndex]}
//         alt="current"
//       />
//       <div className=" flex justify-center items-center gap-4 pt-9">
//         <button
//           onClick={handlePrev}
//           className="bg-gray-400 rounded-lg px-4 py-1"
//         >
//           <GrFormPrevious />
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-gray-400  rounded-lg px-4 py-1"
//         >
//           <MdOutlineNavigateNext />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PhotoSwitcher;


import React, { useState } from "react";
import image1 from "../../assets/icon/roli.png";
import image2 from "../../assets/icon/roli2.webp";
import image3 from "../../assets/icon/roli3.webp";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";

const PhotoSwitcher = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = [image1, image2, image3];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="relative w-[1000px] h-[700px]">
        <AnimatePresence initial={false}>
          <motion.img
            key={photos[currentIndex]}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full object-cover"
            src={photos[currentIndex]}
            alt="current"
          />
        </AnimatePresence>
      </div>
      <div className="flex justify-center items-center gap-4 pt-9">
        <button
          onClick={handlePrev}
          className="bg-gray-400 rounded-lg px-4 py-1"
        >
          <GrFormPrevious />
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-400 rounded-lg px-4 py-1"
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default PhotoSwitcher;