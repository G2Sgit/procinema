import UnderlinedHeading from "@/components/UnderlinedHeading/UnderlinedHeading";

import css from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <h1 className={css.visually_hidden}>About us</h1>
      <div className={css.top_container}>
        <h2 className={css.page_title}>About us:</h2>
        <UnderlinedHeading tag="h3" position="center" />

        <p className={css.page_description_text}>
          The Procinema Studio is a worldwide leader in the post-production
          industry. With over 10 years of professional experience in video
          editing, our team provides high-quality services to each client
          individually. After receiving your raw footage, we begin stitching it
          together according to your production brief. We will deliver the final
          edited video to you in a short amount of time after receiving your
          footage on any convenient file-sharing platform. It is our goal to
          impress you with the best quality and professional approach from the
          first draft.
        </p>
      </div>
    </>
  );
};

export default HomePage;
