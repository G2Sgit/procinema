import css from "./LogoText.module.scss";

const LogoText = ({logoText, isFixed}) => {
  return <span className={`${css.logoText} ${isFixed ? css.hidden:css.visible}`}>{logoText}</span>;
};

export default LogoText;
