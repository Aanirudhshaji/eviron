import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This is where the pages are rendered */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
