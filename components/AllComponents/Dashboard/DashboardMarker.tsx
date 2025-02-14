import React from 'react';
import Link from 'next/link';
interface DashboardMarkerInterface {
  type: string;
  link?: string;
  title: string;
  amount: number;
  icon?: string;
}
const DashboardMarker = (props: DashboardMarkerInterface) => {
  const { type, link, title, amount } = props;
  return (
    <Link href={link ? `${link}` : ''}>
      <div
        className={
          type == 'success'
            ? 'd-marker inline-block shadow-0 mx-3 my-3 py-3 px-3 br-3 card border pointer bg-success'
            : 'd-marker inline-block shadow-0 mx-3 my-3 py-3 px-3 br-3 card border pointer bg-danger'
        }
      >
        <span className="font-3 bold-none block bold-5 ">{amount} </span>
        <span className="font-1 bold py-0">{title}</span>
      </div>
    </Link>
  );
};
export default DashboardMarker;
