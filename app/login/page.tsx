'use client';

import Page from '../../components/page/page';
import { useAccountContext } from '@/globals/contexts/Account';
import LoginForm from '@/components/loginForm/loginForm';
import LoggedIn from '@/components/loggedIn/loggedIn';

const LoginPage = () => {
  return <LoginForm />;
};

const LoggedInPage = () => {
  return <LoggedIn />;
};

export default function CheckOutPage() {
  const [account, setAccount] = useAccountContext();
  return <Page>{account ? <LoggedInPage /> : <LoginPage />}</Page>;
}
