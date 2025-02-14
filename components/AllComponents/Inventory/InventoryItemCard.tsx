import React from 'react';

interface InventoryInterface {
  item_id: string;
  name: string;
  category: string;
  serial_number?: string;
  condition: string;
  status: string;
  created_at: Date;
}
const InventoryItemCard = (props: InventoryInterface) => {
  const {
    item_id,
    name,
    category,
    serial_number,
    condition,
    status,
    created_at,
  } = props;

  return (
    <div className="block border shadow-1 py-4 px-4 br-3">
      <div className="small-big-grid">
        <img
          src={
            category == 'Furniture'
              ? '/furniture.jpg'
              : category == 'Cleaning Material'
                ? '/broom.jpg'
                : category == 'Food Utensil'
                  ? '/food_utensil.jpg'
                  : '/device.jpg'
          }
          style={{ maxHeight: '18rem', width: '100%' }}
          className="img-fit border br-3"
        />
        <div className="wrapper">
          <h1 className="block font-2 text-center mt-4 clr-green">
            <span className="font-3 bold-1">{name}</span>
          </h1>
          <div className="details my-4 px-3">
            <div className="double-grid py-1">
              <span className="block bold font-1">Condition</span>
              <span className="block font-1 text-right bold-1">
                {condition}
              </span>
            </div>
            <div className="double-grid py-1">
              <span className="block bold font-1">Category</span>
              <span className="block font-1 text-right bold-0">{category}</span>
            </div>
            <div className="double-grid py-1">
              <span className="block bold font-1">Serial Number</span>
              <span className="block font-1 text-right bold-0">
                {serial_number}
              </span>
            </div>
            <div className="double-grid py-1">
              <span className="block bold font-1">Purchased:</span>
              <span className="block font-1 text-right bold-0">
                {created_at.toDateString()}
              </span>
            </div>
            <div className="double-grid py-1">
              <span className="block bold font-1">Status</span>
              <span className="block font-1 text-right bold-1">{status}</span>
            </div>
            <div className="double-grid py-1">
              <span className="block bold font-1">Item ID</span>
              <span className="block font-1 text-right bold-0">{item_id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemCard;
