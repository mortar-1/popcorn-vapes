import Page from '../../components/page/page';
import SignUpForm from '@/components/signUp/signUpForm';

const SignUpElement = () => {
  return <SignUpForm />;
};

export default function SignUpPage() {
  return (
    <Page>
      <SignUpElement />
    </Page>
  );
}
