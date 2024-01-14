import Paragraph from "@/components/Paragraph/Paragraph";
import css from "./FeedbackItem.module.scss";
import Image from "next/image";

export default function FeedbackItem({ item }) {
  const {
    // avatar,
    name,
    company,
    text,
  } = item;
  return (
    <div className={css.feedbackItem}>
      <div className={css.text}>
        <Paragraph content={text} />
      </div>
      <div className={css.user}>
        <Image
          src="/5034901-200.png"
          width="52"
          height="52"
          alt={name}
          className={css.avatar}
        />
        <div>
          <h2>{name}</h2>
          <p>{company}</p>
        </div>
      </div>
    </div>
  );
}
