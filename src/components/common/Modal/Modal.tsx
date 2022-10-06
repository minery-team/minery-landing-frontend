import React, { useEffect, useState, ReactNode } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ show, onClose, children }: ModalProps) => {
  const [target, setTarget] = useState<Element | null>(null);
  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };
  const modalContent = show ? (
    <StyledModal onClick={handleCloseClick}>{children}</StyledModal>
  ) : null;
  useEffect(() => {
    if (document) {
      setTarget(document.querySelector("#modal"));
    }
  }, []);

  if (!target) return;

  return ReactDOM.createPortal(modalContent, target);
};

const StyledModal = styled.div`
  border: 1px solid blue;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
`;

export default Modal;
