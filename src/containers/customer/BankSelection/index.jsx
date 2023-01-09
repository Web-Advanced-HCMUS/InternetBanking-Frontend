import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const banks = [10, 20, 30];

const BankSelection = () => {
  const [age, setAge] = useState('');
  const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <>
      <FormControl variant="standard">
        <InputLabel id="demo-simple-select-standard-label">
          Chọn ngân hàng thụ hưởng
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          {banks.map((bank, idx) => (
            <MenuItem value={bank} key={idx}>
              {bank}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default BankSelection;
