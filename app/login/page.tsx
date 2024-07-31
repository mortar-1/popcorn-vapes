import { Typography } from "@mui/material";
import Page from "../../components/page/page";
import LoginForm from "@/components/loginForm/loginForm";

const LoginPage = () => {
  return <LoginForm />;
};

export default function CheckOutPage() {
  return (
    <Page>
      <LoginPage />
    </Page>
  );
}
