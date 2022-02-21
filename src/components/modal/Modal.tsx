import React from 'react';
import close from '../../images/close.svg';
import { Overlay, ContentContainer, Close } from './styledModal';

export default function Modal({ show, children, closeModals }) {
  return (
    <Overlay $how={show} onClick={closeModals}>
      <ContentContainer $how={show} onClick={(e) => e.stopPropagation()}>
        <Close source={close} onClick={closeModals} />
        {children}
      </ContentContainer>
    </Overlay>
  );
}
