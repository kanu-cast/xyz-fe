import React from 'react';
import { useTranslation } from 'react-i18next';

const ResetWrapper = () => {
  const { t } = useTranslation();
  return (
    <div
      className="app-content card inline-block shadow-stable br-3 mt-2 mt-lg-3 mx-2 px-3 pt-3 pb-5"
      style={{ width: '96%' }}
    >
      <h1 className="font-4 bold-1 px-4 py-4 capitalize">
        {t('reset password')}
      </h1>
      <footer className="b-top-1px-green card block mt-2 mt-lg-3 text-center mb-0  ">
        <span className="block pointer font-1 bold py-3">
          &copy; Copyright XYZ All Rights Reserved 2025
        </span>
      </footer>
    </div>
  );
};

export default ResetWrapper;
