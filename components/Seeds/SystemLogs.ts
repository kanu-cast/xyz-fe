import { users } from './Users';
import { actions } from './Actions';
import { inventoryItems } from './Inventory';
import { borrowingRecords } from './Borrowings';
import { damageReports } from './DamageReports';

export const systemLogs = [
  {
    log_id: 'f9e8a9cf-1234-5678-9101-abcdefabcdef',
    user_id: users[0].user_id, // Alice Johnson (Admin)
    action_id: actions[0].action_id, // Added new inventory item
    item_id: inventoryItems[0].item_id, // Dell XPS 15
    borrow_id: null, // No borrowing record for this action
    damage_id: null, // No damage record for this action
    timestamp: new Date(new Date().setDate(new Date().getDate() - 15)), // 15 days ago
  },
  {
    log_id: 'e8d7c6b5-2345-6789-9101-abcdefabcdef',
    user_id: users[0].user_id, // Alice Johnson (Admin)
    action_id: actions[1].action_id, // Assigned item to borrower
    item_id: inventoryItems[0].item_id, // Dell XPS 15
    borrow_id: borrowingRecords[0].borrow_id, // Borrowing record for Dell XPS 15
    damage_id: null, // No damage record for this action
    timestamp: new Date(new Date().setDate(new Date().getDate() - 10)), // 10 days ago
  },
  {
    log_id: 'd7c6b5a4-3456-7891-9101-abcdefabcdef',
    user_id: users[0].user_id, // Alice Johnson (Admin)
    action_id: actions[2].action_id, // Logged damage report
    item_id: inventoryItems[0].item_id, // Dell XPS 15
    borrow_id: borrowingRecords[0].borrow_id, // Borrowing record for Dell XPS 15
    damage_id: damageReports[0].damage_id, // Damage report for Dell XPS 15
    timestamp: new Date(new Date().setDate(new Date().getDate() - 5)), // 5 days ago
  },
  {
    log_id: 'c6b5a4d3-4567-8912-9101-abcdefabcdef',
    user_id: users[0].user_id, // Alice Johnson (Admin)
    action_id: actions[3].action_id, // Updated item status
    item_id: inventoryItems[1].item_id, // Office Chair
    borrow_id: borrowingRecords[1].borrow_id, // Borrowing record for Office Chair
    damage_id: damageReports[1].damage_id, // Damage report for Office Chair
    timestamp: new Date(new Date().setDate(new Date().getDate() - 3)), // 3 days ago
  },
  {
    log_id: 'b5a4d3e2-5678-9123-9101-abcdefabcdef',
    user_id: users[0].user_id, // Alice Johnson (Admin)
    action_id: actions[2].action_id, // Logged damage report
    item_id: inventoryItems[2].item_id, // Blender
    borrow_id: borrowingRecords[2].borrow_id, // Borrowing record for Blender
    damage_id: damageReports[2].damage_id, // Damage report for Blender
    timestamp: new Date(new Date().setDate(new Date().getDate() - 7)), // 7 days ago
  },
  {
    log_id: 'a4d3e2f1-6789-1234-9101-abcdefabcdef',
    user_id: users[0].user_id, // Alice Johnson (Admin)
    action_id: actions[3].action_id, // Updated item status
    item_id: inventoryItems[3].item_id, // Vacuum Cleaner
    borrow_id: borrowingRecords[3].borrow_id, // Borrowing record for Vacuum Cleaner
    damage_id: damageReports[3].damage_id, // Damage report for Vacuum Cleaner
    timestamp: new Date(new Date().setDate(new Date().getDate() - 2)), // 2 days ago
  },
];
