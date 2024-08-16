// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import image1 from "../../assets/icon/roli.png";
// import image2 from "../../assets/icon/roli2.webp";
// import image3 from "../../assets/icon/roli3.webp";
// import image4 from "../../assets/icon/slider4.webp"

// const SimpleSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1, //
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const photos = [image2, image1, image3,image4];

//   return (
//    <>
  
//     <div className="bg-gray-200 h-screen py-[120px] ">
     
//       <div
//         className="container bg-white mx-auto  "
//         style={{ height: "64vh", width: "99%" }}
//       >
//         <Slider {...settings} style={{ height: "100%" }}>
//           {photos.map((photo, index) => (
//             <div
//               className="border pl-[300px]"
//               key={index}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 height: "100%",
//               }}
//             >
//               <img
//                 src={photo}
//                 alt={`Slide ${index}`}
                
//                 className="max-h-full max-w-full object-cover"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div></>
//   );
// };

// export default SimpleSlider;
