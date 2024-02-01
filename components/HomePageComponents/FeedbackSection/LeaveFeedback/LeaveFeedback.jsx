import Container from "@/components/Container/Container";
import css from "./LeaveFeedback.module.scss";
import { FaCommentDots } from "react-icons/fa";

export default function LeaveFeedback() {
  return (
    <>
      <Container>
        <div className={css.wrapper}>
          <h2>Here you can leave your feedback.</h2>
          <button type="button" className={css.button}>
            Text us
            <FaCommentDots />
          </button>
        </div>
      </Container>
    </>
  );
}
