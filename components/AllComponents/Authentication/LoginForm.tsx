import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputComponent from '../Partials/InputComponent';
import { Checkbox } from '@mui/material';
import Link from 'next/link';
import { users } from '@/components/Seeds/Users';
import { useRouter } from 'next/router';
import { Context } from '@/pages/context';

const LoginForm = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('loginForm must be used within a ContextProvider');
  }
  const {
    setCurrentUserFullname,
    setCurrentUserRole,
    setCurrentUserId,
    setIsCurrentUserLoggedIn,
  } = context;

  const { t } = useTranslation();
  const [email, setEmail] = useState('eric@igirerwanda.com');
  const [password, setPassword] = useState('pass123');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleEmail = (evt: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(evt.target.value);
    setShowEmailError(false);
  };
  const handlePassword = (evt: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(evt.target.value);
    setShowPasswordError(false);
  };

  const router = useRouter();

  const loginUser = () => {
    let pass = false;
    const foundUser = users.filter((item) => item.email == email)[0];
    if (foundUser) {
      pass = foundUser.password_hash === password;
    }
    if (foundUser && pass) {
      //update local storage
      localStorage.setItem('user_id', foundUser.user_id);
      localStorage.setItem('role', foundUser.role);
      localStorage.setItem('full_name', foundUser.full_name);
      router.push('/v1/dashboard');
      //update context
      setCurrentUserFullname(foundUser.full_name);
      setCurrentUserRole(foundUser.role);
      setCurrentUserId(foundUser.user_id);
      setIsCurrentUserLoggedIn(true);
    } else if (password.length < 1) {
      setPasswordError('Password is Required');
      setShowPasswordError(true);
    } else if (email.length < 1) {
      setEmailError('Email is Required');
      setShowEmailError(true);
    } else if (password.length > 1) {
      setPasswordError('');
      setShowPasswordError(false);
    } else if (email.length > 1) {
      setEmailError('');
      setShowEmailError(false);
    }
  };
  return (
    <div className="block">
      <div
        className="border py-4 px-4 px-md-5 card-body br-3 "
        // style={{ width: '20rem' }}
      >
        <span className="bold-1 font-4 text-center block mt-4  mb-5 mb-md-0 clr-gree capitalize">
          {t('login')}
        </span>
        <div className="form-wrapper mt-4 mt-md-5 px-2 px-md-0">
          <div className="block my-0">
            <InputComponent
              name="email"
              type="text"
              required={true}
              className="br-2 font-2 my-2 block"
              width={300}
              placeholder="Email"
              onChange={handleEmail}
              error={emailError}
              showError={showEmailError}
              value={email}
            />
          </div>

          <div className="block my-4">
            <InputComponent
              name="password"
              onChange={handlePassword}
              type="password"
              required={true}
              className="br-2 font-2 my-2 block"
              placeholder="Password"
              error={passwordError}
              showError={showPasswordError}
              value={password}
            />
          </div>
          <div className="block mt-2 mb-4">
            <Link href={'/forgot'}>
              <span className="f-right font-1 clr-green">Forgot Password?</span>
            </Link>
          </div>
          <div className="block mt-1 mt-md-4 mb-3">
            <Checkbox
              checked={false}
              className="inline-block"
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
            <span className="font-0 inline-block">Remember Me</span>
          </div>
          <div className="action block text-center py-3">
            <button
              className="bg-success clr-white py-3 pointer font-1 br-2 px-4 font-3 bold-1 my-2 my-md-4"
              style={{ width: '100%' }}
              onClick={loginUser}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
