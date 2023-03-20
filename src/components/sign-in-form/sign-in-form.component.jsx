import { useState} from "react";
import {
  signInWithGooglePopup,
  SignInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";


import { SignInContainer, ButtonsContainer} from "./sign-in-form.styles.jsx";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);

  const { email, password } = formField;


  const resetFormField = () => {
    setFormField(defaultFormField);
  };

  const SignInWithGoogle = async () => {
    await signInWithGooglePopup();

  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await SignInAuthUserWithEmailAndPassword(email, password)
      resetFormField();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert('incorrect password for email');
          break;
        case "auth/user-not-found":
          alert('no user associated with this email');
          break;
        default:
          console.log(err);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <ButtonsContainer>
          <Button buttonType={ BUTTON_TYPE_CLASSES.inverted } type="submit">
            Sign in
          </Button>
          <Button onClick={SignInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
