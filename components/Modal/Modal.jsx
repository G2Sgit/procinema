"use client";
import css from "./Modal.module.scss";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

export default function Modal({ show, children, onClose, video, status }) {
  return (
    <Transition.Root as={Fragment} show={show}>
      <Dialog as="div" className={css.wrapper} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={css.backdrop} />
        </Transition.Child>
        <Dialog.Panel className={`${css.modal} ${video && css.modalVideo}`}>
          <button className={css.button} onClick={onClose}>
            <IoMdClose style={{ color: "black" }} size={30} />
          </button>
          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}
