"use client";

import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import css from "./WorksButtonAndModal.module.scss"

import ModalWorks from "./ModalWorks/ModalWorks";

const WorksButtonAndModal = () => {
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
      <CiPlay1 size={40}/>
      </button>
      {isOpen && <ModalWorks closeHandler={closeHandler} />}
    </>
  );
};

export default WorksButtonAndModal;