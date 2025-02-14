import React from 'react';
import PeopleTableRow from './PeopleTableRow';
import { Pagination } from '../Partials/Pagination';
import { peoples } from '@/components/Seeds/Peoples';

const PeoplesList = () => {
  //   const { t } = useTranslation();

  return (
    <div className="block px-3 px-md-4 my-5">
      <div className="grid-seven br-2 shadow-0-stabl py-4 my-2">
        <div className="font-2 inline-block bold-2 capitalize block o-x-hidden"></div>
        <div className="font-2 d-none d-md-inline-block bold-2 capitalize block o-x-hidden"></div>

        <div className="font-2 inline-block bold-2 capitalize o-x-hidden">
          Full name
        </div>
        <div className="font-2 d-none d-lg-inline-block bold-2 capitalize o-x-hidden">
          NID
        </div>
        <div className="font-2 inline-block bold-2 capitalize d-none d-md-inline-block  o-x-hidden">
          Phone
        </div>
        <div className="font-2 inline-block bold-2 capitalize d-none d-md-inline-block  o-x-hidden">
          Assurer Name
        </div>
        <div className="font-2 inline-block bold-2 capitalize d-none d-lg-inline-block   o-x-hidden">
          Email
        </div>
        <div className="font-2 inline-block bold-2 capitalize o-x-hidden">
          Assurer Contact
        </div>
        {/* <div className="font-2 inline-block bold-2 capitalize d-none d-lg-inline-block">
          Actions
        </div> */}
      </div>

      <Pagination
        items={peoples}
        itemsPerPage={12}
        className="user-list"
        renderItem={(item) => (
          <PeopleTableRow
            person_id={item.person_id}
            full_name={item.full_name}
            national_id={item.national_id}
            email={item.email}
            phone_number={item.phone_number}
            residence={item.residence}
            assurer_name={item.assurer_name}
            assurer_contact={item.assurer_contact}
          />
        )}
      />
    </div>
  );
};

export default PeoplesList;
