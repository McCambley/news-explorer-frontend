import React, { useState, useRef } from 'react';

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
  emailTaken,
}) {
  const [formErrors, setFormErrors] = useState({ email: '', password: '', name: '' });
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef();

  function checkFormValidity(e) {
    setIsValid(formRef.current.checkValidity());
  }

  function updateFormErrors(e) {
    const { name, validationMessage } = e.target;
    setFormErrors({
      ...formErrors,
      [name]: validationMessage,
    });
    // update the form errors object with the validationMessage of the input that was blurred
    console.log({ name, validationMessage, formErrors });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    // console.log({ input: e.target.value, name: e.target.name });
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
    <Form onSubmit={handleSignUp} onChange={checkFormValidity} ref={formRef} noValidate>
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
        {emailTaken && 'This email is not available'}
      </Error>
      <Button disabled={!isValid} type="submit">
        Sign up
      </Button>
      <Option>
        Or
        <OptionButton onClick={switchModals} type="button">
          Sign in
        </OptionButton>
      </Option>
    </Form>
  );
}
