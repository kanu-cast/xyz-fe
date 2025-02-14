import React from 'react';
import InputComponent from '../Partials/InputComponent';

const VerifyEmailForm = () => {
  return (
    <div className="block">
      <span className="font-0 block mb-5">
        An email with a six digit verification code was sent to your email
        <br />
        Please enter the verification code below to verify your email.
      </span>
      <div className="block my-0">
        <InputComponent
          type="text"
          required={true}
          className="br-2 font-2 my-2 block border"
          placeholder="G- 123456"
        />
      </div>

      <div className="action block text-center py-5">
        <button
          className="f-right bg-success clr-white py-3 pointer font-1 br-2 px-4 font-3 bold-1 my-2 my-md-4"
          style={{ width: '100%' }}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyEmailForm;
