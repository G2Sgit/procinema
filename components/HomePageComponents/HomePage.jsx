import UnderlinedHeading from "@/components/UnderlinedHeading/UnderlinedHeading";

import css from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <h1 className={css.visually_hidden}>PRODUCTION SERVICES</h1>
      <div className={css.top_container}>
        <h2 className={css.page_title}>PRODUCTION SERVICES</h2>
        <UnderlinedHeading
          tag="h3"
          text="FULL SERVICE PRODUCTION COMPANY DEDICATED TO MEET YOUR EXPECTATIONS"
          position="center"
        />

        <p className={css.page_description_text}>
          We are here to help you attract new audience with the creative work.
        </p>
      </div>
    </>
  );
};

export default HomePage;
