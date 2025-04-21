import React from "react";
import AppRoutes from "./routes/Routes";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";


function App() {
  return (
    <>
    <div className=" justify-center items-center ">
      <Navbar/>
      </div>
      <AppRoutes />
      <Footer/>
     
    </>
  );
}

export default App;
