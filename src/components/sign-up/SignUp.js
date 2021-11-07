import React from 'react';

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
}) {
  return (
    <Form onSubmit={handleSignUp}>
      <Title>Sign up</Title>
      <Label htmlFor="signupemail">Email</Label>
      <Input
        placeholder="Enter your email"
        type="email"
        id="signupemail"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Error bottom="12px"></Error>
      <Label htmlFor="signuppassword">Password</Label>
      <Input
        placeholder="Enter your password"
        type="password"
        id="signuppassword"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Error bottom="12px"></Error>
      <Label htmlFor="signupname">Name</Label>
      <Input
        placeholder="Enter your name"
        type="text"
        id="signupname"
        required
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Error bottom="12px"></Error>
      <Button disabled={false} type="submit">
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
