import React from "react";
import LNavbar from "@/components/LayoutComponents/Navbar";
import SideMenu from "@/components/LayoutComponents/SideMenu";

import DashboardWrapper from "@/components/PageWrappers/DashboardWrapper";

const DashboardPage = () => {
  return (
    <>
      <LNavbar />
      <div className="relative flex-box" style={{ width: "100%" }}>
        <SideMenu />
        <DashboardWrapper />
      </div>
    </>
  );
};

export default DashboardPage;
