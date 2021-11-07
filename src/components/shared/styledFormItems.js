import styled from 'styled-components';

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;

  color: #1a1b22;
  margin: 0;
  margin-bottom: 22px;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  background-color: none;
  padding: 0 0 9px;

  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin: 0;
  margin-bottom: 2px;
`;
const Label = styled.label`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #2f71e5;
  margin: 0;
  margin-bottom: 10px;
`;
const Error = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: ${(props) => props.align};

  color: #ff0000;
  margin: 0;
  margin-bottom: ${(props) => props.bottom};
`;
const Button = styled.button`
  cursor: pointer;
  width: 100%;
  color: #fff;
  padding: 20px 0;
  border: none;
  background: #2f71e5;
  box-shadow: 0px 5px 15px rgba(14, 26, 57, 0.2);
  border-radius: 100px;
  margin-bottom: 16px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #347eff;
  }

  &:active {
    background-color: #2a65cc;
  }

  &:disabled {
    background-color: #e6e8eb;
    box-shadow: none;
    color: #b6bcbf;
  }
`;
const Option = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  width: 100%;
`;
