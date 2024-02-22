"use client";

import { useState } from "react";
import { GrPlayFill } from "react-icons/gr";
import css from "./HomeShowrealButtonandModal.module.scss"

import ShowrealModalHomePage from "./ShowrealModalHomePage/ShowrealModalHomePage";

const HomeShowrealButtonandModal = ({url}) => {
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
      <GrPlayFill size={20} style={{ color: 'white'}}/>
      </button>
      {isOpen && <ShowrealModalHomePage closeHandler={closeHandler} url={url}/>}
    </>
  );
};

export default HomeShowrealButtonandModal;