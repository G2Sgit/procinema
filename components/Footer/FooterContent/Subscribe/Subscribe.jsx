// import SocialLinks from "../../SocialLinks/SocialLinks";
import SocialIcons from "@/components/Header/ContactLine/SocialIcons/SocialIcons";
import css from "./Subscribe.module.scss";

const Subscribe = () => {
  return (
    <div className={css.subscribeWrapper}>
      <p className={css.subscribeActionText}>Follow us:</p>
      <div className={css.subscribePlatforms}>
        <a className={css.subscribePlatformItem} href="https://www.instagram.com/procinema_studio?igsh=MTVydmlmNXAzYzNueg%3D%3D&utm_source=qr">Instagram</a>
        <a className={css.subscribePlatformItem} href="https://vimeo.com/procinemastudio">Vimeo</a>
      </div>
    </div>
  );
};

export default Subscribe;
