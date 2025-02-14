import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import UserMarkersContainer from '../AllComponents/Users/UsersMarkersContainer';
import UsersList from '../AllComponents/Users/UsersList';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputComponent from '../AllComponents/Partials/InputComponent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IoCloseOutline } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const UsersWrapper = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [fullnameError, setFullnameError] = useState('');
  const [showFullnameError, setShowFullnameError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);

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

  const handleFullname = (evt: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFullname(evt.target.value);
    setShowEmailError(false);
  };
  const handlePhone = (evt: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPhone(evt.target.value);
    setShowPhoneError(false);
  };
  const [role, setRole] = React.useState('');

  const handleChangeRole = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setRole(event.target.value);
  };
  /// adding new use r logic

  const addNewUser = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    if (password.length < 1) {
      setPasswordError('Password is Required');
      setShowPasswordError(true);
    }
    if (email.length < 1) {
      setEmailError('Email is Required');
      setShowEmailError(true);
    }
    if (phone.length < 1) {
      setPhoneError('Phone is Required');
      setShowPhoneError(true);
    }
    if (fullname.length < 1) {
      setFullnameError('Fullname is Required');
      setShowFullnameError(true);
    }
    if (phone.length > 1) {
      setPhoneError('');
      setShowPhoneError(false);
    }
    if (fullname.length > 1) {
      setFullnameError('');
      setShowFullnameError(false);
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style} className="card relative">
          <IoCloseOutline
            className="absolute right-0 top-1 mx-4 font-5 pointer"
            onClick={handleClose}
          />
          <span className=" font-3 poppins bold-1 my-4 text-center block">
            Add User Form
          </span>
          {/* Example form inside the modal */}
          <Box component="form" sx={{ mt: 2 }} className="px-4 py-4">
            <InputComponent
              name="full_name"
              onChange={handleFullname}
              type="text"
              required={true}
              className="br-2 font-2 my-2 block bg-hue border"
              labelClassName="font-1 bold-1"
              label="Full name:*"
              error={fullnameError}
              showError={showFullnameError}
              value={fullname}
            />
            <InputComponent
              name="email"
              onChange={handleEmail}
              type="email"
              required={true}
              className="br-2 font-2 my-2 block bg-hue border"
              labelClassName="font-1 bold-1"
              label="Email:*"
              error={emailError}
              showError={showEmailError}
              value={email}
            />
            <InputComponent
              name="phone_number"
              onChange={handlePhone}
              type="phone"
              required={true}
              className="br-2 font-2 my-2 block bg-hue border"
              labelClassName="font-1 bold-1"
              label=" Phone Number:*"
              error={phoneError}
              showError={showPhoneError}
              value={phone}
            />
            <InputComponent
              name="password"
              onChange={handlePassword}
              type="password"
              required={true}
              className="br-2 font-2 my-2 block bg-hue border"
              labelClassName="font-1 bold-1"
              label="Password :*"
              error={passwordError}
              showError={showPasswordError}
              value={password}
            />
            <Box sx={{ minWidth: 120, width: '100%' }}>
              <FormControl fullWidth>
                <InputLabel id="role-select-label">Role</InputLabel>
                <Select
                  labelId="role-select-label"
                  id="role-select"
                  value={role}
                  label="Role"
                  onChange={handleChangeRole}
                  sx={{ width: '100%' }} // Make the select full-width
                >
                  <MenuItem value="trainee">Inventory Manager</MenuItem>
                  <MenuItem value="employee">Program Manager</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="font-2 bold-1 bg-success poppins capitalize my-4 "
              onClick={addNewUser}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
      <div
        className="app-content card inline-block shadow-stable br-3 mt-2 mt-lg-3 mx-2 px-3 pt-3 pb-5"
        style={{ width: '96%' }}
      >
        <div className="double-grid">
          <h1 className="font-4 bold-1 px-4 py-4 capitalize">{t('users')} </h1>
          <div className="block text-right px-lg-4 py-lg-4 pt-4 px-2">
            <Button
              variant="contained"
              className="bg-success font-2 poppins capitalize"
              onClick={handleOpen}
            >
              <FaPlus className="mx-2 font-2 bold-0" />
              Add New User
            </Button>
          </div>
        </div>

        <UserMarkersContainer />
        <UsersList />
        <footer className="b-top-1px-green card block mt-2 mt-lg-3 text-center mb-0  ">
          <span className="block pointer font-1 bold py-3">
            &copy; Copyright Dealmakers. All Rights Reserved 2025
          </span>
        </footer>
      </div>
    </>
  );
};

export default UsersWrapper;
