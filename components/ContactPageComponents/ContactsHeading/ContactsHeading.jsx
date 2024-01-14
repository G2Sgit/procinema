import css from "./ContactsHeading.module.scss";

const ContactsHeading = ({ text, light }) => {
  const arr = text.split(" ");
  const accentTextArray = arr.splice(0, 1);
  const accentText = accentTextArray[0];
  const otherText = arr.join(" ");
  return (
    <h3 className={light ? css["title-light"] : css["title-dark"]}>
      <span className={css["accent-text"]}>{accentText}&nbsp;</span>
      {otherText}
    </h3>
  );
};

export default ContactsHeading;
