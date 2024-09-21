'use client';

import { Button } from '@mui/material';
import { useAccountContext } from '@/globals/contexts/Account';

const LoggedIn = () => {
  const [account, setAccount] = useAccountContext();

  const handleLogout = () => {
    console.log('Logout clicked');
    setAccount(undefined);
  };

  return (
    <>
      <h1>Logged in: {account?.username}</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default LoggedIn;
