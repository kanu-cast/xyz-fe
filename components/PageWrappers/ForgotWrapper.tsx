import React from "react";
import { useTranslation } from "react-i18next";
import ForgotPasswordForm from "../AllComponents/Users/ForgotPasswordForm";

const ForgotWrapper = () => {
  const { t } = useTranslation();
  return (
    <div
      className="relative card border shadow-stable br-3 flex-centered  py-5"
      style={{ height: "94vh" }}
    >
      <h1 className="font-4 bold-1 px-4 py-4 my-4 capitalize">
        {t("forgot password")}
      </h1>
      <ForgotPasswordForm />
      <footer className="b-top-1px-green card block mt-2 mt-lg-3 text-center mb-0  ">
        <span className="block pointer font-1 bold py-3">
          &copy; Copyright Dealmakers. All Rights Reserved 2025
        </span>
      </footer>
    </div>
  );
};

export default ForgotWrapper;
