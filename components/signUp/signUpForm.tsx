'use client';

import { useRef, useState } from 'react';
import ValidatedTextField from '../validatedTextField';
import VAL from '../validators';
import { Button } from '@mui/material';

const SignUpForm = () => {
  const errors = useRef({ email: false, name: false });
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleEmailValidityChange = (isValid: boolean) =>
    (errors.current.email = isValid);

  const handleNameValidityChange = (isValid: boolean) =>
    (errors.current.name = isValid);

  const handleSignUp = () => {
    console.log('Sign up clicked');
  };

  return (
    <>
      <h1>Sign up</h1>
      <ValidatedTextField
        label="Name"
        validator={VAL.nameValidator}
        onValidityChange={handleNameValidityChange}
        value={name}
        setter={setName}
      />
      <ValidatedTextField
        label="Email"
        validator={VAL.emailValidator}
        onValidityChange={handleEmailValidityChange}
        value={email}
        setter={setEmail}
      />
      <Button onClick={handleSignUp}>Sign up </Button>
    </>
  );
};

export default SignUpForm;
