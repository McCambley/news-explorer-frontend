import React from 'react';
import styled from 'styled-components/macro';
import close from '../../images/close.svg';

const Overlay = styled.section`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 5;
  visibility: ${(props) => (props.$how ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$how ? '1' : '0')};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: visibility 0.3s ease, opacity 0.3s ease;

  background: rgba(0, 0, 0, 0.5);
`;
const ContentContainer = styled.div`
  width: 100%;
  max-width: 430px;
  background-color: #fff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 34px 36px 28px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Close = styled.button`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.source});
  background-position: center;
  background-size: cover;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: -40px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export default function Modal({ show, children, closeModals }) {
  return (
    <Overlay $how={show} onClick={closeModals}>
      <ContentContainer onClick={(e) => e.stopPropagation()}>
        <Close source={close} onClick={closeModals} />
        {children}
      </ContentContainer>
    </Overlay>
  );
}
