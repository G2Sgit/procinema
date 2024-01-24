import UnderlinedHeading from "../../components/UnderlinedHeading/UnderlinedHeading";
import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./WorksList.module.scss";

const WorksList = () => {
  return (
    <div className={css.section}>
      <Section>
        <Container>
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
        </Container>
      </Section>
      <Section>
        <Container>
          <ul className={css.works_list}>
            <li className={css.work_item}>
              <h3 className={css.work_heading}>Showreel</h3>
              <div className={css.video_thumb}></div>
            </li>
            {/* <li className={css.work_item}>
              <h3 className={css.work_heading}>Color Grading Reel</h3>
              <div className={css.video_thumb}></div>
            </li> */}
          </ul>
        </Container>
      </Section>
    </div>
  );
};

export default WorksList;
