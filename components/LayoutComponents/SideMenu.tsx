'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaUsers } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { BiHelpCircle } from 'react-icons/bi';
import { IoMdHome } from 'react-icons/io';
import Link from 'next/link';
import { Context } from '@/pages/context';
import { useTranslation } from 'react-i18next';
import { MdOutlineInventory } from 'react-icons/md';
import { PiStudentBold } from 'react-icons/pi';
import { MdBrokenImage } from 'react-icons/md';

const SideMenu = () => {
  //context consuption
  const context = useContext(Context);
  if (!context) {
    throw new Error('side menu must be used within a ContextProvider');
  }
  const { isSideMenuOpen } = context;

  // themes logic
  const [darkMode, setDarkMode] = useState(false);

  const changeBg = (
    lightColorLightness: string,
    whiteColorLightness: string,
    darkColorLightness: string
  ) => {
    const root = document.documentElement;

    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
  };
  const activateDarkMode = () => {
    setDarkMode(true);
    changeBg('10%', '18%', '95%');
    localStorage.setItem('theme', 'dark');
  };
  const activateLightMode = () => {
    setDarkMode(false);
    changeBg('92%', '100%', '17%');
    localStorage.setItem('theme', 'light');
  };
  useEffect(() => {
    const themeSelected = localStorage.getItem('theme');
    if (themeSelected == 'dark') {
      activateDarkMode();
    } else {
      activateLightMode();
    }
  }, []);

  // translations
  const { t } = useTranslation();
  const router = useRouter();
  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <div
      className="side-menu card inline-block shadow-stable mt-2 mt-lg-3 mx-2 br-4 pt-4"
      style={{ width: isSideMenuOpen ? '18rem' : '4rem' }}
    >
      <ul>
        <Link
          className={
            isActive('/v1/dashboard')
              ? 'l-height-4 hovered style-none my-4 block py-2 capitalize active bold-2'
              : 'l-height-4 hovered style-none my-4 block py-2 capitalize'
          }
          href="/v1/dashboard"
        >
          <li className="block px-4 pointer">
            {/* <HiHome className="bold-1 inline-block" /> */}
            <span className="bold-4 inline-block font-3 inline-block pt-0">
              <IoMdHome className="bold-1 inline-block" />
            </span>

            {/* <MdHome className="bold-1 inline-block" /> */}
            <span className="font-1-5 bold-none mb-3 px-3 capitalize">
              {isSideMenuOpen ? <span>{t('dashboard')}</span> : ''}
            </span>
          </li>
        </Link>
        <Link
          className={
            isActive('/v1/users')
              ? 'l-height-4 hovered style-none my-4 block py-2 capitalize active bold-2'
              : 'l-height-4 hovered style-none my-4 block py-2 capitalize'
          }
          href="/v1/users"
        >
          <li className="block px-4 pointer">
            <FaUsers className="bold-1 inline-block" />
            <span className="font-1-5 bold-none mb-3 px-3">
              {isSideMenuOpen ? <span>{t('users')}</span> : ''}
            </span>
          </li>
        </Link>
        <Link
          className={
            isActive('/v1/inventory')
              ? 'l-height-4 hovered style-none my-4 block py-2 capitalize active bold-2'
              : 'l-height-4 hovered style-none my-4 block py-2 capitalize'
          }
          href="/v1/inventory"
        >
          <li className="block px-4 l-height-4 hovered style-none my-0 block py-0 capitalize pointer">
            <MdOutlineInventory className="bold-1 inline-block" />
            <span className="font-1-5 bold-none mb-3 px-3">
              {isSideMenuOpen ? <span>{t('inventory')}</span> : ''}
            </span>
          </li>
        </Link>
        <Link
          className={
            isActive('/v1/peoples')
              ? 'l-height-4 hovered style-none my-4 block py-2 capitalize active bold-2'
              : 'l-height-4 hovered style-none my-4 block py-2 capitalize'
          }
          href="/v1/peoples"
        >
          <li className="block px-4 l-height-4 hovered style-none my-0 block py-0 capitalize pointer">
            <PiStudentBold className="bold-1 inline-block" />
            <span className="font-1-5 bold-none mb-3 px-3">
              {isSideMenuOpen ? <span>{t('peoples')}</span> : ''}
            </span>
          </li>
        </Link>
        <Link
          className={
            isActive('/v1/damages')
              ? 'l-height-4 hovered style-none my-4 block py-2 capitalize active bold-2'
              : 'l-height-4 hovered style-none my-4 block py-2 capitalize'
          }
          href="/v1/damages"
        >
          <li className="block px-4 l-height-4 hovered style-none my-0 block py-0 capitalize pointer">
            <MdBrokenImage className="bold-1 inline-block" />
            <span className="font-1-5 bold-none mb-3 px-3">
              {isSideMenuOpen ? <span>{t('damage reports')}</span> : ''}
            </span>
          </li>
        </Link>
        {darkMode ? (
          <li
            className="l-height-4 hovered style-none my-4 block py-2 capitalize pointer block px-4"
            onClick={() => activateLightMode()}
          >
            <MdLightMode className="bold-1 inline-block" />

            <span className="font-1-5 bold-none mb-3 px-3">
              {isSideMenuOpen ? <span>{t('theme')}</span> : ''}
            </span>
          </li>
        ) : (
          <li
            className="l-height-4 hovered style-none my-4 block py-2 capitalize pointer block px-4"
            onClick={() => activateDarkMode()}
          >
            <MdDarkMode className="bold-1 inline-block" />

            <span className="font-1-5 bold-none mb-3 px-3">
              {isSideMenuOpen ? <span>{t('theme')}</span> : ''}
            </span>
          </li>
        )}

        <Link
          className={
            isActive('/v1/help')
              ? 'l-height-4 hovered style-none my-4 block py-2 capitalize active bold-2'
              : 'l-height-4 hovered style-none my-4 block py-2 capitalize'
          }
          href="/v1/help"
        >
          <li className="block px-4 pointer">
            <BiHelpCircle className="bold-1 inline-block" />
            <span className="font-1-5 bold-none mb-3 px-3">
              {isSideMenuOpen ? <span>{t('help')}</span> : ''}
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideMenu;
