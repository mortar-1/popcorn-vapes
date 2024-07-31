import { TextField } from '@mui/material';
import { ChangeEvent, Dispatch, useState } from 'react';

interface ValidatedTextFieldPorps {
  label: string;
  validator: (value: string) => string | boolean;
  onValidityChange: (isValid: boolean) => void;
  value: string;
  setter: Dispatch<string>;
}

const ValidatedTextField = ({
  label,
  validator,
  onValidityChange,
  value,
  setter
}: ValidatedTextFieldPorps) => {
  const [error, setError] = useState<string | boolean>(false);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    const errorMessage = validator(newValue);
    setter(newValue);
    setError(errorMessage);
    onValidityChange(!errorMessage);
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={error}
    />
  );
};

export default ValidatedTextField;
