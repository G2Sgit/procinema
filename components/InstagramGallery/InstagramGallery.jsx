import css from "./InstagramGallery.module.scss";
import UnderlinedHeading from "../UnderlinedHeading/UnderlinedHeading";

const InstagramGallery = function () {
  return (
    <section className={css.section}>
      <section className={css.container}>
        <h1 className={css.visually_hidden}>Instagram gallery</h1>
        <h2 className={css.page_title}>Instagram gallery</h2>
        <UnderlinedHeading tag="h3" position="center" />

        <p className={css.page_description_text}>Follow us on social media:</p>

        <section className={css.background}>
          <div
            className="elfsight-app-978d511f-b0a0-41f9-b2ed-20056fe8766d"
            data-elfsight-app-lazy
          ></div>
        </section>
      </section>
    </section>
  );
};

export default InstagramGallery;
