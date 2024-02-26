import css from "./ModalHeading.module.scss";
export default function ModalHeading({ title, subtitle }) {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
      <h3 className={css.subtitle}>{subtitle}</h3>
    </>
  );
}
