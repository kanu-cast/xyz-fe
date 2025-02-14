import React from 'react';

interface DamageReportProps {
  damage_id: string;
  item_id: string;
  item_name: string;
  item_category: string;
  reported_by: string;
  report_date: Date;
  damage_reason: string;
  repair_status: string;
}
const DamageReport = (props: DamageReportProps) => {
  const {
    // damage_id,
    item_id,
    item_name,
    item_category,
    reported_by,
    report_date,
    damage_reason,
    repair_status,
  } = props;
  return (
    <div
      className="inline-block mx-3 my-4 border br-3 px-3 py-4 shadow-stable pointer"
      style={{ width: '20rem', height: '24rem' }}
    >
      <div className="wrapper py-4 mb-4">
        <h1 className="block font-2 text-center my-3 clr-green">
          <span className="block">Item No. </span>{' '}
          <span className="font-1">{item_id}</span>
        </h1>
        <div className="details my-4 px-3 py-4">
          <div className="double-grid">
            <span className="block bold font-1">Item Name</span>
            <span className="block font-1 text-right">{item_name}</span>
          </div>
          <div className="double-grid">
            <span className="block bold font-1">Item category</span>
            <span className="block font-1 text-right">{item_category}</span>
          </div>
          <div className="double-grid">
            <span className="block bold font-1">Reported By</span>
            <span className="block font-1 text-right">{reported_by}</span>
          </div>
          <div className="double-grid">
            <span className="block bold font-1">Reported at</span>
            <span className="block font-1 text-right">
              {report_date.toDateString()}
            </span>
          </div>
          <div className="double-grid">
            <span className="block bold font-1">Damage Reason</span>
            <span className="block font-1 text-right bold-1">
              {damage_reason}
            </span>
          </div>
        </div>
        <span className="border block my-4"></span>
        <div className="double-grid px-3">
          <span className="block bold-1 font-3 ">Repair Status</span>
          <span
            className={
              repair_status == 'Repaired'
                ? 'block font-1 text-right clr-green bold-1'
                : 'block font-1 text-right clr-red bold-1'
            }
          >
            {repair_status}
          </span>
        </div>
      </div>
    </div>
  );
};
export default DamageReport;
