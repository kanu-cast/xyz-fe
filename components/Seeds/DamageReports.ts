import { inventoryItems } from './Inventory';
import { peoples } from './Peoples';
import { users } from './Users';

export const damageReports = [
  {
    damage_id: '7e8f9a0b-5678-4c3d-9101',
    item_name: inventoryItems[0].name,
    item_category: inventoryItems[0].category,
    item_id: inventoryItems[0].item_id, // Dell XPS 15
    reported_by: peoples[0].full_name, // Lilliane Uwase
    report_date: new Date(new Date().setDate(new Date().getDate() - 5)), // 5 days ago
    damage_reason: 'Laptop screen cracked during usage.',
    repair_status: 'Pending',
  },
  {
    damage_id: '8f9a0b1c-6789-4d5e-9101',
    item_name: inventoryItems[1].name,
    item_category: inventoryItems[1].category,
    item_id: inventoryItems[1].item_id, // Office Chair
    reported_by: users[0].full_name, // Alice Johnson (Admin)
    report_date: new Date(new Date().setDate(new Date().getDate() - 3)), // 3 days ago
    damage_reason: 'Chair leg broke.',
    repair_status: 'Repaired',
  },
  {
    damage_id: '9a0b1c2d-7891-4e6f-9101',
    item_name: inventoryItems[2].name,
    item_category: inventoryItems[2].category,
    item_id: inventoryItems[2].item_id, // Blender
    reported_by: peoples[2].full_name, // Jane Smith
    report_date: new Date(new Date().setDate(new Date().getDate() - 7)), // 7 days ago
    damage_reason: 'Blender motor burnt out.',
    repair_status: 'Disposed',
  },
  {
    damage_id: 'a0b1c2d3-8912-4f7a-9101',
    item_name: inventoryItems[3].name,
    item_category: inventoryItems[3].category,
    item_id: inventoryItems[3].item_id, // Vacuum Cleaner
    reported_by: users[0].full_name, // Alice Johnson (Admin)
    report_date: new Date(new Date().setDate(new Date().getDate() - 2)), // 2 days ago
    damage_reason: 'Vacuum stopped sucking.',
    repair_status: 'Pending',
  },
  {
    damage_id: 'b1c2d3e4-9123-4a8b-9101',
    item_name: inventoryItems[4].name,
    item_category: inventoryItems[4].category,
    item_id: inventoryItems[4].item_id, // Desk
    reported_by: peoples[4].full_name, // Bob Brown
    report_date: new Date(new Date().setDate(new Date().getDate() - 10)), // 10 days ago
    damage_reason: 'Desk surface scratched.',
    repair_status: 'Repaired',
  },
  {
    damage_id: 'c2d3e4f5-1234-4b9c-9101',
    item_name: inventoryItems[5].name,
    item_category: inventoryItems[5].category,
    item_id: inventoryItems[5].item_id, // Microwave
    reported_by: users[0].full_name, // Alice Johnson (Admin)
    report_date: new Date(new Date().setDate(new Date().getDate() - 1)), // 1 day ago
    damage_reason: 'Microwave stopped heating.',
    repair_status: 'Pending',
  },
];
