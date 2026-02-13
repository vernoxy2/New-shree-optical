import React, {  lazy } from "react";
import contactSectionBg from "../../assets/ContactPageImg/contactSectionBg.png";
import GetQuote from "../../components/getQuote/GetQuote";
import PartnerSlider from "../../components/partnerSlider/PartnerSlider";
import HomeHeader from "./HomeHeader";
import ShopFor from "./ShopFor";
import Eyeglasses from "./Eyeglasses";
import Sunglassess from "./Sunglassess";
import Lensess from "./Lensess";



const Choose = lazy(() => import("./Choose"));
const HappyCustomers = lazy(() => import("./HappyCustomers"));

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Hero/Header Section */}
      <HomeHeader />

      {/* Partner Logos Slider */}
      <PartnerSlider />
      
      {/* Lazy-loaded Sections */}
      {/* <Suspense fallback={<div className="text-center py-10"><img src={Logo} alt="logo" className="w-[100px] h-[100px] mx-auto" /></div>}> */}
        {/* <About />
        <Products />
        <Lenses />
        <Sunglasses /> */}
        <ShopFor />
        <Eyeglasses/>
        <Sunglassess/>
        <Lensess/>
        <Choose />
        <HappyCustomers />
      {/* </Suspense> */}

      {/* Get Quote / Contact Section */}
      <GetQuote backgroundImage={contactSectionBg} />
    </main>
  );
};

export default Home;
