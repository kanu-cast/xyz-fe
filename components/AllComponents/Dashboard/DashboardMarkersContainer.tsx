import React from 'react';
import DashboardMarker from './DashboardMarker';
const DashboardMarkersContainer = () => {
  return (
    <div className="block borde px-2">
      <DashboardMarker type="success" title="Borrowers" amount={200} />
      <DashboardMarker type="success" title="Trainees" amount={1200} />
      <DashboardMarker type="success" title="Employes" amount={1200} />
      <DashboardMarker type="success" title="Damage Reports" amount={200} />
      <DashboardMarker type="success" title="Users" amount={1210} />
      <DashboardMarker type="success" title="System Logs" amount={120} />
      <DashboardMarker type="success" title="Admins" amount={1} />
      <DashboardMarker type="success" title="Inventory Managers" amount={2} />
    </div>
  );
};
export default DashboardMarkersContainer;
