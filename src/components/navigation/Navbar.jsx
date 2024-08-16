// import React, { useState, useEffect } from "react";
// import logo from "../../assets/icon/rolexlogo2.png";
// import { NavLink } from "react-router-dom";
// import Modal from "./Modal";
// import icon from "../../assets/icon/batman_hero_avatar_comics-512.webp";
// import { GiHamburgerMenu } from "react-icons/gi";
// import SideBar from "./SideBar";
// import { RiCloseLine } from "react-icons/ri";
// import { IoBagOutline } from "react-icons/io5";
// import profilepng from "../../assets/icon/329398_profile-icon-png.png";
// import logout from "../../assets/icon/ios-log-out-5.png";
// import searchicon from "../../assets/icon/search.png";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [modal, setModal] = useState(false);
//   const [sideBar, setSideBar] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

//   const handleProfileClick = () => {
//     setShowProfile(!showProfile);
//   };

//   const toggleSideBar = () => {
//     setSideBar(!sideBar);
//   };

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className={`bg-white backdrop-blur-md shadow-md fixed top-0 left-0 w-[100%] md: transition-all duration-300 z-50 ${
//           isScrolled ? "py-1" : "py-2"
//         }`}
//       >
//         <nav className="container  mx-auto flex items-center  justify-between px-4 py-1">
//           <a href="/">
//             <img
//               src={logo}
//               width={74}
//               alt="logo"
//               className="transition-all duration-300"
//             />
//           </a>
//           <div className="hidden md:flex space-x-4">
//             <NavLink
//               to="/"
//               className="text-black font-thin text-lg hover:text-blue-500"
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/about"
//               className="text-black font-thin text-lg hover:text-blue-500"
//             >
//               About
//             </NavLink>
//             <NavLink
//               to="/contact"
//               className="text-black font-thin text-lg hover:text-blue-500"
//             >
//               Contact
//             </NavLink>
//             <NavLink
//               to="/experience"
//               className="text-black font-thin text-lg hover:text-blue-500"
//             >
//               Experience
//             </NavLink>
//             <NavLink
//               to="/products"
//               className="text-black font-thin text-lg hover:text-blue-500"
//             >
//               Products
//             </NavLink>
//           </div>
//           <div className="hidden md:flex items-center space-x-4">
//             <img
//               src={searchicon}
//               className="w-5 h-5 cursor-pointer"
//               alt="search icon"
//             />

//             {isLoggedIn ? (
//               <div className="flex items-center space-x-3">
//                 <img
//                   src={icon}
//                   alt="avatar"
//                   className="w-8 h-8 cursor-pointer"
//                   onClick={handleProfileClick}
//                 />
//                 <img
//                   src={logout}
//                   alt="logout"
//                   className="w-6 h-6 cursor-pointer"
//                   onClick={handleLogout}
//                 />
//               </div>
//             ) : (
//               <div className="w-6 h-6 cursor-pointer" onClick={toggleModal}>
//                 <img src={profilepng} alt="profile" />
//               </div>
//             )}

//             <IoBagOutline
//               size={20}
//               className="cursor-pointer"
//               aria-label="Bag Icon"
//             />
//           </div>
//           <button
//             className={`md:hidden flex items-center transition-transform duration-300 ease-in-out ${
//               sideBar ? "rotate-180" : "rotate-0"
//             }`}
//             onClick={toggleSideBar}
//           >
//             {sideBar ? (
//               <RiCloseLine className="w-6 h-6" />
//             ) : (
//               <GiHamburgerMenu className="w-6 h-6" />
//             )}
//           </button>
//         </nav>
//       </div>
//       {modal && (
//         <Modal setIsLoggedIn={setIsLoggedIn} toggleModal={toggleModal} />
//       )}
//       {sideBar && <SideBar />}
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import logo from "../../assets/icon/rolexlogo2.png";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import icon from "../../assets/icon/batman_hero_avatar_comics-512.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "./SideBar";
import { RiCloseLine } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";
import profilepng from "../../assets/icon/329398_profile-icon-png.png";
import logout from "../../assets/icon/ios-log-out-5.png";
import searchicon from "../../assets/icon/search.png";
import { FaMoon, FaSun } from "react-icons/fa"; // Import dark mode icons

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modal, setModal] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`bg-white backdrop-blur-md shadow-md fixed top-0 left-0 w-[100%] md: transition-all duration-300 z-50 ${
          isScrolled ? "py-1" : "py-2"
        } ${darkMode ? " text-red" : " text-black"}`} // Conditional classes for dark mode
      >
        <nav className="container mx-auto flex items-center justify-between px-4 py-1">
          <a href="/">
            <img
              src={logo}
              width={74}
              alt="logo"
              className="transition-all duration-300"
            />
          </a>
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className="font-thin text-lg hover:text-blue-500"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="font-thin text-lg hover:text-blue-500"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="font-thin text-lg hover:text-blue-500"
            >
              Contact
            </NavLink>
            <NavLink
              to="/experience"
              className="font-thin text-lg hover:text-blue-500"
            >
              Experience
            </NavLink>
            <NavLink
              to="/products"
              className="font-thin text-lg hover:text-blue-500"
            >
              Products
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <img
              src={searchicon}
              className="w-5 h-5 cursor-pointer"
              alt="search icon"
            />

            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <img
                  src={icon}
                  alt="avatar"
                  className="w-8 h-8 cursor-pointer"
                  onClick={handleProfileClick}
                />
                <img
                  src={logout}
                  alt="logout"
                  className="w-6 h-6 cursor-pointer"
                  onClick={handleLogout}
                />
              </div>
            ) : (
              <div className="w-6 h-6 cursor-pointer" onClick={toggleModal}>
                <img src={profilepng} alt="profile" />
              </div>
            )}

            <IoBagOutline
              size={20}
              className="cursor-pointer"
              aria-label="Bag Icon"
            />

            {/* Dark Mode Toggle Button */}
            <button
              className="w-6 h-6 flex items-center justify-center"
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-800" />
              )}
            </button>
          </div>
          <button
            className={`md:hidden flex items-center transition-transform duration-300 ease-in-out ${
              sideBar ? "rotate-180" : "rotate-0"
            }`}
            onClick={toggleSideBar}
          >
            {sideBar ? (
              <RiCloseLine className="w-6 h-6 absolute z-50" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>
      {modal && (
        <Modal setIsLoggedIn={setIsLoggedIn} toggleModal={toggleModal} />
      )}
      {sideBar && <SideBar />}
    </>
  );
};

export default Navbar;