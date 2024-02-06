import css from "./ModalFormSubmit.module.scss";
import { HiMiniDocumentCheck } from "react-icons/hi2";
import { HiMiniXCircle } from "react-icons/hi2";

const ModalFormSubmit = ({ submit, text, buttonText, closeHandler }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        {submit === "success" ? (
          <HiMiniDocumentCheck className={css["icon-success"]} />
        ) : (
          <HiMiniXCircle className={css["icon-error"]} />
        )}

        <p className={css.message}>{text}</p>
        <button className={css.button} onClick={closeHandler}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalFormSubmit;
