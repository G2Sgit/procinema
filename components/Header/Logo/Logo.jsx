import css from "./Logo.module.scss";

const Logo = ({ isHomePage }) => {
  return (
    <div className={isHomePage ? css.logo : css.pageLogo}>
      <svg fill={"white"} width={"80px"} height={"70px"}>
        <use href={"/logo-sprite.svg#logo"} />
      </svg>
    </div>
  );
};

export default Logo;
