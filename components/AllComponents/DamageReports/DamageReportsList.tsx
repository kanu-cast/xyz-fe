import React from 'react';
import DashboardMarker from '../Dashboard/DashboardMarker';
import { Pagination } from '../Partials/Pagination';
import { damageReports } from '@/components/Seeds/DamageReports';
import DamageReport from './DamageReport';

const DamageReportsList = () => {
  return (
    <div className="block px-3">
      <div className="block  mb-5 py-4">
        <DashboardMarker type="success" title="Damage reports" amount={6} />
        <DashboardMarker type="success" title="Repaired" amount={2} />
        <DashboardMarker type="danger" title="Pending " amount={3} />
        <DashboardMarker type="danger" title="Disposed" amount={1} />
      </div>
      <div className="block px-0">
        <Pagination
          items={damageReports}
          itemsPerPage={6}
          className="user-list triple-grid"
          renderItem={(item) => (
            <DamageReport
              damage_id={item.damage_id}
              item_id={item.item_id}
              item_name={item.item_name}
              item_category={item.item_category}
              reported_by={item.reported_by}
              report_date={item.report_date}
              damage_reason={item.damage_reason}
              repair_status={item.repair_status}
            />
          )}
        />
      </div>
    </div>
  );
};
export default DamageReportsList;
