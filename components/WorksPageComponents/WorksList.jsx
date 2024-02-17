import UnderlinedHeading from "../../components/UnderlinedHeading/UnderlinedHeading";
import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./WorksList.module.scss";
import { CiPlay1 } from "react-icons/ci";
import WorksButtonAndModal from "../WorksButtonAndModal/WorksButtonAndModal";





const WorksList = () => {
  return (
    <div className={css.wrapper}>
      <Section topSection="topSection">
        <Container>
          <h1 className={css.visually_hidden}>PRODUCTION SERVICES</h1>
          <div className={css.top_container}>
            <UnderlinedHeading
              tag="h2"
              text="LATEST COMMERCIAL PROJECTS"
              position="center"
            />
            
            <p className={css.page_description_text}>
            Commercials produced by Procinema:
            </p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <ul className={css.works_list}>
            <li className={css.work_item}>
              <div className={css.video_thumb}>
                <div className={css.showreelOnCardItems}>
                  <h3 className={css.showreelTitle}>Showreel</h3>
                  <WorksButtonAndModal url="https://player.vimeo.com/video/912707190?h=a0e16f4890"/>
                </div>
              </div>
            </li>
            {/* <li className={css.work_item}>
              <h3 className={css.work_heading}>Color Grading Reel</h3>
              <div className={css.video_thumb}></div>
            </li> */}
          </ul>
        </Container>
      </Section>
      <Section>
        <Container>
          <ul className={css.works_list}>
            <li className={css.work_item}>
              <div className={css.video_thumb}>
                <div className={css.showreelOnCardItems}>
                  <h3 className={css.showreelTitle}>Documentary</h3>
                  <WorksButtonAndModal url="https://player.vimeo.com/video/912707190?h=a0e16f4890"/>
                </div>
              </div>
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
