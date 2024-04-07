import React from "react";
import "../styles/AdminSidebarStyles.css";
import AdminSidebar from "../components/AdminSidebar";

function Home() {
  return (
    <>
    <AdminSidebar/>
      <div className="products">
      <h1>Home</h1>
    </div>
    </>
  
  );
}

export default Home;
