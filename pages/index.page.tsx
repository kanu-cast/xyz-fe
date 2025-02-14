import React from "react";
import LNavbar from "@/components/LayoutComponents/Navbar";
import IndexWrapper from "@/components/PageWrappers/IndexWrapper";

export default function Index() {
  return (
    <>
      <LNavbar />
      <div className="relative block px-0 mx-0" style={{ width: "100%" }}>
        <IndexWrapper />
      </div>
    </>
  );
}
