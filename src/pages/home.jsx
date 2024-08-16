import React from "react";
import Banner from "../components/Hero/Banner";
import Featured from "../components/featured/Featured";
import Brand from "../components/footer/Brand";
import PhotoSwitcher from "../components/slider/PhotoSwitcher";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className=" w-full">
      <Banner />
      <PhotoSwitcher />
      <Featured />
      <Brand />
      <Footer />
    </div>
  );
};

export default Home;
