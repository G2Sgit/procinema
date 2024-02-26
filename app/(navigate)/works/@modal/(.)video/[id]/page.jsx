"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Modal from "@/components/Modal/Modal";
import ModalWorks from "@/components/WorksButtonAndModal/ModalWorks/ModalWorks";

export default function Page({ params }) {
  const router = useRouter();

  return (
    <Modal show={true} onClose={() => router.back()} video>
      <ModalWorks url={params.id} />
    </Modal>
  );
}
