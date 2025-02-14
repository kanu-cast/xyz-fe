import { Checkbox } from '@mui/material';
import React from 'react';
// import { useTranslation } from 'react-i18next';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { PiStudentBold } from 'react-icons/pi';

interface PeopleTableRowInterface {
  person_id: string;
  full_name: string;
  national_id: string;
  email: string;
  phone_number: string;
  residence: string;
  assurer_name: string;
  assurer_contact: string;
}
const PeopleTableRow = (props: PeopleTableRowInterface) => {
  const {
    full_name,
    national_id,
    email,
    phone_number,
    assurer_name,
    assurer_contact,
  } = props;
  // const { t } = useTranslation();
  return (
    <div className="grid-seven br-2 shadow-0-stabl border my-2">
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
          <PiStudentBold className="bold-2 font-2" />
        </span>
      </div>
      <div className="font-2 inline-block bold-2 capitalize o-x-hidden">
        {full_name}
      </div>
      <div className="font-2 inline-block d-none  d-lg-inline-block  capitalize o-x-hidden">
        {national_id}
      </div>
      <div className="font-1 inline-block capitalize d-none d-md-inline-block o-x-hidden">
        {phone_number}
      </div>
      <div className="font-1 capitalize d-none d-md-inline-block o-x-hidden">
        {assurer_name}
      </div>
      <div className="font-1 inline-block capitalize d-none d-lg-inline-block o-x-hidden">
        {email}
      </div>
      <div className="font-1 inline-block">{assurer_contact}</div>
      <div className="font-3 inline-block  bold-2 capitalize  mx-3 pointer">
        <FaEllipsisVertical />
      </div>
    </div>
  );
};

export default PeopleTableRow;
