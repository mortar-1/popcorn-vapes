'use client';

import { Button } from '@mui/material';
import { useUserContext } from '@/globals/contexts/User';

const LoggedIn = () => {
  const [user, setUser] = useUserContext();

  const handleLogout = () => {
    console.log('Logout clicked');
    setUser(undefined);
  };

  return (
    <>
      <h1>Logged in: {user?.name}</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default LoggedIn;
