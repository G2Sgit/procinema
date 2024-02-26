"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Modal from "@/components/Modal/Modal";
import ContactsForm from "@/components/ContactPageComponents/ContactsForm/ContactsForm";
import ModalHeading from "@/components/ModalHeading/ModalHeading";

export default function Page({ props }) {
  const router = useRouter();
  // const { searchParams } = props;

  return (
    <Modal show={true} onClose={() => router.back()}>
      <ModalHeading
        title={"Contact us"}
        subtitle={"We will contact you as soon as possible"}
      />
      <ContactsForm isInModal />
    </Modal>
  );
}
