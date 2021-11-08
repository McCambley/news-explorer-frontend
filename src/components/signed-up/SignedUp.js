import React from 'react';
import styled from 'styled-components/macro';
import { Form, Title, OptionButton } from '../shared/styledFormItems';

const SuccessTitle = styled(Title)`
  margin-bottom: 14px;
`;
const Option = styled(OptionButton)`
  font-family: 'Inter', sans-serif;
  text-align: left;
  margin-left: 0;
  font-size: 18px;
  line-height: 22px;
`;

export default function SignUp({ switchModals, show }) {
  return (
    <Form $how={show}>
      <SuccessTitle>Registration successfully completed!</SuccessTitle>
      <Option type="button" onClick={() => switchModals('signin')}>
        Sign in
      </Option>
    </Form>
  );
}
