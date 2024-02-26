"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Modal from "@/components/Modal/Modal";
import ModalHeading from "@/components/ModalHeading/ModalHeading";
import ModalWorks from "@/components/WorksButtonAndModal/ModalWorks/ModalWorks";

export default function Page({ params }) {
  const router = useRouter();

  return (
    <Modal show={true} onClose={() => router.back()} video>
      {/* <ModalHeading
        title={"Contact us"}
        subtitle={"We will contact you as soon as possible"}
      /> */}
      <ModalWorks url={params.id} />
    </Modal>
  );
}
