import Container from "@/components/Container/Container";
import css from "./LeaveFeedback.module.scss";
import { FaCommentDots } from "react-icons/fa";

export default function LeaveFeedback() {
  return (
    <>
        <div className={css.wrapper}>
          <button type="button" className={css.button}>
          LEAVE A COMMENT
            <FaCommentDots />
          </button>
        </div>
    </>
  );
}
