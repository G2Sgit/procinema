import UnderlinedHeading from "../../components/UnderlinedHeading/UnderlinedHeading";
import css from "./WorksList.module.scss";

const WorksList = () => {
  return (
    <>
      <h1 className={css.visually_hidden}>PRODUCTION SERVICES</h1>
      <div className={css.top_container}>
        <UnderlinedHeading
          tag="h2"
          text="LATEST COMMERCIAL FILMS"
          position="center"
        />

        <p className={css.page_description_text}>
          Commercial Film Production Works
        </p>
      </div>
    </>
  );
};

export default WorksList;
