import React from 'react';
import InputComponent from '../Partials/InputComponent';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const ForgotPasswordForm = () => {
  return (
    <div className="block">
      <div className="block my-0">
        <InputComponent
          type="text"
          required={true}
          className="br-2 font-2 my-2 block border"
          //   width={300}
          placeholder="Email"
        />
      </div>
      <span className="font-0 block">
        An email with password resetting instructions will be sent to your
        <br />
        email, the same email you used when signing up for your account
      </span>
      <div className="action block text-center py-5">
        <Link href={'/'}>
          <span className="f-left py-3 pointer font-1 br-2  font-3 my-2 my-md-4">
            <FaArrowLeft /> Back to Login
          </span>
        </Link>
        <button className="f-right bg-success clr-white py-3 pointer font-1 br-2 px-4 font-3 bold-1 my-2 my-md-4">
          Send
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
