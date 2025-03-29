import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Service from "../pages/Service";
import Solutions from "../pages/Solutions";
import ContactUs from "../pages/Contactus";
import Navbar from "../components/common/Navbar";
import Ecommerceheader from "../components/Solutions/E-Commercesolution/EcommerceHeader";
// import SoftwareSolutionsSection from "../components/Solutions/E-Commercesolution/SoftwareSolutionsSection";
import BusinessHeader from "../components/Service/BusinessProcess/BusinessHeader";


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
        {/* <Route
          path="/softwaresolutionssection"
          element={<SoftwareSolutionsSection />}
        /> */}
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/businessheader" element={<BusinessHeader />} />
      
      </Routes>
    </>
  );
};

export default AppRoutes;
