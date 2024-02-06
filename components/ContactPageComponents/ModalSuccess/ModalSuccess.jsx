import css from "./ModalSuccess.module.scss";
import { HiMiniDocumentCheck } from "react-icons/hi2";

const ModalSuccess = ({ closeHandler }) => {
    return (
        <div className={css.backdrop}>
            <div className={css.modal}>
                <HiMiniDocumentCheck className={css.icon}/>
                <p className={css.message}>Success</p>
                <button className={css.button} onClick={closeHandler}>Ok</button>
            </div>
        </div>
    )

}

export default ModalSuccess;