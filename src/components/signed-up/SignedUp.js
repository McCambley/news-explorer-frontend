import React from 'react';
import { Container, SuccessTitle, Option } from './styledSignedUp';

export default function SignUp({ switchModals, show }) {
  return (
    <Container $how={show}>
      <SuccessTitle>Registration successfully completed!</SuccessTitle>
      <Option type="button" onClick={() => switchModals('signin')}>
        Sign in
      </Option>
    </Container>
  );
}
