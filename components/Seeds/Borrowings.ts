import { inventoryItems } from './Inventory';
import { peoples } from './Peoples';
import { users } from './Users';

export const borrowingRecords = [
  {
    borrow_id: '987a9cf1-6543-5678-9101-fedcba567890',
    item_id: inventoryItems[0].item_id, // Dell XPS 15
    borrower_id: peoples[0].person_id, // Lilliane Uwase
    assigned_by: users[0].user_id, // Alice Johnson
    borrow_date: new Date(new Date().setDate(new Date().getDate() - 10)), // 10 days ago
    expected_return_date: new Date(
      new Date().setDate(new Date().getDate() - 3)
    ), // 3 days ago
    initial_condition: 'New',
    return_condition: 'Worn Out',
    is_overdue: true,
  },
  {
    borrow_id: 'a1b2c3d4-5678-9101-1234-abcdefabcdef',
    item_id: inventoryItems[1].item_id, // Office Chair
    borrower_id: peoples[1].person_id, // John Doe
    assigned_by: users[0].user_id, // Alice Johnson
    borrow_date: new Date(new Date().setDate(new Date().getDate() - 5)), // 5 days ago
    expected_return_date: new Date(
      new Date().setDate(new Date().getDate() + 2)
    ), // 2 days from now
    initial_condition: 'Worn Out',
    return_condition: null,
    is_overdue: false,
  },
  {
    borrow_id: 'b2c3d4e5-6789-1011-1234-abcdefabcdef',
    item_id: inventoryItems[2].item_id, // Blender
    borrower_id: peoples[2].person_id, // Jane Smith
    assigned_by: users[0].user_id, // Alice Johnson
    borrow_date: new Date(new Date().setDate(new Date().getDate() - 8)), // 8 days ago
    expected_return_date: new Date(
      new Date().setDate(new Date().getDate() - 1)
    ), // 1 day ago
    initial_condition: 'New',
    return_condition: 'Broken',
    is_overdue: true,
  },
  {
    borrow_id: 'c3d4e5f6-7891-0111-1234-abcdefabcdef',
    item_id: inventoryItems[3].item_id, // Vacuum Cleaner
    borrower_id: peoples[3].person_id, // Alice Johnson
    assigned_by: users[0].user_id, // Alice Johnson
    borrow_date: new Date(new Date().setDate(new Date().getDate() - 15)), // 15 days ago
    expected_return_date: new Date(
      new Date().setDate(new Date().getDate() - 8)
    ), // 8 days ago
    initial_condition: 'Broken',
    return_condition: 'New',
    is_overdue: true,
  },
  {
    borrow_id: 'd4e5f6g7-8910-1112-1234-abcdefabcdef',
    item_id: inventoryItems[4].item_id, // Desk
    borrower_id: peoples[4].person_id, // Bob Brown
    assigned_by: users[0].user_id, // Alice Johnson
    borrow_date: new Date(new Date().setDate(new Date().getDate() - 3)), // 3 days ago
    expected_return_date: new Date(
      new Date().setDate(new Date().getDate() + 4)
    ), // 4 days from now
    initial_condition: 'New',
    return_condition: null,
    is_overdue: false,
  },
  {
    borrow_id: 'e5f6g7h8-9101-1121-1234-abcdefabcdef',
    item_id: inventoryItems[5].item_id, // Microwave
    borrower_id: peoples[5].person_id, // Charlie Davis
    assigned_by: users[0].user_id, // Alice Johnson
    borrow_date: new Date(new Date().setDate(new Date().getDate() - 12)), // 12 days ago
    expected_return_date: new Date(
      new Date().setDate(new Date().getDate() - 5)
    ), // 5 days ago
    initial_condition: 'Worn Out',
    return_condition: 'Worn Out',
    is_overdue: true,
  },
];
