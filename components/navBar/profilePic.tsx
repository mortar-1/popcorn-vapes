import { useAccountContext } from '@/globals/contexts/Account';
import { Avatar, Typography, colors } from '@mui/material';

const ProfilePic = () => {
    const account = useAccountContext().account;

    const Logged = () => {
        return <Avatar alt={account?.username} src={account?.profilePictureSrc} sx={{ width: 56, height: 56, background: colors.blueGrey[900] }} />
    };

    const NotLogged = () => {
        return <Typography
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
                textDecoration: 'none',
            }}
        >
            {'Login'}
        </Typography>
    }

    if (account) return <Logged />
    return <NotLogged />
}

export default ProfilePic;