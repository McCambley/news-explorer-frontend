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

export default function SignIn({ email, setEmail, password, setPassword, switchModals }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Sign in</Title>
      <Label for="email">Email</Label>
      <Input
        placeholder="Enter your email"
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Error bottom="12px"></Error>
      <Label for="password">Password</Label>
      <Input
        placeholder="Enter your password"
        type="password"
        name="password"
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
