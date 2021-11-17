import React, { useState, useRef, useEffect } from 'react';

import {
  Form,
  Title,
  Input,
  Label,
  Error,
  Button,
  Option,
  OptionButton,
} from '../shared/styledFormItems';

export default function SignUp({
  email,
  setEmail,
  password,
  setPassword,
  switchModals,
  userName,
  setUserName,
  handleSignUp,
  signUpErrorMessage,
  show,
}) {
  const [formErrors, setFormErrors] = useState({ email: '', password: '', name: '' });
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    setFormErrors({ email: '', password: '', name: '' });
  }, [show]);

  // update button state on any change
  function checkFormValidity(e) {
    setIsValid(formRef.current.checkValidity());
  }

  // to run for the first time when inputs are blurred
  // or when inputs change after errors have been shown
  function updateFormErrors(e) {
    const { name, validationMessage } = e.target;
    // update the form errors object with the validationMessage of blurred input
    setFormErrors({
      ...formErrors,
      [name]: validationMessage,
    });
  }

  // to run whenever inputs on the form change
  function handleChange(e) {
    const { name, value } = e.target;
    // adjust error message if one has already been shown
    formErrors[name] && updateFormErrors(e);
    // update form values
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setUserName(value);
        break;
      default:
        break;
    }
  }

  return (
    <Form onSubmit={handleSignUp} $how={show} onChange={checkFormValidity} ref={formRef} noValidate>
      <Title>Sign up</Title>
      <Label htmlFor="signupemail">Email</Label>
      <Input
        placeholder="Enter your email"
        type="email"
        name="email"
        id="signupemail"
        required
        value={email}
        // onChange={(e) => setEmail(e.target.value)}
        onChange={handleChange}
        onBlur={updateFormErrors}
      />
      <Error bottom="12px">{formErrors.email}</Error>
      <Label htmlFor="signuppassword">Password</Label>
      <Input
        placeholder="Enter your password"
        type="password"
        name="password"
        id="signuppassword"
        required
        value={password}
        // onChange={(e) => setPassword(e.target.value)}
        onChange={handleChange}
        onBlur={updateFormErrors}
      />
      <Error bottom="12px">{formErrors.password}</Error>
      <Label htmlFor="signupname">Name</Label>
      <Input
        placeholder="Enter your name"
        type="text"
        name="name"
        minLength="2"
        maxLength="30"
        id="signupname"
        required
        value={userName}
        // onChange={(e) => setUserName(e.target.value)}
        onChange={handleChange}
        onBlur={updateFormErrors}
      />
      <Error bottom="2px">{formErrors.name}</Error>
      <Error bottom="8px" align="center">
        {signUpErrorMessage}
      </Error>
      <Button disabled={!isValid} type="submit">
        Sign up
      </Button>
      <Option>
        Or
        <OptionButton onClick={() => switchModals('signin')} type="button">
          Sign in
        </OptionButton>
      </Option>
    </Form>
  );
}
