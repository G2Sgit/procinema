import UnderlinedHeading from "@/components/UnderlinedHeading/UnderlinedHeading";

import css from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <h1 className={css.visually_hidden}>About us</h1>
      <div className={css.top_container}>
        <h2 className={css.page_title}>About us:</h2>
        <UnderlinedHeading
          tag="h3"
          position="center"
        />

        <p className={css.page_description_text}>
        Procinema is a post-production service studio based in Kyiv, Ukraine. With more than 10 years of professional experience in the video industry our team provides clients with high quality services and individual approach to each one.
        </p>
      </div>
    </>
  );
};

export default HomePage;
