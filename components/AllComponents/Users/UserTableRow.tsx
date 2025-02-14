import { Checkbox } from '@mui/material';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';
import { FaEllipsisVertical } from 'react-icons/fa6';

interface UserTableRowInterface {
  user_id: string;
  full_name: string;
  email: string;
  phone_number: string;
  role: string;
}
const UserTableRow = (props: UserTableRowInterface) => {
  const { full_name, email, phone_number, role } = props;
  // const { t } = useTranslation();
  return (
    <div className="grid-six br-2 shadow-0-stabl border my-2">
      <Checkbox
        checked={false}
        sx={{
          color: 'gray', // Default border color
          '&.Mui-checked': {
            color: 'green', // Border & icon color when checked
          },
          '&:hover': {
            borderColor: 'blue', // Border color on hover
          },
          '&.Mui-focusVisible': {
            outline: '2px solid red', // Focus outline
          },
        }}
      />
      <div
        className="font-2 d-none d-md-inline-block bold-2 capitalize mx-lg-3 flex-centered-vertical flex-centered"
        style={{ height: '100%' }}
      >
        <span
          className="flex-centered pt-3"
          style={{ height: '2rem', width: '2rem' }}
        >
          <FaUserAlt />
        </span>
      </div>
      <div className="font-2 inline-block bold-2 capitalize o-x-hidden">
        {full_name}
      </div>
      <div className="font-1 inline-block capitalize d-none d-md-inline-block o-x-hidden">
        {phone_number}
      </div>
      {/* <div className="font-1 inline-block capitalize d-none d-lg-inline-block o-x-hidden">
        {emmergency}
      </div> */}
      <div className="font-1 inline-block capitalize d-none d-md-inline-block ">
        {email}
      </div>
      <div className="font-1 inline-block">{role}</div>
      <div className="font-3 inline-block  bold-2 capitalize  mx-3 pointer">
        <FaEllipsisVertical />
      </div>
    </div>
  );
};

export default UserTableRow;
