"use client";

import { useRouter } from "next/navigation";
import ContactsForm from "../ContactPageComponents/ContactsForm/ContactsForm";
import Modal from "../Modal/Modal";
import ModalHeading from "../ModalHeading/ModalHeading";
import NewFeedbackForm from "../HomePageComponents/FeedbackSection/FeedbackForm/FeedbackForm";
import ModalFormSubmit from "../ContactPageComponents/ModalFormSubmit/ModalFormSubmit";

export default function FormModal({ type, status }) {
  const router = useRouter();
  return (
    <Modal
      show={true}
      onClose={() => {
        router.back();
      }}
    >
      {type && (
        <ModalHeading
          title={type === "new-contact" ? "Contact us" : "Feedback"}
          subtitle={
            type === "new-contact"
              ? "We will contact you as soon as possible"
              : "Share your feelings about working with Prosinema Studio"
          }
        />
      )}

      {type === "new-contact" && <ContactsForm isInModal />}
      {type === "new-feedback" && <NewFeedbackForm isInModal />}
      {status && (
        <ModalFormSubmit
          submit={status === "ok" && "success"}
          text={status === "ok" ? "Success" : "Error. Try again later"}
          buttonText="OK"
          closeHandler={() => {
            router.back();
          }}
        />
      )}
    </Modal>
  );
}
