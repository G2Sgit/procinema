// import SocialLinks from "../../SocialLinks/SocialLinks";
import SocialIcons from "@/components/Header/ContactLine/SocialIcons/SocialIcons";
import css from "../FooterContent.module.scss";

const ContentAbout = () => {
  return (
    <div className={css.blockWrapper}>
      <h3>About Studio</h3>
      <p className={css.description}>
        Procinema is a post-production service studio based in Kyiv, Ukraine. With more than 10 years of professional experience in the video industry our team provides clients with high quality services and individual approach to each one.
      </p>

      <SocialIcons />
    </div>
  );
};

export default ContentAbout;