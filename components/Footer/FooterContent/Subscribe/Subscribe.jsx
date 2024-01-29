// import SocialLinks from "../../SocialLinks/SocialLinks";
import SocialIcons from "@/components/Header/ContactLine/SocialIcons/SocialIcons";
import css from "./Subscribe.module.scss";

const Subscribe = () => {
  return (
    <div className={css.subscribeWrapper}>
      <p className={css.subscribeActionText}>Follow us:</p>
      <div className={css.subscribePlatforms}>
        <p className={css.subscribePlatformItem}>Instagram</p>
        <p className={css.subscribePlatformItem}>Vimeo</p>
      </div>
    </div>
  );
};

export default Subscribe;
