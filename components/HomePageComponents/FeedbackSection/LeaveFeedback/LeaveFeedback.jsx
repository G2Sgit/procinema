import Container from "@/components/Container/Container";
import css from "./LeaveFeedback.module.scss";
import { FaCommentDots } from "react-icons/fa";
import FeedbackButton from "../FeedbackButton/FeedBackButton";

export default function LeaveFeedback() {
  return (
    <>
      <div className={css.wrapper}>
        <FeedbackButton />
      </div>
    </>
  );
}
