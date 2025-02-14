import React from "react";
import LoginForm from "../AllComponents/Authentication/LoginForm";

export default function IndexWrapper() {
  return (
    <div
      className="relative card border shadow-stable br-3 flex-centered flex-centered-vertical"
      style={{ height: "92vh" }}
    >
      <LoginForm />
      <footer className="b-top-1px-green card block mt-2 mt-lg-3 text-center mb-0  ">
        <span className="block pointer font-1 bold py-3">
          &copy; Copyright Dealmakers. All Rights Reserved 2025
        </span>
      </footer>
    </div>
  );
}
