import css from "./LogoSvg.module.scss";

const LogoSvg = ({ isFixed }) => {
  return (
    <svg
      className={isFixed ? css.hidden : css.visible}
      fill={"white"}
      width={"150px"}
      height={"75px"}
    >
      <use href={"/logo-sprite.svg#logo"} />
    </svg>

  );
};

export default LogoSvg;
