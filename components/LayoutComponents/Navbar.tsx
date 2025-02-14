'use client';
import React, { useContext, useState } from 'react';
import { FaGlobe, FaTrash } from 'react-icons/fa';
import { BsBellFill } from 'react-icons/bs';
import { Context } from '@/pages/context';
import { TfiMenu } from 'react-icons/tfi';
import LanguageSelector from './LanguageSelector';

const Navbar: React.FC = () => {
  // context consumption here
  const context = useContext(Context);
  if (!context) {
    throw new Error('Navbar must be used within a ContextProvider');
  }

  const {
    isSideMenuOpen,
    setIsSideMenuOpen,
    currentUserFullname,
    isCurrentUserLoggedIn,
  } = context;
  // internationalization method here
  const [showNotifications, setShowNotifications] = useState(false);
  const hideSideMenu = () => {
    const sideMenu = document.querySelector('.side-menu') as HTMLElement;
    sideMenu.classList.toggle('hide');
  };
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div
      className="nav shadow-stable d-flex py-4 py-md-4 py-lg-4"
      style={{ height: '4rem' }}
    >
      {/* Hamburger Menu */}
      <div className="hamburger inline-block">
        <span
          className="d-md-none icon inline-block font-4 mx-3 mx-md-3 mx-lg-4 pointer"
          onClick={hideSideMenu}
        >
          <TfiMenu />
        </span>
        <span
          className="d-none d-md-inline-block icon inline-block font-4 mx-3  pointer"
          onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
        >
          <TfiMenu />
        </span>
        <span className="inline-block pointer">
          <span className="clr-green bold-2 font-4">xyz</span>
        </span>
      </div>

      {/* Navigation Links */}
      <div className="menu-item f-right">
        {/* Icons & Language Selector */}
        <div className="mx-2 mx-md-4 inline-block">
          <div className="inline-block mx-4">
            <span className="d-none d-lg-inline-block">
              <FaGlobe className="font-3 mx-2" />
              <LanguageSelector />
            </span>
          </div>

          {/* Notification Bell */}
          {isCurrentUserLoggedIn ? (
            <span className="inline-block mx-4 mt-3 relative">
              <BsBellFill
                className="mt-3 font-3-5 absolute bell-icon pointer"
                onClick={toggleNotifications}
              />
              {showNotifications ? (
                <div className="absolute card notifications-pane py-3 px-3 br-3 o-x-scroll o-hidden scroll-double-shrinked">
                  <div className="not-wrapper flex-centered-vertical br-3 font-0 px-3 py-3 mb-3 ">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                    <span className="f-right font-1">
                      <FaTrash />
                    </span>
                  </div>
                  <div className="not-wrapper flex-centered-vertical br-3 font-0 px-3 py-3 mb-3 ">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                    <span className="f-right font-1">
                      <FaTrash />
                    </span>
                  </div>
                  <div className="not-wrapper flex-centered-vertical br-3 font-0 px-3 py-3 mb-3 ">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                    <span className="f-right font-1">
                      <FaTrash />
                    </span>
                  </div>
                  <div className="not-wrapper flex-centered-vertical br-3 font-0 px-3 py-3 mb-3 ">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                    <span className="f-right font-1">
                      <FaTrash />
                    </span>
                  </div>
                  <div className="not-wrapper flex-centered-vertical br-3 font-0 px-3 py-3 mb-3 ">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                    <span className="f-right font-1">
                      <FaTrash />
                    </span>
                  </div>
                  <div className="not-wrapper flex-centered-vertical br-3 font-0 px-3 py-3 mb-3 ">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                    <span className="f-right font-1">
                      <FaTrash />
                    </span>
                  </div>
                  <div className="not-wrapper flex-centered-vertical br-3 font-0 px-3 py-3 mb-3 ">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                    <span className="f-right font-1">
                      <FaTrash />
                    </span>
                  </div>
                </div>
              ) : (
                ''
              )}
            </span>
          ) : (
            ''
          )}
          {/* User Avatar */}
          {isCurrentUserLoggedIn ? (
            <span className="inline-block mx-3 py-0 my-0">
              <div className="d-flex py-0 my-0">
                <div className="inline-block mb-4">
                  <span
                    className="br-rnd b-1px-hue bg-green flex-centered-vertical flex-centered clr-white bold-2 font-3"
                    style={{ width: '2rem', height: '2rem' }}
                  >
                    {currentUserFullname ? currentUserFullname.charAt(0) : ''}
                  </span>
                </div>
              </div>
            </span>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
