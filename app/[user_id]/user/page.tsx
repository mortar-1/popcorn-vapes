'use client';
import { Typography } from '@mui/material';
import Page from '@/components/page/page';
import { useUserContext } from '@/globals/contexts/User';

interface UserInfoProps {
  infoKey: string;
  infoValue: any;
}

const UserInfo = ({ infoKey, infoValue }: UserInfoProps) => (
  <Typography variant="body1">
    {infoKey}: {infoValue}
  </Typography>
);

const AccountPageElement = () => {
  const [user] = useUserContext();
  return (
    <>
      <Typography
        color="primary"
        fontSize="large"
        variant="h5"
        noWrap
        component="h5"
        sx={{
          mr: 2,
          display: { md: 'flex' },
          fontWeight: 500,
          letterSpacing: '.1rem',
          textDecoration: 'none'
        }}
      >
        Account:
      </Typography>
      {user &&
        Object.entries(user).map(
          ([key, value]: [key: string, value: any], i) => (
            <UserInfo key={key + i} infoKey={key} infoValue={value} />
          )
        )}
    </>
  );
};

export default function AccountPage() {
  return (
    <Page>
      <AccountPageElement />
    </Page>
  );
}
