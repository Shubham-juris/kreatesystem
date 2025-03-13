// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "../pages/About";
// import Careers from "../pages/Careers";
// import Contactus from "../pages/Contactus";
// import Home from "../pages/Home";
// import Service from "../pages/Service";
// import Solutions from "../pages/Solutions";

// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/careers" element={<Careers />} />
//         <Route path="/contact" element={<Contactus />} />
//         <Route path="/services" element={<Service />} />
//         <Route path="/solutions" element={<Solutions />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;

import { Routes, Route } from "react-router-dom";  // ✅ No BrowserRouter here
import Home from "../pages/Home";
import About from "../pages/About";
import Careers from "../pages/Careers";
import ContactUs from "../pages/ContactUs";
import Service from "../pages/Service";
import Solutions from "../pages/Solutions";
import Navbar from "../components/common/Navbar";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
