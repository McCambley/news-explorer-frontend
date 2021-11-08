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

export default function SignIn({
  email,
  setEmail,
  password,
  setPassword,
  switchModals,
  handleLogin,
  show,
}) {
  return (
    <Form onSubmit={handleLogin} $how={show} noValidate>
      <Title>Sign in</Title>
      <Label htmlFor="signinemail">Email</Label>
      <Input
        placeholder="Enter your email"
        type="email"
        name="email"
        id="signinemail"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Error bottom="12px"></Error>
      <Label htmlFor="signinpassword">Password</Label>
      <Input
        placeholder="Enter your password"
        type="password"
        name="password"
        id="signinpassword"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Error bottom="12px"></Error>
      <Button disabled={false} type="submit">
        Sign in
      </Button>
      <Option>
        Or
        <OptionButton onClick={switchModals} type="button">
          Sign up
        </OptionButton>
      </Option>
    </Form>
  );
}
