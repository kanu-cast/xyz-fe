import React from 'react';
// import { useTranslation } from 'react-i18next';

const ActivityCard = () => {
  // const { t } = useTranslation();
  return (
    <div className="block py-3 px-3 border br-3 my-3 pointer shadow-0-stable">
      <div className="small-big-grid">
        <div className="block px-3 pt-2">
          <img
            src="/canyon.jpg"
            className="img-fit br-rnd"
            style={{ width: '3rem', height: '3rem' }}
          />
        </div>
        <div className="block px-0 font-2">
          <span className="block">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus.
          </span>
          <span className="block f-right font-0 py-2 text-muted">
            {' '}
            a few seconds ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
