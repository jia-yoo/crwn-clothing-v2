import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { AuthentificationContainer } from './authentication.styles.jsx'

const Authentication = () => {
  return (
    <AuthentificationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthentificationContainer>
  );
};

export default Authentication;
