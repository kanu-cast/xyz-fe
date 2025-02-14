import React from 'react';
import LNavbar from '@/components/LayoutComponents/Navbar';
import SideMenu from '@/components/LayoutComponents/SideMenu';
import DamageReportsWrapper from '@/components/PageWrappers/DamageReportsWrapper';

export default function Damages() {
  return (
    <>
      <LNavbar />
      <div className="relative flex-box" style={{ width: '100%' }}>
        <SideMenu />
        <DamageReportsWrapper />
      </div>
    </>
  );
}
