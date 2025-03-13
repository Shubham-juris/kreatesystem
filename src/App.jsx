import React from "react";
import AppRoutes from "./routes/Routes";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";


function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer/>
     
    </>
  );
}

export default App;
