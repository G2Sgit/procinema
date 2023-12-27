import CenterDividingLine from "../../DividingLines/CenterDividingLine/CenterDividingLine";
import LeftDividingLine from "../../DividingLines/LeftDividingLine/LeftDividingLine";

import css from "./ServicesList.module.scss";

const ServicesList = () => {
  return (
    <>
      <h1 className={css.visually_hidden}>PRODUCTION SERVICES</h1>
      <h2 className={css.page_title}>PRODUCTION SERVICES</h2>
      <h3 className={css.page_secondary_title}>
        CINEMART MOTION PICTURE IS FULL SERVICE PRODUCTION COMPANY SPECIALIZED
        IN COMMERCIAL FILMS, DOCUMENTARIES, DRONE FILMING, CORPORATE FILMS,
        MUSIC VIDEOS AND MANY OTHERS.
      </h3>
      {/* <CenterDividingLine /> */}

      <p className={css.page_description_text}>
        As a result of more than 15 years of experience in commercial and film
        production, Cinemart Production Services offer full production support.
        We can create best commercial films for your brand....
      </p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default ServicesList;
