import css from "./ModalError.module.scss";
import { HiMiniXCircle } from "react-icons/hi2";

const ModalError = ({ closeHandler }) => {
    return (
        <div className={css.backdrop}>
            <div className={css.modal}>
                <HiMiniXCircle className={css.icon}/>
                <p className={css.message}>Error</p>
                <button className={css.button} onClick={closeHandler}>Ok</button>
            </div>
        </div>
    )

}

export default ModalError;