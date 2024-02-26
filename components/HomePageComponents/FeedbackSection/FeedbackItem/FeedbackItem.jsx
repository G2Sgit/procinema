import Paragraph from "@/components/Paragraph/Paragraph";
import css from "./FeedbackItem.module.scss";
import Image from "next/image";

export default function FeedbackItem({ item }) {
  const { name, text } = item;
  return (
    <div className={css.feedbackItem}>
      <div className={css.text}>
        <Paragraph content={text} />
        <h2>{name}</h2>
      </div>
      {/* <div className={css.user}>
        <div>
        </div>
      </div> */}
    </div>
  );
}
