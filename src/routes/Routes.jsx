import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Service from "../pages/Service";
import ContactUs from "../pages/Contactus";
import Navbar from "../components/common/Navbar";
// For Solution section
import Solutions from "../pages/Solutions";
import Ecommerceheader from "../components/Solutions/E-Commercesolution/EcommerceHeader";
import BusinessHeader from "../components/Service/BusinessProcess/BusinessHeader";
// For Service section
import ConsulingSrevice from "../components/Service/ConsulingSrevice/ConsulingSrevice";
import SoftwareDevelopement from "../components/Solutions/Software developement/SoftwareDevelopement";
import DigitalMarketing from "../components/Service/DigitalMarketiong/DigitalMarketing";
import GraphicDesign from "../components/Service/GraphicDesign/GraphicDesign";
import UiUxDesign from "../components/Service/UiUxDesign/UiUxDesign";
import WebDevelopement from "../components/Service/WebDevelopement/WebDevelopement";



const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/ecommerceheader" element={<Ecommerceheader />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/consultingservices" element={<ConsulingSrevice />} />
        <Route path="/softwaresolutionssection" element={<SoftwareDevelopement />} />
        <Route path="/businessheader" element={<BusinessHeader />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
        <Route path="/graphicdesign" element={<GraphicDesign />} />
        <Route path="/UiUxDesign" element={<UiUxDesign />} />
        <Route path="/webdevelopement" element={<WebDevelopement />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
