import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import "../styles/AdminSidebarStyles.css";
import AdminDashboard from "../components/AdminDashboard";
import CountUsers from "../components/CountUsers";
import '../styles/AdminHomePageStyles.css'
import CityBarChart from "../components/CityBarChart";



function AdminHomepage() {
  return (
    <>
    <div>
    <AdminSidebar/>
    </div>
    <AdminDashboard/>
    <CountUsers/>

    </>
    
  );
}

export default AdminHomepage;