import UnderlinedHeading from "@/components/UnderlinedHeading/UnderlinedHeading";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import css from "./FeedbackModal.module.scss";
import { IoMdClose } from "react-icons/io";

const FeedbackModal = ({ closeHandler }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <h2 className={css.title}>Feedback</h2>
        <UnderlinedHeading
          tag="h3"
          text="Share your feelings about working with Prosinema Studio"
          position="center"
          color="black"
        />
        <FeedbackForm />
        <button className={css.button} onClick={closeHandler}>
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
