import { useUserContext } from '@/globals/contexts/User';
import { Avatar, Typography, colors } from '@mui/material';

const ProfilePic = () => {
  const [user, setUser] = useUserContext();

  const Logged = () => {
    return (
      <Avatar
        alt={user?.name}
        src={user?.imgUrl}
        sx={{ width: 56, height: 56, background: colors.blueGrey[900] }}
      />
    );
  };

  const NotLogged = () => {
    return (
      <Typography
        variant="h5"
        noWrap
        component="a"
        sx={{
          mr: 2,
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'white',
          textDecoration: 'none'
        }}
      >
        {'Login'}
      </Typography>
    );
  };

  if (user) return <Logged />;
  return <NotLogged />;
};

export default ProfilePic;
