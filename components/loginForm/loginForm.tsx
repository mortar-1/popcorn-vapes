'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { Button, TextField } from '@mui/material';

import ValidatedTextField from '../validatedTextField';
import { users as mockUsers } from '@/components/mocks';
import VAL from '../validators';
import { useUserContext } from '@/globals/contexts/User';

const LoginForm = () => {
  const [account, setAccount] = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useRef({ email: false });

  const handleLogin = () => {
    console.log('Login clicked');
    setAccount(mockUsers[0]);
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const handleEmailValidityChange = (isValid: boolean) =>
    (errors.current.email = isValid);

  return (
    <>
      <h1>Login</h1>
      <ValidatedTextField
        label="Email"
        validator={VAL.emailValidator}
        onValidityChange={handleEmailValidityChange}
        value={email}
        setter={setEmail}
      />
      <TextField
        label="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button onClick={handleLogin}>Login</Button>
    </>
  );
};

export default LoginForm;
