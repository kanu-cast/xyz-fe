import React from 'react';
import UserTableRow from './UserTableRow';
import { Pagination } from '../Partials/Pagination';
import { users } from '@/components/Seeds/Users';

const UsersList = () => {
  //   const { t } = useTranslation();

  return (
    <div className="block px-3 px-md-4 my-5">
      <div className="grid-six br-2 shadow-0-stabl py-4 my-2">
        <div className="font-2 inline-block bold-2 capitalize block o-x-hidden"></div>
        <div className="font-2 d-none d-md-inline-block bold-2 capitalize o-x-hidden"></div>
        <div className="font-2 inline-block bold-2 capitalize o-x-hidden">
          Full name
        </div>
        <div className="font-2 inline-block bold-2 capitalize d-none d-md-inline-block  o-x-hidden">
          Phone
        </div>
        {/* <div className="font-2 inline-block bold-2 capitalize d-none d-lg-inline-block  o-x-hidden">
          Emmergency
        </div> */}
        <div className="font-2 inline-block bold-2 capitalize d-none d-md-inline-block   o-x-hidden">
          Email
        </div>
        <div className="font-2 inline-block bold-2 capitalize o-x-hidden">
          Role
        </div>
        {/* <div className="font-2 inline-block bold-2 capitalize d-none d-lg-inline-block">
          Actions
        </div> */}
      </div>

      <Pagination
        items={users}
        itemsPerPage={12}
        className="user-list"
        renderItem={(item) => (
          <UserTableRow
            full_name={item.full_name}
            phone_number={item.phone_number}
            role={item.role}
            email={item.email}
            user_id={item.user_id}
          />
        )}
      />
    </div>
  );
};

export default UsersList;
