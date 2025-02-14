import React from 'react';
import DashboardMarker from '../Dashboard/DashboardMarker';
import { Pagination } from '../Partials/Pagination';
import { inventoryItems } from '@/components/Seeds/Inventory';
import InventoryItemCard from './InventoryItemCard';

const InventoryList = () => {
  const borrowed = inventoryItems.filter(
    (item) => item.status == 'Borrowed'
  ).length;
  const available = inventoryItems.filter(
    (item) => item.status == 'Available'
  ).length;
  const wornout = inventoryItems.filter(
    (item) => item.condition == 'Worn Out'
  ).length;
  return (
    <div className="block px-3">
      <div className="block  mb-5 py-4">
        <DashboardMarker
          type="success"
          title="All Items"
          amount={inventoryItems.length}
        />
        <DashboardMarker
          type="success"
          title="Borrowed Items"
          amount={borrowed}
        />
        <DashboardMarker
          type="danger"
          title="Worn Out Items"
          amount={wornout}
        />
        <DashboardMarker
          type="success"
          title="Available Items"
          amount={available}
        />
      </div>
      <div className="block px-0">
        <Pagination
          items={inventoryItems}
          itemsPerPage={6}
          className=" double-grid-responsive"
          renderItem={(item) => (
            <InventoryItemCard
              item_id={item.item_id}
              name={item.name}
              category={item.category}
              serial_number={item.serial_number}
              condition={item.condition}
              status={item.status}
              created_at={item.created_at}
            />
          )}
        />
      </div>
    </div>
  );
};
export default InventoryList;
