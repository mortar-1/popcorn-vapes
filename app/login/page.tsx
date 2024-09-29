'use client';

import Page from '../../components/page/page';
import { useUserContext } from '@/globals/contexts/User';
import LoginForm from '@/components/loginForm/loginForm';
import LoggedIn from '@/components/loggedIn/loggedIn';

const LoginPage = () => {
  return <LoginForm />;
};

const LoggedInPage = () => {
  return <LoggedIn />;
};

export default function CheckOutPage() {
  const [user, setUser] = useUserContext();
  return <Page>{user ? <LoggedInPage /> : <LoginPage />}</Page>;
}
