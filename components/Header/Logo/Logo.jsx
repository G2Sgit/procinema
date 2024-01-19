import css from "./Logo.module.scss";
import LogoText from "./LogoText/LogoText";
import LogoSvg from "./LogoSvg/LogoSvg";

const Logo = ({ isHomePage, isFixed }) => {
  return (
    <div className={isHomePage ? css.logo : css.pageLogo}>
      {/* <svg className={isFixed ? css.hidden:css.visible} fill={"white"} width={"80px"} height={"70px"}>
        <use href={"/logo-sprite.svg#logo"} />
      </svg> */}
      <LogoSvg isFixed={isFixed}/>
      <LogoText logoText="Post Production Studio"/>
    </div>
  );
};

export default Logo;
