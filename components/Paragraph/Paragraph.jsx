import css from "./Paragraph.module.scss";

const Paragraph = ({ content }) => {
  return <p className={css.text}>{content}</p>;
};

export default Paragraph;
