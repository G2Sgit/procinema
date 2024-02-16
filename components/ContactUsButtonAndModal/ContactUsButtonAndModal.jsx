"use client";

import { useState } from "react";
import css from "./ContactUsButtonAndModal.module.scss";

import ModalContactForm from "./ModalContactForm/ModalContactForm";

const ContactUsButtonAndModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true);
  };
  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" className={css.button} onClick={openHandler}>
        Contact us
      </button>
      {isOpen && <ModalContactForm closeHandler={closeHandler} />}
    </>
  );
};

export default ContactUsButtonAndModal;
