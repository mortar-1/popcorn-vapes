'use client'
import { useRef } from "react";
import ValidatedTextField from "../validatedTextField";
import VAL from "../validators";
import { useNameContext } from "@/globals/contexts/Name";

const LoginForm = () => {
  const { name, setName } = useNameContext();

  const errors = useRef({ name: false, email: false });

  const handleNameValidityChange = (isValid: boolean) =>
    (errors.current.name = isValid);

  return (
    <>
      <h1>Login Form</h1>
      <ValidatedTextField
        label="Name"
        validator={VAL.nameValidator}
        onValidityChange={handleNameValidityChange}
        value={name}
        setter={setName}
      />
    </>
  );
};

export default LoginForm;
