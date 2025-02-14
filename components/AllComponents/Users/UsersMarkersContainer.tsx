import React from 'react';
import DashboardMarker from '../Dashboard/DashboardMarker';
import { users } from '@/components/Seeds/Users';

const UserMarkersContainer = () => {
  const inventoryManagers = users.filter(
    (item) => item.role == 'Inventory Manager'
  ).length;
  const programManagers = users.filter(
    (item) => item.role == 'Program Manager'
  ).length;
  return (
    <div className="block borde px-2">
      <DashboardMarker
        type="success"
        title="Inventory Managers"
        amount={inventoryManagers}
      />
      <DashboardMarker
        type="success"
        title="Program Managers"
        amount={programManagers}
      />
    </div>
  );
};
export default UserMarkersContainer;
