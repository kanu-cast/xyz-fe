import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InventoryList from '../AllComponents/Inventory/InventoryList';
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
const InventoryWrapper = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [showNameError, setShowNameError] = useState(false);
  const [condition, setCondition] = React.useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');

  const handleName = (evt: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(evt.target.value);
    setShowNameError(false);
  };
  const handleSerialNumber = (evt: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSerialNumber(evt.target.value);
  };

  const handleChangeCategory = (evt: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCategory(evt.target.value);
    setShowNameError(false);
  };
  const handleChangeStatus = (evt: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setStatus(evt.target.value);
  };

  const handleChangeCondition = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCondition(event.target.value);
  };
  /// adding new use r logic

  const addNewUser = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();

    if (name.length < 1) {
      setNameError('Name is Required');
      setShowNameError(true);
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
            Add Item Form
          </span>
          {/* Example form inside the modal */}
          <Box component="form" sx={{ mt: 2 }} className="px-4 py-4">
            <InputComponent
              name="Name"
              onChange={handleName}
              type="Name"
              required={true}
              className="br-2 font-2 my-2 block bg-hue border"
              labelClassName="font-1 bold-1"
              label="Name:*"
              error={nameError}
              showError={showNameError}
              value={name}
            />

            <InputComponent
              name="SerialNumber"
              onChange={handleSerialNumber}
              type="SerialNumber"
              required={true}
              className="br-2 font-2 my-2 block bg-hue border"
              labelClassName="font-1 bold-1"
              label="Serial Number :(optional)"
              value={serialNumber}
            />
            <Box sx={{ minWidth: 120, width: '100%', mt: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="Category-select-label">Category</InputLabel>
                <Select
                  labelId="Category-select-label"
                  id="Category-select"
                  value={category}
                  label="Category"
                  onChange={handleChangeCategory}
                  sx={{ width: '100%' }} // Make the select full-width
                >
                  <MenuItem value="Furniture">Furniture</MenuItem>
                  <MenuItem value="Device">Device</MenuItem>
                  <MenuItem value="Cleaning Material">
                    Cleaning Material
                  </MenuItem>
                  <MenuItem value="Food Utensil">Food Utensil</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120, width: '100%', mt: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="Condition-select-label">Condition</InputLabel>
                <Select
                  labelId="Condition-select-label"
                  id="condition-select"
                  value={condition}
                  label="Condition"
                  onChange={handleChangeCondition}
                  sx={{ width: '100%' }} // Make the select full-width
                >
                  <MenuItem value="new">New</MenuItem>
                  <MenuItem value="good">Good</MenuItem>
                  <MenuItem value="worn out">Worn Out</MenuItem>
                  <MenuItem value="broken">Broken</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120, width: '100%', mt: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="Condition-select-label">Status</InputLabel>
                <Select
                  labelId="status-select-label"
                  id="status-select"
                  value={status}
                  label="Status"
                  onChange={handleChangeStatus}
                  sx={{ width: '100%' }} // Make the select full-width
                >
                  <MenuItem value="borrowed">borrowed</MenuItem>
                  <MenuItem value="available">available</MenuItem>
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
          <h1 className="font-4 bold-1 px-4 py-4 capitalize">
            {t('inventory')}{' '}
          </h1>
          <div className="block text-right px-lg-4 py-lg-4 pt-4 px-2">
            <Button
              variant="contained"
              className="bg-success font-2 poppins capitalize"
              onClick={handleOpen}
            >
              <FaPlus className="mx-2 font-2 bold-0" />
              Add New Item
            </Button>
          </div>
        </div>
        <div className="block">
          <InventoryList />
        </div>
        <footer className="b-top-1px-green card block mt-2 mt-lg-3 text-center mb-0  ">
          <span className="block pointer font-1 bold py-3">
            &copy; Copyright XYZ All Rights Reserved 2025
          </span>
        </footer>
      </div>
    </>
  );
};

export default InventoryWrapper;
